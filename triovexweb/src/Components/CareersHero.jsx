import React, { useRef } from "react";
import { motion } from "framer-motion";
import MagnifyCursor from "../Components/AnimationComponents/MagnifyCursor";

const CareersHero = () => {
  const heroRef = useRef(null);

  // New heading split into words for animation
  const headingWords = [
    "We're",
    "Here",
    "to",
    "Help",
    "–",
    "Contact",
    "Us",
    "Anytime",
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Ken Burns Background */}
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
        alt="Background"
      />

      {/* Hero Section with cursor */}
      <div
        ref={heroRef}
        className="relative z-10 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 cursor-none"
      >
        {/* Custom Cursor only in Hero */}
        <MagnifyCursor containerRef={heroRef} />

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-gray-200 text-gray-700 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium"
          >
            Careers
          </a>

          {/* Animated heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-6 cursor-zoom">
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

          <p className="mt-4 text-[11px] sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto cursor-zoom leading-relaxed">
            Our dedicated team is always ready to assist you with any questions,
            support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersHero;
