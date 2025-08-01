"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Works", to: "/works" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Careers", to: "/careers" },
    // { name: "Works", to: "/works" },
  ];

  const handleNavigate = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-transparent overflow-x-hidden">
      <nav className="flex justify-center py-4">
        <div className="w-full px-4 sm:px-6 md:px-0 max-w-[95%] md:max-w-[900px] mx-auto bg-white shadow-lg border border-gray-100 rounded-2xl md:rounded-full transition-all duration-300">
          <div className="flex items-center justify-between px-4 md:px-6 py-3">
            {/* Logo */}
            <NavLink to="/" onClick={handleNavigate}>
              <img
                src={logo}
                alt="logo"
                className="w-[118px] h-[46px]"
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
                      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        active
                          ? "font-semibold text-gray-900"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {name}
                      <span
                        className={`absolute inset-x-0 bottom-0 h-0.5 bg-gray-900 transform transition-transform duration-200 ${
                          active
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Contact */}
            <div className="hidden md:flex">
              <Link
                to="/contact"
                onClick={handleNavigate}
                className="bg-[#2f3c1e] hover:bg-[#243016] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-transform transform hover:scale-105"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden px-4 pb-6 transition-all duration-300">
              <ul className="space-y-3 pt-3">
                {navItems.map(({ name, to }) => (
                  <li key={name}>
                    <Link
                      to={to}
                      onClick={handleNavigate}
                      className="block w-full py-2 text-base font-medium text-gray-600 hover:text-gray-900"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    to="/contact"
                    onClick={handleNavigate}
                    className="block w-full text-center bg-[#2f3c1e] hover:bg-[#243016] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
