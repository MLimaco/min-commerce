import { type Product } from '../models/product.ts';

export default function ProductCard(props : Product) {
  return (
    <div className="bg-gray shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{props.title}</h2>
    </div>
  );
}