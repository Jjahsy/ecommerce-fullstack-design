import React from "react";
import logo from "../assets/images/logo-colored.png";
import profileIcon from "../assets/images/profile.png";
import messageIcon from "../assets/images/msg.png";
import orderIcon from "../assets/images/order.png";
import cartIcon from "../assets/images/cart.png";

const Navbar = () => {
  return (
    <div className="w-full shadow-sm border-b">

      {/* TOP NAVBAR */}
      <div className="flex items-center justify-between px-6 py-3">

        {/* 🔷 Logo */}
        <img src={logo} alt="logo" className="h-10" />

        {/* 🔍 Search Bar */}
        <div className="flex w-1/2 border rounded overflow-hidden">
          
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 outline-none"
          />

          <select className="border-l px-2 outline-none">
            <option>All category</option>
            <option>Electronics</option>
            <option>Clothes</option>
          </select>

          <button className="bg-blue-500 text-white px-4">
            Search
          </button>
        </div>

        {/* 🧑 Icons */}
      <div className="flex gap-6 text-xs text-gray-600">

  {/* Profile */}
  <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
    <img src={profileIcon} alt="profile" className="h-5 w-5" />
    <span>Profile</span>
  </div>

  {/* Message */}
  <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
    <img src={messageIcon} alt="message" className="h-5 w-5" />
    <span>Message</span>
  </div>

  {/* Orders */}
  <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
    <img src={orderIcon} alt="orders" className="h-5 w-5" />
    <span>Orders</span>
  </div>

  {/* Cart */}
  <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
    <img src={cartIcon} alt="cart" className="h-5 w-5" />
    <span>My cart</span>
  </div>

</div>

      </div>
    </div>
  );
};

export default Navbar;