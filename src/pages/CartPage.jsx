import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productImages from "../data/productImages";
import { FaArrowLeft, FaLock, FaCommentDots, FaTruck, FaShoppingCart } from "react-icons/fa";

const formatCurrency = (value) => `$${value.toFixed(2)}`;

const CartPage = () => {
  const [cart, setCart] = useState({ items: [], total: 0, subtotal: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { refreshCart } = useCart();
  const navigate = useNavigate();

  // Fake "Saved for later" data for UI mockup
  const [savedForLater, setSavedForLater] = useState([]);

  const loadCart = async () => {
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("token");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await fetch("/api/cart", { headers });
      if (!response.ok) {
        setError("Unable to load cart.");
        return;
      }
      const data = await response.json();
      setCart(data);

      // Load fake saved items from products API for demo
      const prodRes = await fetch("/api/products");
      const prodData = await prodRes.json();
      setSavedForLater(prodData.slice(1, 5).map(p => ({ ...p, image: productImages[p.imageKey] })));
    } catch (err) {
      setError("Unable to load cart.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const updateQuantity = async (item, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      const token = localStorage.getItem("token");
      const headers = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;
      
      const response = await fetch(`/api/cart/${item.productId}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({ quantity: newQuantity })
      });
      if (!response.ok) return;
      await response.json();
      refreshCart();
      loadCart();
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async (item) => {
    try {
      const token = localStorage.getItem("token");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      
      await fetch(`/api/cart/${item.productId}`, {
        method: "DELETE",
        headers
      });
      refreshCart();
      loadCart();
    } catch (err) {
      console.error(err);
    }
  };

  const removeAll = async () => {
    for (let item of cart.items) {
      await removeItem(item);
    }
  };

  return (
    <div className="bg-[#f7f8fa] min-h-screen py-8 font-sans pb-10">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My cart ({cart.totalItems || 0})</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT COLUMN: Cart Items & Extra Sections */}
          <div className="flex-1">
            
            {/* CART ITEMS BOX */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
              {loading ? (
                <div className="p-8 text-center text-gray-500">Loading cart...</div>
              ) : error ? (
                <div className="p-8 text-center text-red-600">{error}</div>
              ) : cart.items.length === 0 ? (
                <div className="p-10 text-center">
                  <p className="text-gray-700 mb-4">Your cart is empty.</p>
                  <Link to="/listing" className="inline-block rounded bg-blue-600 px-5 py-2 text-white font-medium hover:bg-blue-700">
                    Go Shopping
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col">
                  {cart.items.map((item, index) => (
                    <div key={item.productId} className={`p-4 flex flex-col sm:flex-row gap-4 ${index !== cart.items.length - 1 ? "border-b border-gray-200" : ""}`}>
                      <div className="w-20 h-20 border border-gray-200 rounded flex items-center justify-center shrink-0 p-1 bg-gray-50">
                        <img src={productImages[item.imageKey]} alt={item.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h3 className="text-gray-800 font-medium leading-tight mb-1">{item.name}</h3>
                            <div className="text-gray-500 text-sm mb-3">
                              Size: medium, Color: blue, Material: Plastic<br />
                              Seller: Artel Market
                            </div>
                            <div className="flex gap-2">
                              <button onClick={() => removeItem(item)} className="px-3 py-1 border border-gray-200 rounded text-red-500 text-sm font-medium hover:bg-red-50 transition">Remove</button>
                              <button className="px-3 py-1 border border-gray-200 rounded text-blue-500 text-sm font-medium hover:bg-blue-50 transition">Save for later</button>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end gap-3 shrink-0">
                            <div className="font-bold text-gray-900 text-lg">{formatCurrency(item.price * item.quantity)}</div>
                            <select 
                              className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 outline-none cursor-pointer"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
                            >
                              {[...Array(10)].map((_, i) => (
                                <option key={i+1} value={i+1}>Qty: {i+1}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Cart Footer Actions */}
                  <div className="p-4 border-t border-gray-200 flex justify-between items-center">
                    <button onClick={() => navigate("/listing")} className="bg-blue-600 text-white px-4 py-2 rounded font-medium flex items-center gap-2 hover:bg-blue-700 transition">
                      <FaArrowLeft size={12} /> Back to shop
                    </button>
                    <button onClick={removeAll} className="border border-gray-300 px-4 py-2 rounded font-medium text-blue-600 hover:bg-gray-50 transition">
                      Remove all
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* TRUST BADGES */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500"><FaLock /></div>
                <div>
                  <div className="text-sm font-medium text-gray-800">Secure payment</div>
                  <div className="text-xs text-gray-400">Have you ever finally just</div>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500"><FaCommentDots /></div>
                <div>
                  <div className="text-sm font-medium text-gray-800">Customer support</div>
                  <div className="text-xs text-gray-400">Have you ever finally just</div>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500"><FaTruck /></div>
                <div>
                  <div className="text-sm font-medium text-gray-800">Free delivery</div>
                  <div className="text-xs text-gray-400">Have you ever finally just</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="w-full lg:w-[320px] flex flex-col gap-4">
            
            {/* Coupon Box */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
              <div className="text-sm text-gray-700 mb-2">Have a coupon?</div>
              <div className="flex border border-gray-300 rounded overflow-hidden">
                <input type="text" placeholder="Add coupon" className="px-3 py-2 outline-none text-sm w-full" />
                <button className="bg-gray-50 text-blue-600 px-4 py-2 text-sm font-medium border-l border-gray-300 hover:bg-gray-100">Apply</button>
              </div>
            </div>

            {/* Checkout Summary Box */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
              <div className="space-y-3 mb-4 pb-4 border-b border-gray-200 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-medium text-gray-800">{formatCurrency(cart.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>
                  <span className="text-red-500">- $60.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span className="text-green-500">+ $14.00</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-gray-900 text-lg">Total:</span>
                <span className="font-bold text-gray-900 text-xl">{formatCurrency(Math.max(0, cart.total - 60 + 14))}</span>
              </div>
              
              <button className="w-full bg-[#00b517] text-white rounded py-3 font-bold text-lg hover:bg-green-600 transition mb-4 shadow-[0_4px_12px_rgba(0,181,23,0.3)]">
                Checkout
              </button>

              <div className="flex justify-center gap-2">
                {/* Dummy Payment Icons */}
                <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-blue-800">AMEX</div>
                <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-orange-600">MC</div>
                <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-blue-500">PayPal</div>
                <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-blue-900">VISA</div>
                <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-black">Pay</div>
              </div>
            </div>

          </div>
        </div>

        {/* SAVED FOR LATER (FULL WIDTH) */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mt-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">Saved for later</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {savedForLater.map(item => (
              <div key={item.id} className="group">
                <div className="bg-gray-100 rounded flex items-center justify-center p-1 h-60 mb-3 group-hover:bg-gray-200 transition">
                  <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </div>
                <div className="font-bold text-gray-900">${item.price.toFixed(2)}</div>
                <div className="text-sm text-gray-600 line-clamp-2 mt-1 mb-3">{item.name}</div>
                <button className="border border-gray-300 text-blue-600 rounded px-3 py-1.5 text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition w-max">
                  <FaShoppingCart /> Move to cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SUPER DISCOUNT BANNER (FULL WIDTH) */}
        <div className="bg-blue-600 rounded-lg overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 relative">
          <div className="absolute top-0 right-0 h-full w-1/2 bg-blue-700 clip-path-slant" style={{clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)'}}></div>
          <div className="relative z-10 text-white mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-1">Super discount on more than 100 USD</h2>
            <p className="text-blue-200">Have you ever finally just write dummy info</p>
          </div>
          <div className="relative z-10">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium">
              Shop now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;
