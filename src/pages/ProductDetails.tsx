import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../data/products.json';
import { Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = productsData.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
        <button onClick={() => navigate('/products')} className="btn btn-outline mt-4">Back to Products</button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl p-6 shadow-sm border border-orange-50">
        
        {/* Image Gallery Column */}
        <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Details Column */}
        <div className="flex flex-col justify-center">
          <div className="badge badge-lg bg-orange-100 text-orange-800 border-none mb-4 font-semibold px-4 py-3">
            {product.category}
          </div>
          
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
            {product.name}
          </h1>
          <p className="text-xl text-gray-500 font-medium mb-6">by {product.brand}</p>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-amber-500">
              <Star fill="currentColor" size={24} />
              <span className="text-xl font-bold ml-2 text-gray-800">{product.rating}</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>

          <div className="text-5xl font-black text-orange-600 mb-8 border-b border-gray-100 pb-8">
            ${product.price.toFixed(2)}
          </div>

          <div className="prose prose-lg text-gray-600 mb-8">
            <p>{product.description}</p>
            <p className="mt-4">Designed for ultimate summer comfort. Our carefully curated materials ensure you stay fresh all day long.</p>
          </div>

          <button 
            className="btn btn-lg bg-orange-500 hover:bg-orange-600 text-white border-none rounded-full w-full sm:w-auto px-12 text-lg shadow-lg shadow-orange-200"
            disabled={product.stock === 0}
            onClick={() => alert('Added to cart!')}
          >
            Add to Cart
          </button>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                <ShieldCheck />
              </div>
              <span className="text-sm font-semibold text-gray-700">1 Year Warranty</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                <Truck />
              </div>
              <span className="text-sm font-semibold text-gray-700">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                <RotateCcw />
              </div>
              <span className="text-sm font-semibold text-gray-700">30 Day Returns</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
