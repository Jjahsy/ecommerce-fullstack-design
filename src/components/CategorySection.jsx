import React from "react";

const CategorySection = ({ title, image, products = [] }) => {
  return (
    <div className="px-6 py-4 bg-gray-100">

      <div className="bg-white rounded shadow-sm p-4">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

          {/* 🔷 LEFT BANNER */}
          <div
            className="md:col-span-1 rounded p-5 flex flex-col"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* 🔥 TEXT */}
            <div className="text-black">
              <h2 className="text-lg font-semibold leading-6 whitespace-pre-line">
                {title}
              </h2>
            </div>

            {/* 🔥 BUTTON (FIGMA POSITION) */}
            <div className="mt-4">
              <button className="bg-white text-black px-4 py-2 rounded-md text-sm shadow-sm hover:bg-gray-100 transition">
                Source now
              </button>
            </div>
          </div>

          {/* 🔷 RIGHT GRID */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border border-gray-200">

            {products.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 p-3 flex flex-col justify-between h-[140px] hover:bg-gray-50 transition"
              >

                {/* 🔷 TEXT (TOP LEFT) */}
                <div>
                  <p className="text-sm font-medium text-gray-800 leading-tight">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {item.price}
                  </p>
                </div>

                {/* 🔷 IMAGE (BOTTOM RIGHT) */}
                <div className="flex justify-end">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 object-contain"
                  />
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default CategorySection;