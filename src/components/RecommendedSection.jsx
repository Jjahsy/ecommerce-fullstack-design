import React from "react";

const RecommendedSection = ({ products = [] }) => {
  return (
    <div className="px-6 py-6 bg-gray-100">

      {/* 🔷 TITLE */}
      <h2 className="text-3xl font-bold mb-4">
        Recommended items
      </h2>

      {/* 🔷 GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">

        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 hover:shadow-md transition"
          >

            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-contain mb-3"
            />

            {/* 🔥 PRICE (dark + bold) */}
<p className="text-gray-900 font-semibold text-sm mb-1">
  {item.price}
</p>

{/* 🔥 NAME (bigger size) */}
<p className="text-sm text-gray-600 leading-tight">
  {item.name}
</p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default RecommendedSection;