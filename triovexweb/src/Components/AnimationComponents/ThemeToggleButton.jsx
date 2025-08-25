"use client";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../ThemeContext.jsx";
import { Moon, Sun } from "lucide-react";

const positions = {
  center: "50% 50%",
  "top-left": "0% 0%",
  "top-right": "100% 0%",
  "bottom-left": "0% 100%",
  "bottom-right": "100% 100%",
};

const ThemeToggleButton = ({
  showLabel = false,
  variant = "circle",
  start = "center",
}) => {
  const { theme, toggleTheme, isDark } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    toggleTheme();
    setTimeout(() => {
      window.location.reload();
    }, 1200);
  };

  return (
    <>
      {/* Button */}
      <div className="flex flex-col items-center gap-2">
        <motion.button
          onClick={handleClick}
          title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow-md"
          style={{
            backgroundColor: isDark ? "#1f2937" : "#e5e7eb",
            color: isDark ? "#f9fafb" : "#111827",
          }}
        >
          {/* Expand Animation */}
          {(variant === "circle" || variant === "circle-blur") && (
            <motion.span
              key={theme}
              initial={{
                scale: 0,
                opacity: 0.6,
                transformOrigin: positions[start],
              }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor: isDark ? "#000000" : "#ffffff",
                filter: variant === "circle-blur" ? "blur(6px)" : "none",
              }}
            />
          )}

          {/* 🌞 / 🌙 Professional Icons */}
          <motion.div
            key={theme + "-icon"}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" /> // Sun → Light mode
            ) : (
              <Moon className="w-5 h-5 text-blue-600" /> // Moon → Dark mode, better contrast
            )}
          </motion.div>
        </motion.button>

        {showLabel && (
          <span className="text-xs text-gray-500">
            {isDark ? "Light" : "Dark"}
          </span>
        )}
      </div>

      {/* Loader */}
      {/* {loading && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[2px] bg-black/30 z-50">
          <motion.svg
            className="w-14 h-14"
            viewBox="0 0 50 50"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
          >
            <defs>
              <linearGradient id="fadeStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#313719" stopOpacity="1" />
                <stop offset="100%" stopColor="#313719" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="url(#fadeStroke)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="100"
              strokeDashoffset="30" // ⬅️ full circle visible
            />
          </motion.svg>
        </div>
      )} */}
    </>
  );
};

export default ThemeToggleButton;
