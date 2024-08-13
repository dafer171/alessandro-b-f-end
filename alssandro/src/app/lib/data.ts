const dotenv = require('dotenv');
const path = require('path');

// Cargar .env
const result = dotenv.config();

// Verificar si hubo algún error al cargar .env
if (result.error) {
  console.error('Error cargando el archivo .env:', result.error);
} else {
  console.log(
    'Archivo .env cargado desde:',
    path.resolve(process.cwd(), '.env')
  );
}

//require('dotenv').config();

const { db } = require('@vercel/postgres');

import { sql } from '@vercel/postgres';
import { Product } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchAllProducts() {
  try {
    const data =
      await sql<Product>`SELECT id, name, price, image_url FROM products ORDER BY id;`;
    console.log(data);
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}
