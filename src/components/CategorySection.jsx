import React from "react";
import { Link } from "react-router-dom";

const CategorySection = ({ title, image, products = [], ctaLink }) => {
  return (
    <div className="md:px-6 md:py-4 bg-[#f7f8fa] border-t md:border-t-0 border-gray-200 mt-2 md:mt-0">

      <div className="bg-white md:rounded md:shadow-sm">

        {/* MOBILE TITLE */}
        <div className="md:hidden p-4 pb-2">
          <h2 className="text-lg font-bold text-gray-900">{title.replace('\n', ' ')}</h2>
        </div>

        <div className="flex flex-col md:flex-row md:border border-gray-200 md:rounded-lg overflow-hidden">

          {/* 🔷 LEFT BANNER (Desktop Only) */}
          <div
            className="hidden md:flex md:w-[280px] p-6 flex-col shrink-0 relative"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* 🔥 TEXT */}
            <div className="text-black">
              <h2 className="text-lg font-semibold leading-6 whitespace-pre-line">
                {title}
              </h2>
            </div>

            {/* 🔥 BUTTON (FIGMA POSITION) */}
            <div className="mt-4">
              {ctaLink ? (
                <Link
                  to={ctaLink}
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-gray-100 transition"
                >
                  Source now
                </Link>
              ) : (
                <button className="bg-white text-black px-4 py-2 rounded-md text-sm shadow-sm hover:bg-gray-100 transition">
                  Source now
                </button>
              )}
            </div>
          </div>

          {/* 🔷 PRODUCTS SCROLL (Mobile) & GRID (Desktop) */}
          <div className="flex overflow-x-auto hide-scrollbar w-full border-y md:border-y-0 md:border-l border-gray-200 md:grid md:grid-cols-4 md:divide-y-0 md:divide-x-0 divide-x divide-gray-200 md:grid-rows-2">

            {products.map((item, index) => (
              <div
                key={index}
                className="p-4 flex flex-col md:flex-row md:justify-between items-center md:items-start shrink-0 w-[140px] md:w-auto border-gray-200 md:border-b md:border-r md:[&:nth-child(4n)]:border-r-0 md:[&:nth-last-child(-n+4)]:border-b-0 hover:bg-gray-50 transition"
              >

                {/* 🔷 IMAGE (TOP on mobile, BOTTOM RIGHT on desktop) */}
                <div className="flex justify-center md:justify-end md:order-2 mb-3 md:mb-0 w-full h-20 md:h-16">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full object-contain mix-blend-multiply"
                  />
                </div>

                {/* 🔷 TEXT (BOTTOM on mobile, TOP LEFT on desktop) */}
                <div className="md:order-1 text-center md:text-left w-full">
                  <p className="text-sm text-gray-800 md:font-medium leading-tight whitespace-nowrap md:whitespace-normal overflow-hidden text-ellipsis">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-400 md:mt-2">
                    {item.price}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* MOBILE SOURCE NOW LINK */}
        <div className="md:hidden p-4">
          {ctaLink ? (
            <Link to={ctaLink} className="text-blue-600 text-sm font-medium flex items-center gap-1">
              Source now <span>→</span>
            </Link>
          ) : (
            <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
              Source now <span>→</span>
            </button>
          )}
        </div>

      </div>

    </div>
  );
};

export default CategorySection;