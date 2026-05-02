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
    <div className="px-6 py-4 bg-gray-100">

      <div className="bg-white rounded shadow-sm p-4">

        <div className="grid grid-cols-6 gap-4 items-center">

          {/* 🔷 LEFT SIDE */}
          <div className="col-span-1">
            <h2 className="font-semibold text-lg">Deals and offers</h2>
            <p className="text-sm text-gray-500 mb-3">
              Hygiene equipments
            </p>

            {/* 🔥 LIVE TIMER */}
            <div className="flex gap-2 text-center text-xs text-white">
              <div className="bg-black px-2 py-1 rounded">
                {timeLeft.days} <br />Days
              </div>
              <div className="bg-black px-2 py-1 rounded">
                {timeLeft.hours} <br />Hour
              </div>
              <div className="bg-black px-2 py-1 rounded">
                {timeLeft.minutes} <br />Min
              </div>
              <div className="bg-black px-2 py-1 rounded">
                {timeLeft.seconds} <br />Sec
              </div>
            </div>
          </div>

          {/* 🔷 PRODUCTS */}
          {products.map((item, index) => (
  <div
    key={index}
    className="border rounded p-4 text-center hover:shadow-md transition flex flex-col justify-between h-[200px]"
  >
    <img
      src={item.image}
      alt={item.name}
      className="mx-auto mb-2 h-24 object-contain"
    />

    <p className="text-sm font-medium">{item.name}</p>

    <p className="text-red-500 text-xs font-semibold mt-1">
      {item.discount}
    </p>
  </div>
))}
        </div>

      </div>

    </div>
  );
};

export default DealsSection;