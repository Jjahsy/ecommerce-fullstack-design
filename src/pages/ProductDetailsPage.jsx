import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productImages from "../data/productImages";
import { FaCheck, FaRegHeart, FaStar, FaShieldAlt, FaGlobeEurope, FaGlobe, FaChevronRight} from "react-icons/fa";




const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("Description");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { refreshCart } = useCart();
  const [quantity] = useState(1);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [prodRes, allRes] = await Promise.all([
          fetch(`/api/products/${id}`),
          fetch("/api/products")
        ]);
        
        if (!prodRes.ok) throw new Error("Product not found");
        
        const prodData = await prodRes.json();
        const allData = await allRes.json();
        
        setProduct(prodData);
        setAllProducts(allData.map(p => ({...p, image: productImages[p.imageKey]})));
      } catch (err) {
        setError("Unable to load product.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const addToCart = async () => {
    if (!product) return;
    try {
      const token = localStorage.getItem("token");
      const headers = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;
      
      await fetch("/api/cart", {
        method: "POST",
        headers,
        body: JSON.stringify({ productId: product.id, quantity })
      });
      refreshCart();
      alert("Added to cart successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  const imageSrc = productImages[product.imageKey];
  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 5);
  const youMayLike = allProducts.slice(0, 5); // Just taking top 5 for demo

  return (
    <div className="bg-[#f7f8fa] min-h-screen font-sans pb-10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-gray-400 text-sm mb-5">
          <Link to="/">Home</Link>
          <FaChevronRight size={10} />
          <Link to="/listing">Clothings</Link>
          <FaChevronRight size={10} />
          <span>Men's wear</span>
          <FaChevronRight size={10} />
          <span className="text-gray-600">Summer clothing</span>
        </nav>

        {/* TOP PRODUCT CARD */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 flex flex-col lg:flex-row gap-8 shadow-sm">
          
          {/* Left: Images */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div className="border border-gray-200 rounded flex items-center justify-center p-4 h-[350px]">
              <img src={imageSrc} alt={product.name} className="max-h-full max-w-full object-contain" />
            </div>
            {/* Thumbnails (Dummy loop for design) */}
            <div className="flex gap-2 justify-between">
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className={`w-12 h-12 border ${idx === 0 ? "border-gray-400" : "border-gray-200"} rounded p-1 cursor-pointer`}>
                  <img src={imageSrc} alt="thumb" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Middle: Details */}
          <div className="w-full lg:w-1/3 flex-1">
            <div className="text-green-500 text-sm font-medium flex items-center gap-1 mb-1">
              <FaCheck size={12} /> In stock
            </div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <div className="flex items-center text-orange-400">
                {[...Array(5)].map((_, i) => <FaStar key={i} size={14} className={i < Math.round(product.rating) ? "" : "text-gray-200"} />)}
                <span className="ml-1 text-orange-400 font-bold">{product.rating.toFixed(1)}</span>
              </div>
              <span>•</span>
              <span className="flex items-center gap-1">💬 {product.reviews} reviews</span>
              <span>•</span>
              <span className="flex items-center gap-1">🛒 154 sold</span>
            </div>

            {/* Pricing Box */}
            <div className="bg-red-50 p-4 rounded flex gap-6 mb-4">
              <div>
                <div className="text-red-500 text-xl font-bold">${product.price.toFixed(2)}</div>
                <div className="text-gray-500 text-xs">50-100 pcs</div>
              </div>
              <div className="border-l border-red-200 pl-4">
                <div className="text-gray-800 text-xl font-bold">${(product.price * 0.9).toFixed(2)}</div>
                <div className="text-gray-500 text-xs">100-700 pcs</div>
              </div>
              <div className="border-l border-red-200 pl-4">
                <div className="text-gray-800 text-xl font-bold">${(product.price * 0.8).toFixed(2)}</div>
                <div className="text-gray-500 text-xs">700+ pcs</div>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-[100px_1fr] gap-y-3 text-sm border-b pb-4 mb-4">
              <div className="text-gray-500">Price:</div>
              <div className="text-gray-800">Negotiable</div>
              
              <div className="text-gray-500 border-t pt-3">Type:</div>
              <div className="text-gray-800 border-t pt-3">Classic shoes</div>
              
              <div className="text-gray-500">Material:</div>
              <div className="text-gray-800">Plastic material</div>
              
              <div className="text-gray-500">Design:</div>
              <div className="text-gray-800">Modern nice</div>
              
              <div className="text-gray-500 border-t pt-3">Customization:</div>
              <div className="text-gray-800 border-t pt-3">Customized logo and<br/>design custom packages</div>
              
              <div className="text-gray-500">Protection:</div>
              <div className="text-gray-800">Refund Policy</div>
              
              <div className="text-gray-500">Warranty:</div>
              <div className="text-gray-800">2 years full warranty</div>
            </div>
          </div>

          {/* Right: Supplier Info */}
          <div className="w-full lg:w-1/4 border border-gray-200 rounded-lg p-4 shadow-sm self-start bg-white">
            <div className="flex items-center gap-3 border-b pb-4 mb-4">
              <div className="w-12 h-12 bg-[#c6e3e5] text-teal-600 rounded flex items-center justify-center text-xl font-bold">R</div>
              <div>
                <div className="text-sm text-gray-500">Supplier</div>
                <div className="text-gray-800 font-medium">Guanjoi Trading LLC</div>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2"><FaGlobeEurope className="text-gray-400" /> Germany, Berlin</div>
              <div className="flex items-center gap-2"><FaShieldAlt className="text-gray-400" /> Verified Seller</div>
              <div className="flex items-center gap-2"><FaGlobe className="text-gray-400" /> Worldwide shipping</div>
            </div>

            <div className="flex flex-col gap-2">
              <button onClick={addToCart} className="w-full bg-blue-500 text-white rounded py-2 font-medium hover:bg-blue-600 transition">Send inquiry</button>
              <button className="w-full bg-white text-blue-500 border border-gray-300 rounded py-2 font-medium hover:bg-gray-50 transition">Seller's profile</button>
            </div>
            
            <div className="text-center mt-4">
              <button className="text-blue-600 flex items-center justify-center gap-2 w-full font-medium hover:underline">
                <FaRegHeart /> Save for later
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left: Tabs & Description */}
          <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 px-4">
              {["Description", "Reviews", "Shipping", "About seller"].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 ${activeTab === tab ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 text-gray-600 text-sm leading-relaxed">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br/><br/>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum eu fugiat nulla pariatur.
              </p>

              <table className="w-full max-w-md border border-gray-200 text-sm mb-6">
                <tbody>
                  <tr className="border-b"><td className="p-2 bg-gray-50 text-gray-500 w-1/3">Model</td><td className="p-2 border-l">#8786867</td></tr>
                  <tr className="border-b"><td className="p-2 bg-gray-50 text-gray-500">Style</td><td className="p-2 border-l">Classic style</td></tr>
                  <tr className="border-b"><td className="p-2 bg-gray-50 text-gray-500">Certificate</td><td className="p-2 border-l">ISO-898921212</td></tr>
                  <tr className="border-b"><td className="p-2 bg-gray-50 text-gray-500">Size</td><td className="p-2 border-l">34mm x 450mm x 19mm</td></tr>
                  <tr><td className="p-2 bg-gray-50 text-gray-500">Memory</td><td className="p-2 border-l">36GB RAM</td></tr>
                </tbody>
              </table>

              <ul className="space-y-2">
                <li className="flex items-center gap-2"><FaCheck className="text-gray-400" /> Some great feature name here</li>
                <li className="flex items-center gap-2"><FaCheck className="text-gray-400" /> Lorem ipsum dolor sit amet, consectetur</li>
                <li className="flex items-center gap-2"><FaCheck className="text-gray-400" /> Duis aute irure dolor in reprehenderit</li>
                <li className="flex items-center gap-2"><FaCheck className="text-gray-400" /> Some great feature name here</li>
              </ul>
            </div>
          </div>

          {/* Right: You may like */}
          <div className="w-full lg:w-[280px] bg-white border border-gray-200 rounded-lg shadow-sm p-4">
            <h3 className="font-bold text-gray-900 mb-4">You may like</h3>
            <div className="flex flex-col gap-4">
              {youMayLike.map(item => (
                <div key={item.id} className="flex gap-3 items-center">
                  <div className="w-16 h-16 border rounded p-1 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-800 line-clamp-2 leading-snug">{item.name}</div>
                    <div className="text-sm text-gray-500 mt-1">${(item.price * 0.7).toFixed(2)} - ${item.price.toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RELATED PRODUCTS */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mt-6">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">Related products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {relatedProducts.map(item => (
              <div key={item.id} className="group cursor-pointer">
                <div className="bg-gray-100 rounded flex items-center justify-center p-4 h-40 mb-3 group-hover:bg-gray-200 transition">
                  <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </div>
                <div className="text-sm text-gray-800 line-clamp-2">{item.name}</div>
                <div className="text-sm text-gray-500 mt-1">${(item.price * 0.8).toFixed(2)} - ${item.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BANNER */}
        <div className="mt-6 bg-blue-600 rounded-lg overflow-hidden flex items-center justify-between p-6 relative">
          <div className="absolute top-0 right-0 h-full w-1/2 bg-blue-700 clip-path-slant" style={{clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)'}}></div>
          <div className="relative z-10 text-white">
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

export default ProductDetailsPage;
