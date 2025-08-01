"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { NavLink } from "react-router-dom";
import MagnifyCursor from "../Components/AnimationComponents/MagnifyCursor";

// Assets
import hbg from "../assets/hbg.png";
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

  const portfolioImages = [hp1, hp2, hp3, hp4, hp5, hp6, hp7, hp8, hp9];

  const duplicatedImages = [
    ...portfolioImages,
    ...portfolioImages,
    ...portfolioImages,
  ];

  // Start carousel animation
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
    <div
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden touch-none "
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hbg})`, zIndex: 10 }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-20 md:pb-24 min-h-screen flex flex-col justify-center"
        ref={heroRef}
      >
        {/* Fast-loading custom cursor */}
        <MagnifyCursor containerRef={heroRef} />

        <motion.div
          className="max-w-4xl mx-auto text-center text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="mb-6 sm:mb-8">
            <span className="inline-block bg-[#313719]/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs md:text-sm lg:text-base font-medium backdrop-blur-sm shadow-lg">
              Beyond code Towards intelligence
            </span>
          </div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
            }}
          >
            {"Creative design meets strategy for business success."
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
          </motion.h1>

          <p className="text-[11px] sm:text-sm md:text-base lg:text-lg mb-10 max-w-2xl mx-auto leading-relaxed text-gray-700">
            Transforming brands with innovative and captivating web solutions.
          </p>

          {/* <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-[#313719] text-white hover:bg-white hover:text-[#313719]
 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3.5 md:py-4 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-green-500/30 select-none"
          >
            Get in Touch
          </button> */}
          <NavLink
            to="/contact"
            className="inline-block px-8 py-4 bg-[#313719] text-white rounded-full hover:bg-white hover:text-[#313719] transition-colors"
          >
            Get in Touch
          </NavLink>

          <div className="flex items-center justify-center space-x-2 text-black mt-10">
            <Circle className="w-3 h-3 fill-green-500 text-green-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs md:text-sm font-medium">
              24 * 7 Support
            </span>
          </div>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative z-10 pb-12 sm:pb-16">
        <div
          ref={carouselRef}
          className="flex space-x-4 sm:space-x-6 overflow-hidden px-4 sm:px-6"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-xl overflow-hidden"
              style={{
                minWidth: "280px",
                height: "180px",
              }}
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
