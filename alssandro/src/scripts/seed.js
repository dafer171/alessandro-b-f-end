const { Client } = require('pg');
async function seedProducts(client) {
  const products = [
    {
      name: 'Topping',
      price: 0.5,
      image_url: '../../public/images/topping.png',
    },
    {
      name: 'Bola extra',
      price: 1.5,
      image_url: '../../public/images/bola_extra.png',
    },
    {
      name: 'Cucurucho Mediano',
      price: 3.7,
      image_url: '../../public/images/cucurucho_mediano.png',
    },
    {
      name: 'Cucurucho Grande',
      price: 4.5,
      image_url: '../../public/images/cucurucho_grande.png',
    },
    {
      name: 'Cucurucho Solo',
      price: 0.5,
      image_url: '../../public/images/cucurucho_solo.png',
    },
    {
      name: 'Cucurucho Chocolate',
      price: 4.0,
      image_url: '../../public/images/cucurucho_chocolate_helado.png',
    },
    {
      name: 'Tarrina Pequeña',
      price: 3.0,
      image_url: '../../public/images/Tarrina_pequeña.png',
    },
    {
      name: 'Tarrina Mediana',
      price: 4.0,
      image_url: '../../public/images/Tarrina_medina.png',
    },
    {
      name: 'Tarrina Grande',
      price: 5.0,
      image_url: '../../public/images/Tarrina_grande.png',
    },
    {
      name: 'Crepes 1',
      price: 4.5,
      image_url: '../../public/images/crepe_1.png',
    },
    {
      name: 'Crepes 2',
      price: 5.0,
      image_url: '../../public/images/crepe_2.png',
    },
    {
      name: 'Crepes 3',
      price: 5.5,
      image_url: '../../public/images/crepe_3.png',
    },
    {
      name: 'Waffles Bubble 1',
      price: 4.5,
      image_url: '../../public/images/waffes_buble_2.jpg',
    },
    {
      name: 'Waffles Bubble 2',
      price: 5.0,
      image_url: '../../public/images/waffes_buble_3.jpg',
    },
    {
      name: 'Waffles Bubble 3',
      price: 5.5,
      image_url: '../../public/images/waffes_buble_4.jpg',
    },
    {
      name: 'Gofres 1',
      price: 4.0,
      image_url: '../../public/images/gofre_2.png',
    },
    {
      name: 'Gofres 2',
      price: 4.5,
      image_url: '../../public/images/gofre_3.png',
    },
    {
      name: 'Gofres 3',
      price: 5.0,
      image_url: '../../public/images/gofre_4.png',
    },
    {
      name: 'Smoothies',
      price: 4.5,
      image_url: '../../public/images/smoothies.png',
    },
    {
      name: 'Batido Helado',
      price: 4.5,
      image_url: '../../public/images/batido_helado.png',
    },
    {
      name: 'Helado Litro',
      price: 17.0,
      image_url: '../../public/images/helado_litro.png',
    },
    {
      name: 'Helado Medio Litro',
      price: 10.0,
      image_url: '../../public/images/Helado_medio_litro.png',
    },
    {
      name: 'Agua',
      price: 1.2,
      image_url: '../../public/images/botella-de-agua.png',
    },
    {
      name: 'Refresco',
      price: 1.8,
      image_url: '../../public/images/refresco.png',
    },
  ];

  await client.query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `);

  for (const product of products) {
    await client.query(
      `INSERT INTO products (name, price, image_url) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING;`,
      [product.name, product.price, product.image_url]
    );
  }

  console.log('Seeded products table');
}

async function seedSales(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS sales (
      id SERIAL PRIMARY KEY,
      sale_date TIMESTAMP NOT NULL DEFAULT NOW(),
      total DECIMAL(10, 2) NOT NULL,
      payment_method VARCHAR(20) NOT NULL CHECK (payment_method IN ('efectivo', 'tarjeta'))
    );
  `);

  console.log('Created sales table');
}

async function seedSaleItems(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS sale_items (
      id SERIAL PRIMARY KEY,
      sale_id INT NOT NULL,
      product_id INT NOT NULL,
      quantity INT NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      FOREIGN KEY (sale_id) REFERENCES sales(id) ON DELETE CASCADE,
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    );
  `);

  console.log('Created sale_items table');
}

async function main() {
  const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  });

  await client.connect();

  await seedProducts(client);
  await seedSales(client);
  await seedSaleItems(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err
  );
});
