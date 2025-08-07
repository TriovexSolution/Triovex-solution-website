"use client";
import React, { useRef, useEffect } from "react";
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

    const animate = () => {
      scrollPosition += 0.8;
      if (scrollPosition >= singleSetWidth) scrollPosition = 0;
      carousel.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="relative w-full min-h-[150vh] overflow-hidden">
      {/* DotGrid Background */}
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
        className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <motion.div
          className="max-w-4xl w-full text-center text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Badge */}
          <div className="mb-4 sm:mb-6 mt-10">
            <span className="inline-block bg-[#313719]/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs md:text-sm lg:text-base font-medium backdrop-blur-sm shadow-lg">
              Beyond code Towards intelligence
            </span>
          </div>

          {/* Animated Heading */}
          <motion.h2
            className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 cursor-zoom my-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.07 },
              },
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
          <p className="mt-4 text-[9px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base text-gray-600 max-w-2xl mx-auto px-2 leading-relaxed mt-5 my-8">
            We craft intelligent digital solutions that blend creative design,
            strategic thinking, and cutting-edge AI/ML technology to drive
            scalable, automated, and future-ready business growth.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-[#313719] text-white hover:bg-white hover:text-[#313719] px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-green-500/30 select-none"
          >
            Get in Touch
          </button>

          {/* Support Text */}
          <div className="flex items-center justify-center space-x-2 text-black mt-10">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] sm:text-xs md:text-sm font-medium">
              24 * 7 Support
            </span>
          </div>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="absolute bottom-0 w-full z-10 pb-12 sm:pb-16">
        <div
          ref={carouselRef}
          className="flex space-x-4 sm:space-x-6 overflow-hidden px-4 sm:px-6"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-xl overflow-hidden"
              style={{ minWidth: "280px", height: "180px" }}
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
