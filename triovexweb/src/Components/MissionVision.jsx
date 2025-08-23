"use client";

import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import logo from "../assets/logo.png";
import darklogo from "../assets/darkmodelogo.png";
import mission from "../assets/mission2.jpg";
import vision from "../assets/vision2.jpg";

const MissionVision = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const html = document.documentElement;
      setIsDark(html.classList.contains("dark"));
    };

    checkTheme(); // initial check

    // Optional: watch for changes (if dark class is toggled dynamically)
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Desktop View */}
        <m.div className="hidden md:flex justify-center items-center gap-8 relative">
          {/* Vision */}
          <div className="bg-[#313719] text-white p-8 rounded-lg shadow-lg w-full max-w-md lg:max-w-[500px] h-auto min-h-[300px] relative">
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-sm leading-relaxed mb-6">
              Shaping a future where technology is ethical, personal, and planet-friendly. At Triovex Solution, we’re building a legacy of innovation that empowers businesses and uplifts communities worldwide.
            </p>
            <div className="flex justify-end items-end absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <img src={vision} alt="Vision" className="w-44 md:w-36 lg:w-44 object-cover rounded shadow-md" />
            </div>
          </div>

          {/* Mission */}
          <div className="bg-[#313719] text-white p-8 rounded-lg shadow-lg w-full max-w-md lg:max-w-[500px] h-auto min-h-[300px] relative">
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-sm leading-relaxed mb-6">
              Empowering innovation with smart, sustainable tech — built with heart, code, and purpose. At Triovex Solution, we turn bold ideas into impactful digital realities.
            </p>
            <div className="flex justify-start items-end absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <img src={mission} alt="Mission" className="w-44 md:w-36 lg:w-44 object-cover rounded shadow-md" />
            </div>
          </div>

          {/* Center Logo with round base */}
          <div
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rounded-full w-[25vw] max-w-[200px] h-[25vw] max-h-[200px] z-10 flex items-center justify-center transition-colors duration-500"
            style={{
              backgroundColor: isDark ? "black" : "#FFFFFF",
              
            }}
          >
            <img src={isDark ? darklogo : logo} alt="Triovex" className="w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 mx-auto" />
          </div>
        </m.div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          <div className="bg-[#313719] text-white p-6 rounded-lg shadow-lg mx-auto w-full max-w-xs h-auto min-h-[280px] relative">
            <h3 className="text-xl font-bold mb-3">Vision</h3>
            <p className="text-sm leading-relaxed mb-4">
              Shaping a future where technology is ethical, personal, and planet-friendly. At Triovex Solution, we’re building a legacy of innovation that empowers businesses and uplifts communities worldwide.
            </p>
            <div className="flex justify-center items-end absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <img src={vision} alt="Vision" className="w-28 sm:w-32 object-cover rounded shadow-md" />
            </div>
          </div>

          <div className="bg-[#313719] text-white p-6 rounded-lg shadow-lg mx-auto w-full max-w-xs h-auto min-h-[280px] relative">
            <h3 className="text-xl font-bold mb-3">Mission</h3>
            <p className="text-sm leading-relaxed mb-4">
              Empowering innovation with smart, sustainable tech — built with heart, code, and purpose. At Triovex Solution, we turn bold ideas into impactful digital realities.
            </p>
            <div className="flex justify-center items-end absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <img src={mission} alt="Mission" className="w-28 sm:w-32 object-cover rounded shadow-md" />
            </div>
          </div>

          <div
            className="px-6 py-4 rounded-full shadow-lg mx-auto w-fit transition-colors duration-500"
            style={{
              backgroundColor: isDark ? "black" : "#FFFFFF",
              boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <div className="text-center">
              <img src={isDark ? darklogo : logo} alt="Triovex" className="w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
