import React, { useState } from "react";
import { FaChevronUp, FaStar } from "react-icons/fa";

const Sidebar = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000); 

  return (
    /* REMOVED: sticky, top-5, and h-fit to allow stretching */
    <aside className="w-full md:w-64  space-y-2  ">
      
      {/* 1. Category Section */}
      <div className="border-t border-gray-200 py-10 ">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-800">Category</h3>
          <FaChevronUp className="text-gray-400 cursor-pointer" size={12} />
        </div>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li className="cursor-pointer hover:text-blue-600">Mobile accessory</li>
          <li className="cursor-pointer hover:text-blue-600">Electronics</li>
          <li className="cursor-pointer hover:text-blue-600">Smartphones</li>
          <li className="cursor-pointer hover:text-blue-600">Modern tech</li>
          <li className="text-blue-600 cursor-pointer font-medium mt-1">See all</li>
        </ul>
      </div>

      {/* 2. Brands Section */}
      <div className="border-t border-gray-200 py-10">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-800">Brands</h3>
          <FaChevronUp className="text-gray-400 cursor-pointer" size={12} />
        </div>
        <div className="space-y-2">
          {["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"].map((brand) => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer text-sm text-gray-600 hover:text-gray-900">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 accent-blue-600 cursor-pointer" />
              {brand}
            </label>
          ))}
          <p className="text-blue-600 text-sm cursor-pointer font-medium pt-1">See all</p>
        </div>
      </div>

      {/* Features Section */}
<div className="border-t border-gray-200 py-12">
  <div className="flex justify-between items-center mb-3">
    <h3 className="font-bold text-gray-800">Features</h3>
    <FaChevronUp className="text-gray-400 cursor-pointer" size={12} />
  </div>
  <div className="space-y-2">
    {[
      "Metallic",
      "Plastic cover",
      "8GB Ram",
      "Super power",
      "Large Memory",
    ].map((feature) => (
      <label
        key={feature}
        className="flex items-center gap-3 cursor-pointer text-sm text-gray-600 hover:text-gray-900"
      >
        <input
          type="checkbox"
          className="w-5 h-5 rounded border-gray-300 text-blue-600 accent-blue-600 cursor-pointer"
        />
        {feature}
      </label>
    ))}
    <p className="text-blue-600 text-sm cursor-pointer font-medium pt-1">
      See all
    </p>
  </div>
</div>


     {/* 3. Price Range Section */}
<div className="border-t border-gray-200 py-6">
  <div className="flex justify-between items-center mb-4">
    <h3 className="font-bold text-gray-800 text-base">Price range</h3>
    <FaChevronUp className="text-gray-400 cursor-pointer" size={12} />
  </div>
  
  {/* Range Slider Container */}
  <div className="relative h-6 w-full flex items-center justify-center mb-4">
    {/* Background Track */}
    <div className="absolute w-full h-1 bg-gray-200 rounded-lg"></div>
    
    {/* Blue Progress Track */}
    <div 
      className="absolute h-1 bg-blue-500 rounded-lg"
      style={{
        left: `${(minPrice / 1000) * 100}%`,
        right: `${100 - (maxPrice / 1000) * 100}%`
      }}
    ></div>

    <input
      type="range"
      min="0"
      max="1000"
      value={minPrice}
      onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 1))}
      className="absolute w-full appearance-none bg-transparent pointer-events-none z-20 slider-thumb"
    />
    <input
      type="range"
      min="0"
      max="1000"
      value={maxPrice}
      onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 1))}
      className="absolute w-full appearance-none bg-transparent pointer-events-none z-20 slider-thumb"
    />
  </div>

  {/* Min/Max Input Boxes - Height Reduced */}
  <div className="flex gap-2">
    <div className="flex-1">
      <p className="text-gray-700 text-sm mb-1">Min</p>
      <input 
        type="number" 
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
        className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-blue-500 shadow-sm" 
        placeholder="0"
      />
    </div>
    <div className="flex-1">
      <p className="text-gray-700 text-sm mb-1">Max</p>
      <input 
        type="number" 
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-blue-500 shadow-sm" 
        placeholder="1000"
      />
    </div>
  </div>

  {/* Apply Button - Height Reduced */}
  <button className="w-full mt-4 py-2 bg-white border border-gray-200 text-blue-600 text-sm font-bold rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
    Apply
  </button>
</div>

      {/* 4. Condition Section */}
      <div className="border-t border-gray-200 py-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-800">Condition</h3>
          <FaChevronUp className="text-gray-400 cursor-pointer" size={12} />
        </div>
        <div className="space-y-2">
          {["Any", "Refurbished", "Brand new", "Old items"].map((item, index) => (
            <label key={item} className="flex items-center gap-3 cursor-pointer text-sm text-gray-600 hover:text-gray-900">
              <input 
                type="radio" 
                name="condition" 
                defaultChecked={index === 0} 
                className="w-4 h-4 border-gray-300 text-blue-600 accent-blue-600 cursor-pointer" 
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* 5. Ratings Section */}
      <div className="border-t border-gray-200 py-8">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-800">Ratings</h3>
          <FaChevronUp className="text-gray-400 cursor-pointer" size={12} />
        </div>
        <div className="space-y-3">
          {[5, 4, 3, 2].map((stars) => (
            <label key={stars} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 accent-blue-600 cursor-pointer" />
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={16} className={i < stars ? "fill-current" : "text-gray-200"} />
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
