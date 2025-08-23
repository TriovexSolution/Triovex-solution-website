import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import DotGrid from "../Components/AnimationComponents/dotgrid";

const headingWords = [
  "Let’s",
  "Connect",
  "Your",
  "Next",
  "Big",
  "Idea",
  "Starts",
  "Here",
];

const ContactHero = () => {
  const heroRef = useRef(null);
  const [isDark, setIsDark] = useState(false);
  const [dotColor, setDotColor] = useState("#E5E5E5");

  // Detect dark class on html
  useEffect(() => {
    const checkTheme = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();

    const observer = new MutationObserver(() => checkTheme());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Update dot color
  useEffect(() => {
    setDotColor(isDark ? "#2a2a2a" : "#E5E5E5");
  }, [isDark]);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: isDark ? "#000000" : "#ffffff" }}
    >
      {/* DotGrid Background */}
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
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 cursor-none">
        {/* Badge */}
        <div className="mb-3 sm:mb-6 mt-6 sm:mt-10">
          <span
            className="inline-block px-3 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium backdrop-blur-sm shadow-md text-[10px] sm:text-xs md:text-sm transition-colors duration-300"
            style={{
              backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(49,55,25,0.1)",
              color: isDark ? "#ffffff" : "#000000",
            }}
          >
            Contact
          </span>
        </div>

        {/* Animated Heading */}
        <h2
          className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold cursor-zoom transition-colors duration-300"
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

        {/* Subheading */}
        <p
          className="mt-4 text-[9px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base max-w-2xl mx-auto px-2 transition-colors duration-300"
          style={{ color: isDark ? "#d1d5db" : "#4b5563" }}
        >
          Have a question or a project in mind? Our team is just a message away ready to assist you with expert support, 24/7.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
