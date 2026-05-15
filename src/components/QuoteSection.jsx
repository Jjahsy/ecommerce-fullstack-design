import React from "react";
import banner from "../assets/images/Banner-board.png";

const QuoteSection = () => {
  return (
    <div className="md:px-6 md:py-6 bg-[#f7f8fa]">
      <div
        className="relative md:rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 🔵 BLUE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-500/70"></div>

        {/* 🔷 CONTENT */}
        <div className="relative grid md:grid-cols-2 gap-6 items-start p-6 md:p-10 min-h-[160px] md:min-h-[300px]">

          {/* 🔵 LEFT TEXT */}
          <div className="text-white max-w-md flex flex-col justify-start pt-0">
            <h2 className="text-xl md:text-3xl font-semibold leading-snug md:mb-3">
              An easy way to send <br className="hidden md:block" />
              requests to all suppliers
            </h2>

            <p className="hidden md:block text-base text-blue-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit, sed do eiusmod tempor incididunt.
            </p>

            {/* MOBILE ONLY BUTTON */}
            <div className="md:hidden mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700">
                Send inquiry
              </button>
            </div>
          </div>

          {/* ⚪ RIGHT FORM (Hidden on Mobile) */}
          <div className="hidden md:block bg-white rounded-lg p-6 shadow-md w-full max-w-md ml-auto">
            <h3 className="font-bold text-black text-xl mb-4">
              Send quote to suppliers
            </h3>

            <input
              type="text"
              placeholder="What item you need?"
              className="w-full border rounded px-3 py-2 mb-3 text-base placeholder-black"
            />

            <textarea
              placeholder="Type more details"
              className="w-full border rounded px-3 py-2 mb-3 text-sm"
              rows="3"
            ></textarea>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Quantity"
                className="w-1/2 border rounded px-3 py-2 text-base placeholder-black"
              />

              <select className="w-1/4 border rounded px-2 py-2 text-sm">
                <option>Pcs</option>
              </select>
            </div>

            <button className="bg-blue-600 text-white px-5 py-2 rounded text-sm hover:bg-blue-700">
              Send inquiry
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuoteSection;