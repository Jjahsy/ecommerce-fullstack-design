import React from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product, viewMode = "list" }) => {
  const isGrid = viewMode === "grid";

  return (
    <div className={`flex bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow relative ${isGrid ? "flex-col gap-4" : "flex-col md:flex-row gap-6"}`}>
      <div className={`${isGrid ? "w-full" : "w-full md:w-48"} h-48 flex items-center justify-center shrink-0`}>
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="flex-1 py-2">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-gray-800 font-medium text-lg mb-1">{product.name}</h3>
            <div className="text-sm text-gray-500 mb-2">{product.category}</div>
          </div>

          <button className="p-2 border border-gray-200 rounded-lg text-blue-600 hover:bg-blue-50 shrink-0">
            <FaRegHeart />
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-sm line-through text-gray-400">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={14} className={i < Math.round(product.rating) ? "" : "text-gray-200"} />
            ))}
          </div>
          <span>{product.rating.toFixed(1)}</span>
          <span>•</span>
          <span>{product.reviews} orders</span>
          <span>•</span>
          <span className="text-green-500">{product.shipping}</span>
        </div>

        {!isGrid && (
          <p className="text-gray-500 text-sm mb-3 line-clamp-2 leading-relaxed">{product.shortDescription}</p>
        )}

        <Link
          to={`/product/${product.id}`}
          className="inline-block text-blue-600 font-bold text-sm mt-3 hover:underline"
        >
          View details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
