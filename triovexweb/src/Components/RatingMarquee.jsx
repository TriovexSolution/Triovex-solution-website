"use client";
import React, { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";
import l1 from "../assets/l1.svg";
import l2 from "../assets/l2.svg";
import l3 from "../assets/l3.svg";
import l4 from "../assets/l4.svg";
import l5 from "../assets/l5.svg";
import l6 from "../assets/l6.svg";

const Stars = ({ isDark }) => (
  <div className="flex justify-center space-x-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className="w-4 h-4"
        style={{
          fill: isDark ? "#facc15" : "#facc15", // yellow in both themes
          stroke: isDark ? "#facc15" : "#facc15",
        }}
      />
    ))}
  </div>
);

const RatingMarquee = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  const [theme, setTheme] = useState("light");

  // detect current theme from html class
  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      setTheme(html.classList.contains("dark") ? "dark" : "light");
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    // initial
    setTheme(html.classList.contains("dark") ? "dark" : "light");

    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

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
    <section
      style={{
        backgroundColor: isDark ? "#000000" : "#ffffff",
        color: isDark ? "#e5e5e5" : "#111111",
        transition: "all 0.3s ease-in-out",
      }}
      className="py-10 sm:py-12"
    >
      {/* Stars */}
      <Stars isDark={isDark} />

      {/* Rating Text */}
      <p
        className="mt-3 text-center text-sm sm:text-base font-medium"
        style={{ color: isDark ? "#d1d5db" : "#374151" }}
      >
        4.9/5 From 3,602 Customers
      </p>

      {/* Marquee */}
      <div className="mt-6 sm:mt-8 relative overflow-hidden">
        {/* Left and Right Fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 z-10"
          style={{
            background: isDark
              ? "linear-gradient(to right, black, rgba(0,0,0,0.8), transparent)"
              : "linear-gradient(to right, white, rgba(255,255,255,0.8), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 z-10"
          style={{
            background: isDark
              ? "linear-gradient(to left, black, rgba(0,0,0,0.8), transparent)"
              : "linear-gradient(to left, white, rgba(255,255,255,0.8), transparent)",
          }}
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
                className="h-6 sm:h-8 w-auto object-contain transition duration-300"
                style={{
                  opacity: 0.7,
                  filter: isDark ? "invert(1) brightness(1.2)" : "none",
                }}
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
