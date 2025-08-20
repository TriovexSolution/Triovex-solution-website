import React, { useState, useEffect } from "react";

import career1 from "./../assets/career1.png";
import career2 from "./../assets/career2.png";
import career3 from "./../assets/career3.png";
import career4 from "./../assets/career4.png";

export default function CareersSection() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    const listener = (e) => setIsDarkMode(e.matches);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);
    return () =>
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
  }, []);

  const cards = [
    {
      image: career1,
      title: "Expert Team",
      description: "Work alongside 200+ certified engineers and industry experts",
    },
    {
      image: career2,
      title: "Cutting-Edge Tech",
      description: "Access to the latest industrial technology and equipment",
    },
    {
      image: career3,
      title: "Global Opportunities",
      description: "International assignments and career advancement opportunities",
    },
    {
      image: career4,
      title: "Competitive Benefits",
      description: "Comprehensive compensation and benefits package",
    },
  ];

  return (
    <section
      className={`py-16 px-4 text-center ${
        isDarkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      <h2 className="text-xl font-semibold">Careers</h2>
      <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-12 text-sm`}>
        Join a team that values innovation, excellence, and professional growth
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#313719] text-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-12 h-12 mb-4 mx-auto object-contain"
            />
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-200">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
