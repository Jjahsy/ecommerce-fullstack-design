import React from "react";

const MenuBar = () => {
  return (
    <div className="w-full border-b bg-white">

      <div className="flex justify-between items-center px-6 py-2 text-sm">

        {/* 🔷 LEFT MENU */}
        <div className="flex items-center gap-6">

          <div className="font-medium cursor-pointer">
            ☰ All category
          </div>

          <p className="cursor-pointer hover:text-blue-500">Hot offers</p>
          <p className="cursor-pointer hover:text-blue-500">Gift boxes</p>
          <p className="cursor-pointer hover:text-blue-500">Projects</p>
          <p className="cursor-pointer hover:text-blue-500">Menu item</p>
         <div className="relative group">
  
  <p className="cursor-pointer hover:text-blue-500 flex items-center gap-1">
    Help
    <span className="text-xs">▼</span>
  </p>

  <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 w-32">
    <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Support</p>
    <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Contact</p>
    <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">FAQ</p>
  </div>

</div>

        </div>

        {/* 🔷 RIGHT MENU */}
      <div className="flex items-center gap-6 text-sm">

  {/* 🌐 Language & Currency */}
  <div className="relative group cursor-pointer">
    <div className="flex items-center gap-1 hover:text-blue-500">
      <span>English, USD</span>
      <span className="text-xs">▼</span>
    </div>

    {/* Dropdown */}
    <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 w-40 z-50">
      <p className="px-3 py-2 hover:bg-gray-100">English, USD</p>
      <p className="px-3 py-2 hover:bg-gray-100">Urdu, PKR</p>
      <p className="px-3 py-2 hover:bg-gray-100">Arabic, AED</p>
    </div>
  </div>

  {/* 🚚 Ship To */}
  <div className="relative group cursor-pointer">
    <div className="flex items-center gap-2 hover:text-blue-500">
      
      {/* Flag */}
      <img 
        src="https://flagcdn.com/w40/pk.png" 
        alt="Pakistan"
        className="w-5 h-3 object-cover rounded-sm"
      />

      <span>Ship to</span>
      <span className="text-xs">▼</span>
    </div>

    {/* Dropdown */}
    <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 w-40 z-50">
      
      <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100">
        <img src="https://flagcdn.com/w40/pk.png" alt="Palistan" className="w-5 h-3" />
        <span>Pakistan</span>
      </div>

      <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100">
        <img src="https://flagcdn.com/w40/us.png" alt="USA"className="w-5 h-3" />
        <span>USA</span>
      </div>

      <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100">
        <img src="https://flagcdn.com/w40/ae.png" alt="UAE" className="w-5 h-3" />
        <span>UAE</span>
      </div>

    </div>
  </div>

</div>

      </div>
    </div>
  );
};

export default MenuBar;