import React, { useEffect, useState } from "react";

// 🔥 Images (make sure names EXACT match)
import watch from "../assets/images/watch.png";
import laptop from "../assets/images/laptop.png";
import camera from "../assets/images/camera.png";
import headphone from "../assets/images/Headphone.png"; // ⚠️ case check
import mobile from "../assets/images/canon.png"; // ⚠️ file must exist

const DealsSection = () => {

  // 🔥 Target Date (example: 4 days from now)
  
  const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    
    // ✅ FIXED (no warning)
    useEffect(() => {
        
        const targetDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;

    const getTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // 🔥 Run immediately
    setTimeLeft(getTime());

    const timer = setInterval(() => {
      setTimeLeft(getTime());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  // 🔥 Products
  const products = [
    { name: "Smart watches", discount: "-25%", image: watch },
    { name: "Laptops", discount: "-15%", image: laptop },
    { name: "GoPro camera", discount: "-40%", image: camera },
    { name: "Headphones", discount: "-25%", image: headphone },
    { name: "Canon cameras", discount: "-25%", image: mobile },
  ];

  return (
    <div className="md:px-6 md:py-4 bg-[#f7f8fa]">

      <div className="bg-white md:rounded md:shadow-sm">

        <div className="flex flex-col md:flex-row md:items-center border border-gray-200 rounded-lg overflow-hidden">

          {/* 🔷 LEFT SIDE (Title & Timer) */}
          <div className="flex md:flex-col justify-between items-center md:items-start p-4 md:p-6 md:w-[280px] md:border-r border-gray-200 shrink-0">
            <div>
              <h2 className="font-bold text-gray-900 text-lg">Deals and offers</h2>
              <p className="text-sm text-gray-500 mb-0 md:mb-4">Electronic equipments</p>
            </div>

            {/* 🔥 LIVE TIMER */}
            <div className="flex gap-1.5 md:gap-2 text-center text-xs md:text-white text-gray-800">
              <div className="bg-gray-100 md:bg-gray-800 md:text-white px-2 py-1.5 rounded min-w-[36px]">
                <span className="font-bold text-sm">{timeLeft.days}</span> <br /><span className="text-[10px]">Days</span>
              </div>
              <div className="bg-gray-100 md:bg-gray-800 md:text-white px-2 py-1.5 rounded min-w-[36px]">
                <span className="font-bold text-sm">{timeLeft.hours}</span> <br /><span className="text-[10px]">Hour</span>
              </div>
              <div className="bg-gray-100 md:bg-gray-800 md:text-white px-2 py-1.5 rounded min-w-[36px]">
                <span className="font-bold text-sm">{timeLeft.minutes}</span> <br /><span className="text-[10px]">Min</span>
              </div>
              <div className="bg-gray-100 md:bg-gray-800 md:text-white px-2 py-1.5 rounded min-w-[36px]">
                <span className="font-bold text-sm">{timeLeft.seconds}</span> <br /><span className="text-[10px]">Sec</span>
              </div>
            </div>
          </div>

          {/* 🔷 PRODUCTS (Horizontal Scroll on Mobile) */}
          <div className="flex overflow-x-auto hide-scrollbar w-full border-t md:border-t-0 border-gray-200 divide-x divide-gray-200">
            {products.map((item, index) => (
              <div
                key={index}
                className="p-4 md:p-6 text-center hover:bg-gray-50 transition flex flex-col justify-between shrink-0 w-[140px] md:w-1/5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto mb-3 h-20 md:h-24 object-contain mix-blend-multiply"
                />

                <div>
                  <p className="text-sm text-gray-800 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</p>
                  <span className="bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default DealsSection;