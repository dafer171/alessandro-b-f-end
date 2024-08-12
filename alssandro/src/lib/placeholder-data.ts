// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const products = [
  {
    id: '00000000-0000-0000-0000-000000000001',
    name: 'Topping',
    price: '0.5',
    image_url: '/images/topping.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000002',
    name: 'Bola extra',
    price: '1.5',
    image_url: '/images/bola_extra.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000003',
    name: 'Bola extra',
    price: '1.5',
    image_url: '/images/bola_extra.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000004',
    name: 'Cucurucho Solo',
    price: '0.50',
    image_url: '/images/cucurucho_solo.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000005',
    name: 'Cucurucho Chocolate',
    price: '4.00',
    image_url: '/images/cucurucho_chocolate_helado.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000006',
    name: 'Tarrina Pequeña',
    price: '3.00',
    image_url: '/images/Tarrina_pequeña.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000007',
    name: 'Tarrina Mediana',
    price: '4.00',
    image_url: '/images/Tarrina_medina.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000008',
    name: 'Tarrina Grande',
    price: '5.00',
    image_url: '/images/Tarrina_grande.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000009',
    name: 'Crepes 1',
    price: '4.50',
    image_url: '/images/crepe_1.png',
  },
  {
    id: '00000000-0000-0000-0000-00000000000A',
    name: 'Crepes 2',
    price: '5.00',
    image_url: '/images/crepe_2.png',
  },
  {
    id: '00000000-0000-0000-0000-00000000000B',
    name: 'Crepes 3',
    price: '5.50',
    image_url: '/images/crepe_3.png',
  },
  {
    id: '00000000-0000-0000-0000-00000000000C',
    name: 'Waffles Bubble 1',
    price: '4.50',
    image_url: '/images/waffes_buble_2.jpg',
  },
  {
    id: '00000000-0000-0000-0000-00000000000D',
    name: 'Waffles Bubble 2',
    price: '5.00',
    image_url: '/images/waffes_buble_3.jpg',
  },
  {
    id: '00000000-0000-0000-0000-00000000000E',
    name: 'Waffles Bubble 3',
    price: '5.50',
    image_url: '/images/waffes_buble_4.jpg',
  },
  {
    id: '00000000-0000-0000-0000-00000000000F',
    name: 'Gofres 1',
    price: '4.00',
    image_url: '/images/gofre_2.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000010',
    name: 'Gofres 2',
    price: '4.50',
    image_url: '/images/gofre_3.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000011',
    name: 'Gofres 3',
    price: '5.00',
    image_url: '/images/gofre_4.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000012',
    name: 'Smoothies',
    price: '4.50',
    image_url: '/images/smoothies.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000013',
    name: 'Batido Helado',
    price: '4.50',
    image_url: '/images/batido_helado.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000014',
    name: 'Helado Litro',
    price: '17.00',
    image_url: '/images/helado_litro.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000015',
    name: 'Helado Medio Litro',
    price: '10.00',
    image_url: '/images/Helado_medio_litro.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000016',
    name: 'Agua',
    price: '1.20',
    image_url: '/images/botella-de-agua.png',
  },
  {
    id: '00000000-0000-0000-0000-000000000017',
    name: 'Refresco',
    price: '1.80',
    image_url: '/images/refresco.png',
  },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
  products,
};
