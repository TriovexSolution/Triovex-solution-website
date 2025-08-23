import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import DotGrid from "../Components/AnimationComponents/dotgrid";

const headingWords = [
  "Empowering",
  "Brands",
  "with",
  "AI-Driven",
  "Innovation.",
];

const WorksHero = () => {
  const heroRef = useRef(null);

  const [isDark, setIsDark] = useState(false);
  const [dotColor, setDotColor] = useState("#E5E5E5");

  // Detect system or class-based theme
  useEffect(() => {
    const checkTheme = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    checkTheme(); // initial check

    // Observe class changes on <html>
    const observer = new MutationObserver(() => checkTheme());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Update dot color based on theme
  useEffect(() => {
    setDotColor(isDark ? "#2a2a2a" : "#E5E5E5");
  }, [isDark]);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: isDark ? "#000000" : "#ffffff" }}
    >
      {/* DotGrid Animation Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={3.0}
          gap={9}
          baseColor={dotColor} // dynamically set based on theme
          activeColor="#22c55e"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 cursor-none">
        <a
          className="inline-block px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium transition-colors duration-300"
          style={{
            backgroundColor: isDark ? "#222222" : "#e5e5e5",
            color: isDark ? "#ffffff" : "#1f2937",
          }}
        >
          About
        </a>

        <h2
          className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold cursor-zoom"
          style={{ color: isDark ? "#ffffff" : "#111827" }}
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

        <p
          className="mt-4 text-[9px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base max-w-2xl mx-auto px-2 transition-colors duration-300"
          style={{ color: isDark ? "#d1d5db" : "#4b5563" }}
        >
          We fuse creativity, strategy, and Artificial Intelligence to build
          future-ready solutions that accelerate growth and redefine digital success.
        </p>
      </div>
    </div>
  );
};

export default WorksHero;
