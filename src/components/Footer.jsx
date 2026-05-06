import React from "react";
import Logo from "../assets/images/logo-colored.png";
import USFlag from "../assets/flags/usa.png"; // Flag import karein
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube, 
  FaApple, 
  FaGooglePlay, 
  FaChevronUp 
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 ">
      
      {/* 🔷 SECTION 1: NEWSLETTER */}
      <div className="bg-[#eff2f4] py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[20px] font-semibold text-gray-800 mb-1">
            Subscribe on our newsletter
          </h2>
          <p className="text-[16px] text-gray-600 mb-6">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>
          <div className="flex justify-center items-center gap-2">
            <div className="relative w-full max-w-[320px]">
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[44px] pl-10 pr-4 border border-gray-300 rounded-md outline-none focus:border-blue-500 bg-white"
              />
            </div>
            <button className="h-[44px] px-6 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition shadow-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* 🔷 SECTION 2: MAIN LINKS */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-8">
        
        {/* BRAND COLUMN */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
             <img src={Logo} alt="Brand Logo" className="h-10 w-auto object-contain" />
          </div>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-6 max-w-[260px]">
            Best information about the company goes here but now lorem ipsum is
          </p>
          
          <div className="flex gap-2">
            {[ 
              { Icon: FaFacebookF, color: "hover:bg-blue-600" },
              { Icon: FaTwitter, color: "hover:bg-blue-400" },
              { Icon: FaLinkedinIn, color: "hover:bg-blue-700" },
              { Icon: FaInstagram, color: "hover:bg-pink-500" },
              { Icon: FaYoutube, color: "hover:bg-red-600" }
            ].map((item, index) => (
              <button key={index} className={`bg-[#bdc4cd] text-white p-2.5 rounded-full ${item.color} transition-all duration-300`}>
                <item.Icon size={16} />
              </button>
            ))}
          </div>
        </div>

        {/* LINKS COLUMNS */}
        {["About", "Partnership", "Information", "For users"].map((title) => (
          <div key={title}>
            <h3 className="font-bold text-gray-800 mb-4">{title}</h3>
            <ul className="text-gray-500 space-y-2 text-[15px]">
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Find store</li>
              <li className="hover:text-blue-600 cursor-pointer">Categories</li>
              <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
            </ul>
          </div>
        ))}

        {/* APP DOWNLOAD */}
        <div className="lg:col-span-1">
          <h3 className="font-bold text-gray-800 mb-4">Get app</h3>
          <div className="space-y-2">
            <button className="flex items-center gap-2 bg-black text-white w-full py-1.5 px-3 rounded-lg hover:opacity-80 transition">
              <FaApple size={24} />
              <div className="text-left leading-tight">
                <p className="text-[9px] uppercase">Download on</p>
                <p className="text-[14px] font-semibold">App Store</p>
              </div>
            </button>
            <button className="flex items-center gap-2 bg-black text-white w-full py-1.5 px-3 rounded-lg hover:opacity-80 transition">
              <FaGooglePlay size={20} />
              <div className="text-left leading-tight">
                <p className="text-[9px] uppercase">Get it on</p>
                <p className="text-[14px] font-semibold">Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 🔷 SECTION 3: BOTTOM BAR */}
      <div className="bg-[#eff2f4] py-5 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-gray-500 text-sm">
          <p>© 2023 Ecommerce.</p>
          <div className="flex items-center gap-2 cursor-pointer font-medium text-gray-600 hover:text-gray-900 transition">
             {/* 🚩 EMOJI KI JAGAH IMAGE */}
             <img 
               src={USFlag} 
               alt="US Flag" 
               className="w-6 h-5 object-cover rounded-sm border border-gray-200" 
             />
             <span>English</span>
             <FaChevronUp size={12} className="text-black" />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
