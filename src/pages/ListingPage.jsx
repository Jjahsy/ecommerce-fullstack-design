import React from "react";
import Sidebar from "../components/sidebar";
import ProductCard from "../components/ProductCard";
import { FaChevronRight, FaList, FaTh } from "react-icons/fa";

// Pehle se mojud images
import img1 from "../assets/images/canon cmera.png"; 
import img2 from "../assets/images/canon.png";
import img3 from "../assets/images/smart phone.png";

// New Images (Aap inke path apne assets ke mutabiq check kar lein)
import img4 from "../assets/images/laptop.png";
import img5 from "../assets/images/watch.png"; 
import img6 from "../assets/images/white Hp.png";

const ListingPage = () => {
  const products = [
    {
      id: 1,
      name: "Canon Camera EOS 2000, Black 10x zoom",
      price: "998.00",
      oldPrice: "1128.00",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: img1
    },
    {
      id: 2,
      name: "GoPro HERO6 4K Action Camera - Black",
      price: "450.00",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: img2
    },
    {
      id: 3,
      name: "Samsung Galaxy S22 Ultra 5G - 256GB - Phantom Black",
      price: "850.00",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: img3
    },
    {
      id: 4,
      name: "Smart Watch Series 7 - Midnight Aluminum",
      price: "299.00",
      oldPrice: "350.00",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: img4
    },
    {
      id: 5,
      name: "MacBook Pro M2 - 512GB SSD - Space Grey",
      price: "1299.00",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: img5
    },
    {
      id: 6,
      name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      price: "398.00",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      image: img6
    }
  ];

  return (
    <div className="bg-[#f7f8fa] w-full">
      <div className="max-w-7xl mx-auto px-6 py-4">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-gray-400 text-sm mb-5">
          <span>Home</span> 
          <FaChevronRight size={10} />
          <span>Electronics</span> 
          <FaChevronRight size={10} />
          <span className="text-gray-800 font-medium">Mobile accessory</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-8">
          
          <Sidebar />

          <div className="flex-1">
            
            {/* Sorting Bar */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 flex flex-wrap justify-between items-center shadow-sm">
              <p className="text-sm text-gray-700">
                {products.length} items in <span className="font-bold">Mobile accessory</span>
              </p>
              
              <div className="flex items-center gap-3">
                 <div className="flex border border-gray-200 rounded overflow-hidden">
                    <button className="p-2 bg-gray-100 border-r border-gray-200 text-blue-600">
                      <FaList size={18} />
                    </button>
                    <button className="p-2 hover:bg-gray-50 text-gray-400">
                      <FaTh size={18} />
                    </button>
                 </div>
                 
                 <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none bg-white cursor-pointer font-medium">
                    <option>Featured</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                 </select>
              </div>
            </div>

            {/* Product List */}
            <div className="space-y-4">
              {products.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>

      {/* 5. PAGINATION SECTION */}
{/* 5. PAGINATION SECTION */}
<div className="flex justify-end items-center mt-10 gap-3">
  
  {/* Left: Dropdown (Now next to numbers) */}
  <div className="flex items-center">
    <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white outline-none cursor-pointer font-medium h-[40px]">
      <option>Show 10</option>
      <option>Show 20</option>
    </select>
  </div>

  {/* Right: Pagination Numbers */}
  <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm h-[40px]">
    <button className="px-3 border-r hover:bg-gray-50">
       <FaChevronRight className="rotate-180 text-gray-400" size={12} />
    </button>
    <button className="px-4 border-r hover:bg-gray-50 text-sm font-medium">1</button>
    <button className="px-4 border-r bg-gray-100 font-bold text-sm">2</button>
    <button className="px-4 border-r hover:bg-gray-50 text-sm font-medium">3</button>
    <button className="px-4 hover:bg-gray-50">
       <FaChevronRight className="text-gray-400" size={12} />
    </button>
  </div>
</div>




          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
