import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    brand: string;
    price: number;
    rating: number;
    image: string;
    category: string;
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-50 group">
      <figure className="aspect-square overflow-hidden bg-gray-50 p-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full rounded-2xl group-hover:scale-105 transition-transform duration-500"
        />
      </figure>
      <div className="card-body p-5">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-lg leading-tight font-bold text-gray-800 line-clamp-2">{product.name}</h2>
          <div className="badge bg-orange-100 text-orange-800 border-none whitespace-nowrap">{product.category}</div>
        </div>
        <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
        
        <div className="flex items-center gap-1 mt-1 text-amber-500">
          <Star size={16} fill="currentColor" />
          <span className="font-semibold">{product.rating}</span>
        </div>
        
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-2xl font-bold text-orange-600">${product.price}</span>
          <Link to={`/products/${product.id}`} className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white border-none rounded-full px-6">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
