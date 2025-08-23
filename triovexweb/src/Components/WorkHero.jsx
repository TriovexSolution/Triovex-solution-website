import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import DotGrid from "../Components/AnimationComponents/dotgrid";

const headingWords = [
  "Pioneering",
  "Intelligence",
  "AI-Powered",
  "Design,",
  "Code,",
  "Brilliance.",
];

const WorksHero = () => {
  const heroRef = useRef(null);

  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    // Watch for dark/light theme changes
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Dot color based on theme
  const dotColor = isDarkMode ? "#2a2a2a" : "#E5E5E5";
  const bgColor = isDarkMode ? "#000000" : "#ffffff";
  const textColor = isDarkMode ? "#ffffff" : "#111827";
  const subTextColor = isDarkMode ? "#d1d5db" : "#4b5563";
  const badgeBg = isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(49,55,25,0.1)";
  const badgeText = isDarkMode ? "#ffffff" : "#000000";

  return (
    <div
      className="relative w-full h-screen overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* DotGrid Animation Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={3.0}
          gap={9}
          baseColor={dotColor}
          activeColor="#22c55e"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Hero Content */}
      <div
        ref={heroRef}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 cursor-none"
      >
        {/* Badge */}
        <div className="mb-3 sm:mb-6 mt-6 sm:mt-10">
          <span
            className="inline-block px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium backdrop-blur-sm shadow-md"
            style={{ backgroundColor: badgeBg, color: badgeText }}
          >
            Our Work
          </span>
        </div>

        {/* Animated Heading */}
        <h2
          className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold cursor-zoom"
          style={{ color: textColor }}
        >
          {headingWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Subheading */}
        <p
          className="mt-4 text-[9px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base max-w-2xl mx-auto px-2"
          style={{ color: subTextColor }}
        >
          At Triovex Solution, we build intelligent digital ecosystems powered
          by AI/ML from smart web apps to automation and analytics, designed to
          scale, adapt, and transform your business.
        </p>
      </div>
    </div>
  );
};

export default WorksHero;
