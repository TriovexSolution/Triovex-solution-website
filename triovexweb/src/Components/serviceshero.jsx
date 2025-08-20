import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import DotGrid from "../Components/AnimationComponents/dotgrid";

const headingWords = ["Smart", "Solutions.", "Real", "Impact."];

const ServiceHero = () => {
  const heroRef = useRef(null);

  // Dot color based on system/browser theme
  const [dotColor, setDotColor] = useState("#E5E5E5");

  useEffect(() => {
    const isDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDotColor(isDark ? "#2a2a2a" : "#E5E5E5");

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setDotColor(e.matches ? "#2a2a2a" : "#E5E5E5");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* DotGrid Animation Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={3.0}
          gap={9}
          baseColor={dotColor} // dynamic based on browser/system theme
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
          <span className="inline-block bg-[#313719]/10 dark:bg-white/10 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium text-black dark:text-white backdrop-blur-sm shadow-md">
            Services
          </span>
        </div>

        {/* Animated Heading */}
        <h2 className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white cursor-zoom">
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
        <p className="mt-4 text-[9px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
          From AI-powered apps to SEO, automation, and digital marketing we
          deliver full-stack digital services that scale businesses and spark
          intelligent growth.
        </p>
      </div>
    </div>
  );
};

export default ServiceHero;
