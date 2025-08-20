"use client";
import React, { useState, useContext } from "react";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo2.png";
import darkmodelogo from "../assets/darkmodelogo.png";
import { ThemeContext } from "./ThemeContext.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, resolvedTheme, toggleTheme, isDark, isSystem } = useContext(ThemeContext);
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Works", to: "/works" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Careers", to: "/careers" },
  ];

  const handleNavigate = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to get the appropriate icon based on current theme
  const getThemeIcon = () => {
    if (theme === 'system') {
      return <Monitor className="w-5 h-5" />;
    }
    return theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />;
  };

  // Function to get theme label for tooltip
  const getThemeLabel = () => {
    if (theme === 'system') {
      return `System (${resolvedTheme})`;
    }
    return theme === 'dark' ? 'Dark' : 'Light';
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-transparent overflow-x-hidden">
      <nav className="flex justify-center py-4">
        <div className="w-full px-4 sm:px-6 md:px-0 max-w-[95%] md:max-w-[900px] mx-auto">
          <div
            className={`rounded-full transition-all duration-300
              ${isMenuOpen ? "border-0 shadow-none" : "border shadow-lg"}
              bg-white dark:bg-black 
              border-gray-100 dark:border-gray-800
              md:border md:shadow-lg`}
          >
            <div className="flex items-center justify-between px-4 md:px-6 py-3">
              {/* Logo */}
              <NavLink to="/" onClick={handleNavigate}>
                <img 
                  src={logo} 
                  alt="logo" 
                  className="w-[118px] h-[46px] block dark:hidden" 
                />
                <img
                  src={darkmodelogo}
                  alt="logo dark"
                  className="w-[118px] h-[46px] hidden dark:block"
                />
              </NavLink>

              {/* Desktop Nav */}
              <ul className="hidden md:flex items-center space-x-5">
                {navItems.map(({ name, to }) => {
                  const active = location.pathname === to;
                  return (
                    <li key={name}>
                      <Link
                        to={to}
                        onClick={handleNavigate}
                        className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200
                          ${
                            active
                              ? "font-semibold text-gray-900 dark:text-[#22c55e]"
                              : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                          }`}
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Desktop Contact + Theme Button */}
              <div className="hidden md:flex items-center space-x-3">
                <button
                  onClick={toggleTheme}
                  title={`Theme: ${getThemeLabel()} - Click to cycle`}
                  className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-200 hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  <motion.div
                    key={theme}
                    initial={{ scale: 0.8, opacity: 0, rotate: -180 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {getThemeIcon()}
                  </motion.div>
                </button>
                
                <Link
                  to="/contact"
                  onClick={handleNavigate}
                  className="bg-[#2f3c1e] hover:bg-[#243016] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-transform transform hover:scale-105"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden mt-2 bg-white dark:bg-black shadow-lg rounded-2xl px-4 pb-6 overflow-hidden"
              >
                <ul className="space-y-3 pt-3">
                  {navItems.map(({ name, to }) => {
                    const active = location.pathname === to;
                    return (
                      <li key={name}>
                        <Link
                          to={to}
                          onClick={handleNavigate}
                          className={`block w-full py-2 text-base font-medium transition-colors duration-200
                            ${
                              active
                                ? "text-gray-900 dark:text-[#22c55e]"
                                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                            }`}
                        >
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="pt-2">
                    <Link
                      to="/contact"
                      onClick={handleNavigate}
                      className="block w-full text-center bg-[#2f3c1e] hover:bg-[#243016] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                    >
                      Contact
                    </Link>
                  </li>

                  {/* Mobile Theme Toggle */}
                  <li className="pt-2 flex justify-center">
                    <button
                      onClick={toggleTheme}
                      title={`Theme: ${getThemeLabel()} - Tap to cycle`}
                      className="relative p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-200 hover:scale-105"
                    >
                      <motion.div
                        key={theme}
                        initial={{ scale: 0.8, opacity: 0, rotate: -180 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {getThemeIcon()}
                      </motion.div>
                    </button>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;