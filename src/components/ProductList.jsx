import React from "react";
import { FaChevronRight, FaStar, FaRegHeart, FaList, FaTh } from "react-icons/fa";

const ProductList = () => {
  return (
    <div className="bg-[#f7f8fa] min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-6 py-4">
        
        {/* 1. BREADCRUMBS */}
        <nav className="flex items-center gap-2 text-gray-400 text-sm mb-5">
          <span>Home</span> <FaChevronRight size={10} />
          <span>Clothings</span> <FaChevronRight size={10} />
          <span>Men's wear</span> <FaChevronRight size={10} />
          <span className="text-gray-800 font-medium">Summer clothing</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-6">
          
          {/* 2. SIDEBAR (Filters) */}
          <aside className="w-full md:w-60 flex-shrink-0 space-y-6">
            <div className="border-t border-gray-200 pt-4">
              <h3 className="font-bold text-gray-800 mb-3 text-sm">Category</h3>
              <ul className="space-y-2 text-gray-600 text-[15px]">
                <li className="cursor-pointer hover:text-blue-600">Mobile accessory</li>
                <li className="cursor-pointer hover:text-blue-600">Electronics</li>
                <li className="cursor-pointer hover:text-blue-600">Smartphones</li>
                <li className="text-blue-600 cursor-pointer">See all</li>
              </ul>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <h3 className="font-bold text-gray-800 mb-3 text-sm">Brands</h3>
              <div className="space-y-2">
                {["Samsung", "Apple", "Huawei", "Pocco"].map((brand) => (
                  <label key={brand} className="flex items-center gap-2 cursor-pointer text-gray-600">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                    <span className="text-[15px]">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* 3. MAIN CONTENT */}
          <div className="flex-1">
            
            {/* Top Bar */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 flex justify-between items-center shadow-sm">
              <p className="text-sm text-gray-700">12,911 items in <span className="font-bold">Mobile accessory</span></p>
              <div className="flex items-center gap-3">
                 <div className="flex border border-gray-200 rounded">
                    <button className="p-2 bg-gray-100 border-r border-gray-200"><FaList /></button>
                    <button className="p-2 hover:bg-gray-50"><FaTh /></button>
                 </div>
              </div>
            </div>

            {/* PRODUCT CARD (LIST VIEW) */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col md:flex-row gap-6 mb-4 hover:shadow-md transition relative">
               {/* Image Container */}
               <div className="w-full md:w-52 h-48 flex-shrink-0 flex items-center justify-center">
                  <img src="https://placeholder.com" alt="product" className="max-h-full object-contain" />
               </div>

               {/* Details */}
               <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-medium text-gray-800 leading-tight">
                      Canon Camera EOS 2000, Black 10x zoom
                    </h2>
                    <button className="border border-gray-200 p-2 rounded shadow-sm text-blue-600 hover:bg-blue-50">
                      <FaRegHeart size={18} />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-2 font-bold text-xl text-gray-900">
                    $998.00 <span className="text-gray-400 line-through text-sm font-normal">$1128.00</span>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex text-orange-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-200" /></div>
                    <span className="text-orange-400 font-bold text-sm">7.5</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-400 text-sm">154 orders</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-green-500 font-medium text-sm">Free Shipping</span>
                  </div>

                  <p className="text-gray-500 text-sm mt-3 line-clamp-2 max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  <button className="mt-4 text-blue-600 font-bold text-sm hover:underline">View details</button>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
