import React from "react";
import { Search, Package, Plane, ShieldCheck } from "lucide-react";

// 🔥 Images import karo
import img1 from "../assets/images/service1.png";
import img2 from "../assets/images/service2.png";
import img3 from "../assets/images/service3.png";
import img4 from "../assets/images/service4.png";

const services = [
  {
    title: "Source from\nIndustry Hubs",
    image: img1,
    icon: <Search size={18} />,
  },
  {
    title: "Customize Your\nProducts",
    image: img2,
    icon: <Package size={18} />,
  },
  {
    title: "Fast, reliable shipping\nby ocean or air",
    image: img3,
    icon: <Plane size={18} />,
  },
  {
    title: "Product monitoring\nand inspection",
    image: img4,
    icon: <ShieldCheck size={18} />,
  },
];

const OurExtraServices = () => {
  return (
    <div className="px-6 py-8 bg-[#f7f8fa]">
      <h2 className="text-3xl font-bold mb-6">
        Our extra services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={item.image}
                alt=""
                className="w-full h-32 object-cover"
              />

              {/* ICON CIRCLE */}
              <div className="absolute -bottom-5 right-4 bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center shadow">
                {item.icon}
              </div>
            </div>

            {/* TEXT */}
            <div className="p-4 pt-6">
              <p className="text-sm font-medium whitespace-pre-line">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExtraServices;