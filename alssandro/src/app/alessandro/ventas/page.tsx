'use client';
import { useState } from 'react';

interface Product {
  name: string;
  price: number;
  imgSrc: string;
}

const products: Product[] = [
  { name: 'Topping', price: 0.5, imgSrc: 'topping.png' },
  { name: 'Bola extra', price: 1.5, imgSrc: 'bola_extra.png' },
  { name: 'Cucurucho Mediano', price: 3.7, imgSrc: 'cucurucho_mediano.png' },
  { name: 'Cucurucho Grande', price: 4.5, imgSrc: 'cucurucho_grande.png' },
  { name: 'Cucurucho Solo', price: 0.5, imgSrc: 'cucurucho_solo.png' },
  {
    name: 'Cucurucho Chocolate',
    price: 4.0,
    imgSrc: 'cucurucho_chocolate_helado.png',
  },
  { name: 'Tarrina Pequeña', price: 3.0, imgSrc: 'Tarrina_pequeña.png' },
  { name: 'Tarrina Mediana', price: 4.0, imgSrc: 'Tarrina_medina.png' },
  { name: 'Tarrina Grande', price: 5.0, imgSrc: 'Tarrina_grande.png' },
  { name: 'Crepes 1', price: 4.5, imgSrc: 'crepe_1.png' },
  { name: 'Crepes 2', price: 5.0, imgSrc: 'crepe_2.png' },
  { name: 'Crepes 3', price: 5.5, imgSrc: 'crepe_3.png' },
  { name: 'Waffles Bubble 1', price: 4.5, imgSrc: 'waffes_buble_2.jpg' },
  { name: 'Waffles Bubble 2', price: 5.0, imgSrc: 'waffes_buble_3.jpg' },
  { name: 'Waffles Bubble 3', price: 5.5, imgSrc: 'waffes_buble_4.jpg' },
  { name: 'Gofres 1', price: 4.0, imgSrc: 'gofre_2.png' },
  { name: 'Gofres 2', price: 4.5, imgSrc: 'gofre_3.png' },
  { name: 'Gofres 3', price: 5.0, imgSrc: 'gofre_4.png' },
  { name: 'Smoothies', price: 4.5, imgSrc: 'smoothies.png' },
  { name: 'Batido Helado', price: 4.5, imgSrc: 'batido_helado.png' },
  { name: 'Helado Litro', price: 17.0, imgSrc: 'helado_litro.png' },
  { name: 'Helado Medio Litro', price: 10.0, imgSrc: 'Helado_medio_litro.png' },
  { name: 'Agua', price: 1.2, imgSrc: 'botella-de-agua.png' },
  { name: 'Refresco', price: 1.8, imgSrc: 'refresco.png' },
];

function App() {
  const [order, setOrder] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  const addProduct = (product: Product) => {
    setOrder([...order, product]);
    setTotal(total + product.price);
  };

  const resetOrder = () => {
    setOrder([]);
    setTotal(0);
  };

  const removeLastProduct = () => {
    if (order.length === 0) return;
    const lastProduct = order[order.length - 1];
    setOrder(order.slice(0, -1));
    setTotal(total - lastProduct.price);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        Gelateria Alessandro
      </h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Pedido</h3>
        <ul id="pedido-list" className="list-disc pl-5">
          {order.map((product, index) => (
            <li key={index}>
              {product.name} - {product.price} €
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold">
          Total: <span id="total">{total.toFixed(2)}</span> €
        </h3>
        <button
          onClick={resetOrder}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Reiniciar Pedido
        </button>
        <button
          onClick={removeLastProduct}
          className="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-2"
        >
          Eliminar Último
        </button>
      </div>
      <h3 className="text-xl font-semibold mb-4">Productos</h3>
      <div
        id="productos"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="producto border p-4 rounded cursor-pointer"
            onClick={() => addProduct(product)}
          >
            <img src={product.imgSrc} alt={product.name} className="mb-2" />
            <p>
              {product.name} - {product.price.toFixed(2)} €
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
