import React from "react";
import { FaRegHeart } from "react-icons/fa";

const ProductGridCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className="h-48 flex items-center justify-center mb-4">
        <img src={product.image} alt={product.name} className="max-h-full object-contain" />
      </div>

      <hr className="border-gray-100 mb-4" />

      {/* Price & Heart Icon */}
      <div className="flex justify-between items-start mb-2">
        <div>
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through ml-2">${product.oldPrice}</span>
          )}
        </div>
        <button className="p-2 border border-gray-200 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors">
          <FaRegHeart size={18} />
        </button>
      </div>

      {/* Product Name */}
      <h3 className="text-gray-600 text-sm leading-relaxed line-clamp-2">
        {product.name}
      </h3>
    </div>
  );
};

export default ProductGridCard;
