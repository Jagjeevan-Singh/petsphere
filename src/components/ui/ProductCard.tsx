import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  petType: string[];
  tags: string[];
}

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress, onAddToCart }) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div 
      className="bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      onClick={onPress}
    >
      <div className="relative">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-36 object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-white bg-opacity-90 rounded-xl">
          <Heart size={14} className="text-primary" />
        </button>
        {product.originalPrice && (
          <div className="absolute top-12 right-2 bg-primary px-2 py-1 rounded-xl">
            <span className="text-white text-xs font-bold">{discountPercentage}% OFF</span>
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <span className="text-white font-bold">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <p className="text-xs text-gray-500 font-semibold uppercase mb-1">{product.brand}</p>
        <h3 className="font-bold text-gray-800 text-sm mb-2 line-clamp-2 leading-tight">{product.name}</h3>
        
        <div className="flex items-center mb-3">
          <Star size={12} className="text-yellow-500 mr-1" fill="currentColor" />
          <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-center mb-4">
          <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        <button 
          className={`w-full flex items-center justify-center py-3 px-4 rounded-xl font-bold text-sm transition-colors ${
            product.inStock
              ? 'bg-secondary text-white hover:bg-teal-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart?.();
          }}
          disabled={!product.inStock}
        >
          <ShoppingCart size={14} className="mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;