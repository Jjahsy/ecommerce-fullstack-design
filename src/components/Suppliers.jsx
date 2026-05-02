import React from "react";

// 🔥 FLAGS import karo
import uae from "../assets/flags/uae.png";
import aus from "../assets/flags/australia.png";
import usa from "../assets/flags/usa.png";
import ru from "../assets/flags/russia.png";
import it from "../assets/flags/italy.png";
import dk from "../assets/flags/denmark.png";
import fr from "../assets/flags/france.png";
import cn from "../assets/flags/china.png";
import uk from "../assets/flags/uk.png";

const suppliers = [
  { name: "Arabic Emirates", site: "shopname.ae", flag: uae },
  { name: "Australia", site: "shopname.ae", flag: aus },
  { name: "United States", site: "shopname.ae", flag: usa },
  { name: "Russia", site: "shopname.ru", flag: ru },
  { name: "Italy", site: "shopname.it", flag: it },
  { name: "Denmark", site: "denmark.com.dk", flag: dk },
  { name: "France", site: "shopname.com.fr", flag: fr },
   { name: "Arabic Emirates", site: "shopname.ae", flag: uae },
  { name: "China", site: "shopname.ae", flag: cn },
  { name: "Great Britain", site: "shopname.co.uk", flag: uk },
];

const SuppliersSection = () => {
  return (
    <div className="px-6 py-8 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6">
        Suppliers by region
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {suppliers.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            
            {/* FLAG */}
            <img
              src={item.flag}
              alt=""
              className="w-6 h-4 object-cover rounded-sm"
            />

            {/* TEXT */}
            <div>
              <p className="text-base font-medium">
                {item.name}
              </p>
              <p className="text-base text-gray-400">
                {item.site}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliersSection;