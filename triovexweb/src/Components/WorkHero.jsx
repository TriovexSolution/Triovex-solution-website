import React, { useRef } from "react";
import { motion } from "framer-motion";
import MagnifyCursor from "../Components/AnimationComponents/MagnifyCursor";

const WorksHero = () => {
  const heroRef = useRef(null);

  // Updated heading for Works page
  const headingWords = [
    "Explore",
    "Our",
    "Craft",
    "–",
    "Designs,",
    "Code,",
    "Impact.",
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute w-full h-full object-cover object-center"
        src="src/assets/hbg.png"
        alt="Works Background"
      />

      {/* Hero Content */}
      <div
        ref={heroRef}
        className="relative z-10 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 cursor-none"
      >
        <MagnifyCursor containerRef={heroRef} />

        <div className="text-center">
          <a
            href="#projects"
            className="inline-block bg-gray-200 text-gray-700 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium"
          >
            Our Work
          </a>

          {/* Animated Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mt-6 cursor-zoom">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <p className="mt-4 text-[9px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base text-gray-600 max-w-2xl mx-auto px-2">
            Dive into the solutions we’ve crafted — from visual storytelling to
            functional digital experiences. Each project is a piece of our
            passion and precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorksHero;
