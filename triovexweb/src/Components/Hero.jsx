"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import DotGrid from "../Components/AnimationComponents/dotgrid";

import hp1 from "../assets/hp1.jpg";
import hp2 from "../assets/hp2.jpg";
import hp3 from "../assets/hp3.jpg";
import hp4 from "../assets/hp4.jpg";
import hp5 from "../assets/hp5.jpg";
import hp6 from "../assets/hp6.jpg";
import hp7 from "../assets/hp7.jpg";
import hp8 from "../assets/hp8.jpg";
import hp9 from "../assets/hp9.jpg";

const Hero = () => {
  const heroRef = useRef(null);
  const carouselRef = useRef(null);

  // state to hold theme-based dot color
  const [dotColor, setDotColor] = useState("#E5E5E5");

  useEffect(() => {
    // initial load
    const isDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDotColor(isDark ? "#2a2a2a" : "#E5E5E5");

    // listener for system/browser theme changes
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      setDotColor(e.matches ? "#2a2a2a" : "#E5E5E5");
    };
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  const headingWords = [
    "Where",
    "AI",
    "Innovation",
    "Fuels",
    "Digital",
    "Success.",
  ];

  const portfolioImages = [hp1, hp2, hp3, hp4, hp5, hp6, hp7, hp8, hp9];
  const duplicatedImages = portfolioImages.concat(
    portfolioImages,
    portfolioImages
  );

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const singleSetWidth = carousel.scrollWidth / 3;
    let scrollPosition = 0;

    const referenceWidth = 1440;
    const screenWidth = window.innerWidth;
    const baseSpeed = 1.2;

    let speed = (screenWidth / referenceWidth) * baseSpeed;

    const animate = () => {
      scrollPosition += speed;
      if (scrollPosition >= singleSetWidth) scrollPosition = 0;
      carousel.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      speed = (newScreenWidth / referenceWidth) * baseSpeed;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative w-full min-h-[90vh] sm:min-h-[150vh] overflow-hidden 
                 bg-white dark:bg-black transition-colors duration-500"
    >
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0 w-full top-0 left-0 m-0 p-0">
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
        className="relative min-h-[80vh] sm:min-h-screen 
               w-full flex flex-col items-center justify-center 
               px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          className="max-w-2xl sm:max-w-4xl w-full text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Badge */}
          <div className="mb-3 sm:mb-6 mt-6 sm:mt-10">
            <span
              className="inline-block bg-[#313719]/10 px-3 sm:px-6 py-1.5 sm:py-3 
                         rounded-full text-[10px] sm:text-xs md:text-sm font-medium 
                         backdrop-blur-sm shadow-md text-black dark:text-white"
            >
              Beyond code Towards intelligence
            </span>
          </div>

          {/* Animated Heading */}
          <motion.h2
            className="mt-4 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                   font-bold text-gray-900 dark:text-gray-100"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Subheading */}
          <p
            className="mt-3 text-[11px] sm:text-xs md:text-sm lg:text-base 
                   text-gray-600 dark:text-gray-300 
                   max-w-md sm:max-w-2xl mx-auto leading-relaxed"
          >
            We craft intelligent digital solutions that blend creative design,
            strategic thinking, and cutting-edge AI/ML technology to drive
            scalable, automated, and future-ready business growth.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => {
              const element = document.getElementById("Consultation");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-6 bg-[#313719] text-white hover:bg-white hover:text-[#313719] 
                   px-5 sm:px-8 py-2.5 sm:py-3 rounded-full 
                   text-sm sm:text-base font-semibold transition-all duration-300 
                   transform hover:scale-105 shadow-md hover:shadow-lg border 
                   border-green-500/30"
          >
            Talk to an Expert
          </button>

          {/* Support */}
          <div className="flex flex-col items-center justify-center mt-6 sm:mt-10 text-black dark:text-white">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium">
                24 * 7 Support
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="absolute bottom-0 w-full z-10 pb-8 sm:pb-16">
        <div
          ref={carouselRef}
          className="flex space-x-3 sm:space-x-6 overflow-hidden px-4 sm:px-6 items-start"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-lg overflow-hidden
                     w-36 sm:w-60 md:w-72 lg:w-80 
                     h-24 sm:h-36 md:h-44 lg:h-48"
            >
              <img
                src={src}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
