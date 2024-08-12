import { Product } from '@/app/lib/definitions';

interface ProductListProps {
  products: Product[];
  onAddProduct: (product: Product) => void;
}

export default function ProductList({
  products,
  onAddProduct,
}: ProductListProps) {
  return (
    <div
      id="productos"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="producto border p-4 rounded cursor-pointer"
          onClick={() => onAddProduct(product)}
        >
          <img src={product.image_url} alt={product.name} className="mb-2" />
          <p>
            {product.name} - {product.price.toFixed(2)} €
          </p>
        </div>
      ))}
    </div>
  );
}
