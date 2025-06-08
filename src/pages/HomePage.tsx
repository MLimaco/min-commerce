import ProductCard from '../components/ProductCard.tsx'
import { products } from '../models/product.ts'

export default function HomePage() {
  return (
    <div className="container py-8">
      <h2 className="text-xl mb-6">Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map(product => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}