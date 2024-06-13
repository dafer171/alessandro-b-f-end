import { sql } from '@vercel/postgres';
import { Product } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchAllProducts() {
  try {
    const data =
      await sql<Product>`SELECT id, pname, price FROM products ORDER BY id;`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}
