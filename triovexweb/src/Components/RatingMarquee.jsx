"use client";
import React, { useRef, useEffect } from "react";
import { Star } from "lucide-react";
import l1 from "../assets/l1.svg";
import l2 from "../assets/l2.svg";
import l3 from "../assets/l3.svg";
import l4 from "../assets/l4.svg";
import l5 from "../assets/l5.svg";
import l6 from "../assets/l6.svg";

const Stars = () => (
  <div className="flex justify-center space-x-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
    ))}
  </div>
);

const RatingMarquee = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  const brands = [
    { name: "Lumina", image: l1 },
    { name: "Vortex", image: l2 },
    { name: "Velocity", image: l3 },
    { name: "Synergy", image: l4 },
    { name: "Enigma", image: l5 },
    { name: "Spectrum", image: l6 },
  ];

  const marqueeItems = [...brands, ...brands, ...brands, ...brands];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollLeft = 0;
    const speed = 0.5;
    const singleLoopWidth = slider.scrollWidth / 4;

    const animate = () => {
      scrollLeft += speed;
      if (scrollLeft >= singleLoopWidth) scrollLeft = 0;
      slider.scrollLeft = scrollLeft;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section className="py-10 sm:py-12 bg-white dark:bg-black transition-colors duration-300">
      {/* Stars */}
      <Stars />

      {/* Rating Text */}
      <p className="mt-3 text-center text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
        4.9/5 From 3,602 Customers
      </p>

      {/* Marquee */}
      <div className="mt-6 sm:mt-8 relative overflow-hidden">
        {/* Left and Right Fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 
          bg-gradient-to-r from-white via-white/80 to-transparent 
          dark:from-black dark:via-black/80 dark:to-transparent 
          z-10"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 
          bg-gradient-to-l from-white via-white/80 to-transparent 
          dark:from-black dark:via-black/80 dark:to-transparent 
          z-10"
        />

        {/* Scroll Track */}
        <div
          ref={sliderRef}
          className="flex items-center overflow-hidden select-none space-x-6 sm:space-x-10 px-4"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {marqueeItems.map(({ name, image }, idx) => (
            <div
              key={`${name}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={image}
                alt={`${name} Logo`}
                className="h-6 sm:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0 
             dark:brightness-0 dark:invert"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default RatingMarquee;
