import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo-colored.png";
import profileIcon from "../assets/images/profile.png";
import messageIcon from "../assets/images/msg.png";
import orderIcon from "../assets/images/order.png";
import cartIcon from "../assets/images/cart.png";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All category");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/listing?search=${encodeURIComponent(searchQuery)}&category=${encodeURIComponent(selectedCategory)}`);
    } else {
      navigate(`/listing?category=${encodeURIComponent(selectedCategory)}`);
    }
  };

  return (
    <div className="w-full shadow-sm border-b bg-white">
      {/* DESKTOP & MOBILE TOP HEADER */}
      <div className="flex flex-wrap items-center justify-between px-4 md:px-6 py-3">
        
        {/* Left: Hamburger (Mobile) + Logo */}
        <div className="flex items-center gap-4">
          <button className="md:hidden text-gray-600">
            <FaBars size={20} />
          </button>
          <Link to="/">
            <img src={logo} alt="logo" className="h-8 md:h-10" />
          </Link>
        </div>

        {/* Center: Search Bar (Desktop Only) */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8 border rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-3 py-2 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="border-l px-2 outline-none bg-white text-gray-700"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>All category</option>
            <option>Electronics</option>
            <option>Clothes</option>
            <option>Home</option>
            <option>Cameras</option>
            <option>Audio</option>
            <option>Computing</option>
            <option>Wearables</option>
          </select>
          <button type="submit" className="bg-blue-500 text-white px-6 hover:bg-blue-600 transition">
            Search
          </button>
        </form>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 md:gap-6 text-xs text-gray-600">
          
          {/* Mobile Profile & Cart (Simplified) */}
          <div className="flex md:hidden gap-4 items-center">
            <Link to="/cart" className="relative text-gray-600 hover:text-blue-500">
              <img src={cartIcon} alt="cart" className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
            {user ? (
              <Link to="/profile">
                <img src={profileIcon} alt="profile" className="h-6 w-6" />
              </Link>
            ) : (
              <Link to="/login">
                <img src={profileIcon} alt="profile" className="h-6 w-6" />
              </Link>
            )}
          </div>

          {/* Desktop Full Icons */}
          <div className="hidden md:flex gap-6">
            {/* Profile / Auth */}
            {user ? (
              <div className="flex flex-col items-center cursor-pointer hover:text-blue-500 group relative">
                <img src={profileIcon} alt="profile" className="h-5 w-5" />
                <span>{user.email.split('@')[0]}</span>
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">{user.email}</div>
                    {user.role === 'admin' && (
                      <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Admin Panel</Link>
                    )}
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
                    <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="flex flex-col items-center cursor-pointer hover:text-blue-500">
                <img src={profileIcon} alt="profile" className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}

            {/* Message */}
            <Link to="/contact" className="flex flex-col items-center cursor-pointer hover:text-blue-500">
              <img src={messageIcon} alt="message" className="h-5 w-5" />
              <span>Message</span>
            </Link>

            {/* Orders */}
            <Link to="/profile" className="flex flex-col items-center cursor-pointer hover:text-blue-500">
              <img src={orderIcon} alt="orders" className="h-5 w-5" />
              <span>Orders</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative flex flex-col items-center hover:text-blue-500">
              <img src={cartIcon} alt="cart" className="h-5 w-5" />
              <span>My cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 right-0 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-500 px-1.5 text-[11px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

        </div>
      </div>

      {/* MOBILE SEARCH BAR */}
      <div className="md:hidden px-4 pb-3">
        <form onSubmit={handleSearch} className="flex bg-gray-100 border border-gray-200 rounded overflow-hidden">
          <div className="pl-3 py-2 text-gray-400 flex items-center justify-center"><FaSearch size={14} /></div>
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 bg-transparent outline-none text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>

      {/* MOBILE CATEGORIES SCROLL */}
      <div className="md:hidden px-4 pb-2 overflow-x-auto whitespace-nowrap hide-scrollbar border-t border-gray-100 pt-2">
        <div className="flex gap-2 text-sm">
          {["All category", "Gadgets", "Clothes", "Accessories"].map((cat, idx) => (
            <button 
              key={cat} 
              className={`px-3 py-1.5 rounded-md font-medium transition ${idx === 0 ? "bg-gray-100 text-blue-600" : "bg-gray-100 text-blue-600 hover:bg-gray-200"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Navbar;