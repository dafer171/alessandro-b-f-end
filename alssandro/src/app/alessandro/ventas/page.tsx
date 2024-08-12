'use client';
import { useEffect, useState } from 'react';
import ProductList from '@/app/ui/product/productList';
import { fetchAllProducts } from '@/app/lib/data';
import { Product } from '@/app/lib/definitions';

export default function Page() {
  const [order, setOrder] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const productsData = await fetchAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }

    loadProducts();
  }, []);

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
      <ProductList products={products} onAddProduct={addProduct} />
    </div>
  );
}
