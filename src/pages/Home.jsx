import React, { useEffect, useState } from "react";
import DealsSection from "../components/DealsSection";
import CategorySection from "../components/CategorySection";
import QuoteSection from "../components/QuoteSection";
import RecommendedSection from "../components/RecommendedSection";
import ExtraServices from "../components/ExtraServices";
import Suppliers from "../components/Suppliers";
import productImages from "../data/productImages";

import Hero from "../components/Hero";

// 🔥 Banner Images
import Home from "../assets/images/Home.png";
import Electronics from "../assets/images/Electronics.png";

// 🔥 Product Images
import watch from "../assets/images/watch.png";
import laptop from "../assets/images/laptop.png";
import camera from "../assets/images/camera.png";
import Headphone from "../assets/images/Headphone.png";
import canon from "../assets/images/canon.png";

import chair from "../assets/images/chair.png";
import lamp from "../assets/images/lamp.png";
import kitchen from "../assets/images/kitchen dish.png";
import bowl from "../assets/images/bowl.png";
import mixer from "../assets/images/mixer.png";
import blender from "../assets/images/blender.png";
import homeapplicance from "../assets/images/home applicance.png";
import coffee from "../assets/images/plant.png";

import Kattle from "../assets/images/electric kattle.png";
import White from "../assets/images/white Hp.png";
import smart from "../assets/images/smart phone.png";

// 🔥 Recommended Images (same images reuse kar lo)
import tshirt from "../assets/images/T-shirt blue.png";
import jacket from "../assets/images/jacket.png.jpg";
import coat from "../assets/images/coat.png";
import wallet from "../assets/images/wallet.png";
import bag from "../assets/images/bag.png";
import shorts from "../assets/images/short.png";
import headphone from "../assets/images/white Hp.png";
import pot from "../assets/images/bowl.png";
import kettle from "../assets/images/electric kattle.png";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [featuredError, setFeaturedError] = useState("");

  // 🔷 Fetch featured products from backend
  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to load featured products");
        }
        const data = await response.json();
        const enhanced = data.slice(0, 6).map((product) => ({
          ...product,
          image: productImages[product.imageKey] || ""
        }));
        setFeaturedProducts(enhanced);
      } catch (error) {
        setFeaturedError("Unable to load featured products at this time.");
      }
    };
    loadFeatured();
  }, []);

  // 🔷 HOME PRODUCTS
  const homeProducts = [
    { name: "Soft chairs", price: "From USD 19", image: chair },
    { name: "Sofa & chair", price: "From USD 19", image: lamp },
    { name: "Kitchen dishes", price: "From USD 19", image: kitchen },
    { name: "Smart watches", price: "From USD 19", image: bowl },
    { name: "Kitchen mixer", price: "From USD 100", image: mixer },
    { name: "Blenders", price: "From USD 39", image: blender },
    { name: "Home appliance", price: "From USD 19", image: homeapplicance },
    { name: "Coffee maker", price: "From USD 10", image: coffee },
  ];

  // 🔷 ELECTRONICS PRODUCTS
  const electronicProducts = [
    { name: "Smart watches", price: "From USD 19", image: watch },
    { name: "Cameras", price: "From USD 10", image: camera },
    { name: "Headphones", price: "From USD 35", image: White },
    { name: "Electric kettle", price: "From USD 240", image: Kattle },
    { name: "Gaming Set", price: "From USD 35", image: Headphone },
    { name: "Laptops & PC", price: "From USD 500", image: laptop },
    { name: "Smartphones", price: "From USD 15", image: smart },
    { name: "Mobile", price: "From USD 300", image: canon },
  ];

  // 🔷 RECOMMENDED PRODUCTS
  const recommendedProducts = [
    { name: "T-shirts with multiple colors, for men", price: "$10.30", image: tshirt },
    { name: "Jeans shorts for men blue color", price: "$10.30", image: jacket },
    { name: "Brown winter coat medium size", price: "$12.50", image: coat },
    { name: "Leather wallet", price: "$34.00", image: wallet },
    { name: "Jeans bag for travel for men", price: "$99.00", image: bag },
    { name: "Denim shorts", price: "$12.00", image: shorts },
    { name: "Headset for gaming with mic", price: "$15.00", image: headphone },
    { name: "Backpack", price: "$20.00", image: bag },
    { name: "Clay pot", price: "$8.00", image: pot },
    { name: "Electric kettle", price: "$25.00", image: kettle },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      <Hero />
      {/* 🔷 DEALS */}
      <DealsSection />

      {/* 🔷 HOME */}
      <CategorySection
        title={"Home\nand outdoor"}
        image={Home}
        products={homeProducts}
        ctaLink="/listing"
      />

      {/* 🔷 ELECTRONICS */}
      <CategorySection
        title={"Consumer electronics\nand gadgets"}
        image={Electronics}
        products={electronicProducts}
        ctaLink="/listing"
      />

      {/* 🔷 QUOTE */}
      <QuoteSection />

      {/* 🔷 RECOMMENDED */}
      <RecommendedSection
        products={featuredProducts.length > 0 ? featuredProducts : recommendedProducts}
      />
      {featuredError && (
        <div className="px-6 py-2 text-center text-sm text-red-600">
          {featuredError}
        </div>
      )}

      <ExtraServices />

      <Suppliers />

    </div>
  );
};

export default HomePage;