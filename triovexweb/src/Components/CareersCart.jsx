import React, { useEffect, useState } from "react";

import career1 from "./../assets/career1.png";
import career2 from "./../assets/career2.png";
import career3 from "./../assets/career3.png";
import career4 from "./../assets/career4.png";

export default function CareersSection() {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    // Observe changes on <html> class
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      image: career1,
      title: "Expert Team",
      description:
        "Work alongside 200+ certified engineers and industry experts",
    },
    {
      image: career2,
      title: "Cutting-Edge Tech",
      description: "Access to the latest industrial technology and equipment",
    },
    {
      image: career3,
      title: "Global Opportunities",
      description:
        "International assignments and career advancement opportunities",
    },
    {
      image: career4,
      title: "Competitive Benefits",
      description: "Comprehensive compensation and benefits package",
    },
  ];

  const sectionBgColor = isDarkMode ? "#000000" : "#FFFFFF";
  const textColor = isDarkMode ? "#FFFFFF" : "#111111";
  return (
    <section
      style={{
        backgroundColor: sectionBgColor,
        transition: "background-color 0.5s ease",
      }}
      className="py-16 px-4 text-center"
    >
      <h2 className="text-xl font-semibold" style={{ color: textColor }}>
        Careers
      </h2>
      <p className="mb-12 text-sm text-gray-600">
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
            <p className="text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
