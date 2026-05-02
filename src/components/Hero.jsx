import React, { useState } from "react";
import banner from "../assets/images/Banner-board.png";
import user from "../assets/images/Avatar.png"; // // 👈 apni image ka path

const Hero = () => {

  const [active, setActive] = useState("Automobiles");
  const [activeBtn, setActiveBtn] = useState("join");

  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category"
  ];

  return (
    <div className="px-6 py-4 bg-gray-100">

      {/* 🔥 ONE MAIN BOX */}
      <div className="bg-white rounded shadow-sm p-4">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* 🔷 LEFT SIDEBAR */}
          <div>
            <ul className="space-y-2 text-sm">

              {categories.map((item) => (
                <li
                  key={item}
                  onClick={() => setActive(item)}
                  className={`cursor-pointer px-3 py-2 rounded transition
                  ${
                    active === item
                      ? "bg-blue-100 text-blue-600 font-medium"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                </li>
              ))}

            </ul>
          </div>

          {/* 🔷 CENTER BANNER */}
          <div
  className="md:col-span-2 rounded bg-cover bg-center min-h-[220px] flex items-start"
  style={{ backgroundImage: `url(${banner})` }}
>

  {/* 🔥 Text TOP EDGE ke paas */}
  <div className="text-black max-w-sm mt-14 ml-8">

    <h2 className="text-3xl mb-1">
      Latest trending
    </h2>

    <h1 className="text-4xl font-bold mb-3">
      Electronic items
    </h1>

    <button className="bg-white px-4 py-2 rounded hover:bg-gray-100 transition">
      Learn more
    </button>

  </div>

</div>


          {/* 🔷 RIGHT CARDS */}
          
         <div className="flex flex-col gap-4">

  {/* 🔷 LOGIN CARD */}
  <div className="bg-blue-100 p-4 rounded">

    {/* 👤 Image + Text */}
    <div className="flex items-center gap-3 mb-3">
      <img
        src={user}
        alt="user"
        className="w-10 h-10 rounded-full"
      />

      <div className="text-sm leading-tight">
        <p className="font-medium">Hi, user</p>
        <p className="text-black-400">Let's get started</p>
      </div>
    </div>

   <button
  onClick={() => setActiveBtn("join")}
  className={`px-3 py-1 rounded w-full mb-2 transition
    ${
      activeBtn === "join"
        ? "bg-blue-500 text-white"
        : "bg-white border"
    }`}
>
  Join now
</button>

<button
  onClick={() => setActiveBtn("login")}
  className={`px-3 py-1 rounded w-full transition
    ${
      activeBtn === "login"
        ? "bg-blue-500 text-white"
        : "bg-white border"
    }`}
>
  Log in
</button>

  </div>

  {/* 🔶 OFFER 1 */}
  <div className="bg-orange-500 p-4 rounded text-sm text-white">
    Get US $10 off <br /> with a new <br /> supplier
  </div>

  {/* 🔷 OFFER 2 */}
  <div className="bg-sky-400 p-4 rounded text-sm text-white">
    Send quotes with <br /> supplier <br /> preferences
  </div>

</div>


        </div>
      </div>
    </div>
  );
};

export default Hero;