import React from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg p-4 gap-6 shadow-sm hover:shadow-md transition-shadow relative">
      
      {/* Product Image */}
      <div className="w-full md:w-48 h-48 flex items-center justify-center shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain" 
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 py-2">
        <div className="flex justify-between items-start">
          <h3 className="text-gray-800 font-medium text-lg mb-1">{product.name}</h3>
          <button className="p-2 border border-gray-200 rounded-lg text-blue-600 hover:bg-blue-50">
            <FaRegHeart />
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          {/* Discount price logic agar ho to yahan add karein */}
        </div>

        {/* Rating & Orders */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
          </div>
          <span className="text-orange-400 text-sm font-medium">7.5</span>
          <span className="text-gray-400 text-sm">• 154 orders •</span>
          <span className="text-green-500 text-sm font-medium">Free Shipping</span>
        </div>

        <p className="text-gray-500 text-sm mt-3 line-clamp-2 leading-relaxed">
          {product.desc}
        </p>

        <button className="text-blue-600 font-bold text-sm mt-3 hover:underline">
          View details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
