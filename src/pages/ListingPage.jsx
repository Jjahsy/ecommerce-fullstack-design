import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/sidebar";
import ProductCard from "../components/ProductCard";
import { FaChevronRight, FaList, FaTh } from "react-icons/fa";
import productImages from "../data/productImages";

const ListingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [verifiedOnly, setVerifiedOnly] = useState(true);
  const [sortValue, setSortValue] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All category");
  const [viewMode, setViewMode] = useState("grid");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        const data = await response.json();
        const enhanced = data.map((product) => ({
          ...product,
          image: productImages[product.imageKey] || "",
          shortDescription: product.shortDescription || "No description available."
        }));
        setProducts(enhanced);
      } catch (err) {
        setError("Could not fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const visibleProducts = useMemo(() => {
    let items = [...products];
    if (verifiedOnly) {
      items = items.filter((product) => product.verified);
    }
    if (selectedCategory !== "All category") {
      items = items.filter((product) =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }
    if (sortValue === "low") {
      items.sort((a, b) => a.price - b.price);
    } else if (sortValue === "high") {
      items.sort((a, b) => b.price - a.price);
    } else if (sortValue === "rating") {
      items.sort((a, b) => b.rating - a.rating);
    }
    return items;
  }, [products, verifiedOnly, sortValue, searchQuery, selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-gray-400 text-sm mb-5">
          <span>Home</span>
          <FaChevronRight size={10} />
          <span>Electronics</span>
          <FaChevronRight size={10} />
          <span className="text-gray-800 font-medium">Mobile accessory</span>
        </nav>

        <div className="flex flex-col xl:flex-row gap-8">
          {/* Sidebar - Figma Style */}
          <Sidebar />

          <div className="flex-1">
            {/* Filter Bar - Figma Style */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between shadow-sm">
              <p className="text-sm text-gray-700">
                {visibleProducts.length} items in <span className="font-bold">Mobile accessory</span>
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {/* Search Input */}
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white">
                  <input
                    type="text"
                    aria-label="Search products"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name or category"
                    className="w-full text-sm outline-none"
                  />
                </div>

                {/* Verified Only Checkbox */}
                <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 accent-blue-600"
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                  />
                  <span className="text-gray-800">Verified only</span>
                </label>

                {/* Category Select */}
                <select
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none bg-white cursor-pointer"
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
                  <option>Smartphones</option>
                </select>

                {/* Sort Select */}
                <select
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none bg-white cursor-pointer font-medium"
                  value={sortValue}
                  onChange={(e) => setSortValue(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="rating">Best rating</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                </select>

                {/* View Toggle */}
                <div className="flex border border-gray-200 rounded overflow-hidden">
                  <button 
                    onClick={() => setViewMode("list")}
                    className={`p-2 border-r border-gray-200 ${viewMode === "list" ? "bg-gray-100 text-blue-600" : "hover:bg-gray-50 text-gray-400"}`}
                  >
                    <FaList size={18} />
                  </button>
                  <button 
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-gray-100 text-blue-600" : "hover:bg-gray-50 text-gray-400"}`}
                  >
                    <FaTh size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Display */}
            {loading ? (
              <div className="rounded-lg bg-white p-10 text-center text-gray-500 shadow-sm">Loading products...</div>
            ) : error ? (
              <div className="rounded-lg bg-red-50 border border-red-200 p-8 text-red-700 shadow-sm">{error}</div>
            ) : (
              <div className={viewMode === "list" ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"}>
                {visibleProducts.map((item) => (
                  <ProductCard key={item.id} product={item} viewMode={viewMode} />
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex flex-wrap justify-between items-center mt-10 gap-3">
              <div className="flex items-center gap-3">
                <label className="text-sm text-gray-600">Show</label>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white outline-none cursor-pointer font-medium h-[40px]">
                  <option>10</option>
                  <option>20</option>
                  <option>40</option>
                </select>
              </div>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm h-[40px]">
                <button className="px-3 border-r hover:bg-gray-50 flex items-center justify-center">
                  <FaChevronRight className="rotate-180 text-gray-400" size={12} />
                </button>
                <button className="px-4 border-r hover:bg-gray-50 text-sm font-medium">1</button>
                <button className="px-4 border-r bg-gray-100 font-bold text-sm">2</button>
                <button className="px-4 border-r hover:bg-gray-50 text-sm font-medium">3</button>
                <button className="px-4 hover:bg-gray-50 flex items-center justify-center">
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

