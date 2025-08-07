import React, { useRef } from "react";
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

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* DotGrid Animation Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={3.5}
          gap={13}
          baseColor="#D3D3D3"
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
        <a
         
          className="inline-block bg-gray-200 text-gray-700 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium"
        >
          Our Work
        </a>

        <h2 className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 cursor-zoom">
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

        <p className="mt-4 text-[9px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base text-gray-600 max-w-2xl mx-auto px-2">
          At Triovex Solution, we build intelligent digital ecosystems powered
          by AI/ML from smart web apps to automation and analytics, designed to
          scale, adapt, and transform your business.
        </p>
      </div>
    </div>
  );
};

export default WorksHero;
