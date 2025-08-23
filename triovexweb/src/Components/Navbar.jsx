import React, { useState, useContext } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo2.png";
import darkmodelogo from "../assets/darkmodelogo.png";
import { ThemeContext } from "./ThemeContext.jsx";
import ThemeToggleButton from "../Components/AnimationComponents/ThemeToggleButton.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useContext(ThemeContext);

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

  return (
    <header
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 50,
        // backgroundColor: isDark ? "#000000" : "#ffffff",
        color: isDark ? "#ffffff" : "#000000",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <nav className="flex justify-center py-4">
        <div className="w-full px-4 sm:px-6 md:px-0 max-w-[95%] md:max-w-[900px] mx-auto">
          <div
            style={{
              borderRadius: "9999px",
              transition: "all 0.3s ease-in-out",
              border: isMenuOpen
                ? "0px"
                : `1px solid ${isDark ? "#1f2937" : "#e5e7eb"}`,
              boxShadow: isMenuOpen ? "none" : "0 4px 10px rgba(0,0,0,0.1)",
              backgroundColor: isDark ? "#000000" : "#ffffff",
            }}
          >
            <div className="flex items-center justify-between px-4 md:px-6 py-3">
              {/* ✅ Logo Switch Based on Theme */}
              <NavLink to="/" onClick={handleNavigate}>
                <img
                  src={isDark ? darkmodelogo : logo}
                  alt="logo"
                  style={{ width: "118px", height: "46px" }}
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
                        style={{
                          position: "relative",
                          padding: "6px 12px",
                          fontSize: "14px",
                          fontWeight: active ? "600" : "500",
                          color: active
                            ? isDark
                              ? "#22c55e"
                              : "#111111"
                            : isDark
                            ? "#d1d5db"
                            : "#4b5563",
                          transition: "color 0.2s ease-in-out",
                        }}
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Desktop Contact + Theme Button */}
              <div className="hidden md:flex items-center space-x-3">
                {/* ✅ Theme Toggle */}
                <ThemeToggleButton
                  isDark={isDark}
                  toggleTheme={toggleTheme}
                  theme={theme}
                  start="center"
                />

                {/* ✅ Contact Button */}
                <Link
                  to="/contact"
                  onClick={handleNavigate}
                  style={{
                    backgroundColor: "#2f3c1e",
                    color: "#ffffff",
                    padding: "10px 24px",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    fontWeight: 500,
                    transition: "all 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#243016")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#2f3c1e")
                  }
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                className="md:hidden focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{
                  padding: "8px",
                  color: isDark ? "#d1d5db" : "#4b5563",
                }}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
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
                style={{
                  marginTop: "8px",
                  backgroundColor: isDark ? "#000000" : "#ffffff",
                  borderRadius: "16px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  padding: "0 16px 24px",
                  overflow: "hidden",
                }}
              >
                <ul style={{ paddingTop: "12px", listStyle: "none" }}>
                  {navItems.map(({ name, to }) => {
                    const active = location.pathname === to;
                    return (
                      <li key={name} style={{ marginBottom: "12px" }}>
                        <Link
                          to={to}
                          onClick={handleNavigate}
                          style={{
                            display: "block",
                            width: "100%",
                            padding: "8px 0",
                            fontSize: "16px",
                            fontWeight: active ? "600" : "500",
                            color: active
                              ? isDark
                                ? "#22c55e"
                                : "#111111"
                              : isDark
                              ? "#d1d5db"
                              : "#4b5563",
                          }}
                        >
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                  {/* Contact Button */}
                  <li style={{ paddingTop: "8px" }}>
                    <Link
                      to="/contact"
                      onClick={handleNavigate}
                      style={{
                        display: "block",
                        width: "100%",
                        textAlign: "center",
                        backgroundColor: "#2f3c1e",
                        color: "#ffffff",
                        padding: "10px 24px",
                        borderRadius: "9999px",
                        fontSize: "14px",
                        fontWeight: 500,
                        transition: "all 0.2s ease-in-out",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#243016")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#2f3c1e")
                      }
                    >
                      Contact
                    </Link>
                  </li>

                  {/* ✅ Mobile Theme Toggle */}
                  <li>
                    <div className="flex justify-center mt-4">
                      <ThemeToggleButton
                        isDark={isDark}
                        toggleTheme={toggleTheme}
                        theme={theme}
                        showLabel={true}
                        start="center"
                      />
                    </div>
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
