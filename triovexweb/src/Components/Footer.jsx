import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import footerarrow from "../assets/footerarrow.png";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect browser dark mode
  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeQuery.addEventListener("change", handleChange);
    return () => darkModeQuery.removeEventListener("change", handleChange);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className={`relative overflow-x-hidden dark:border-t dark:border-gray-600 transition-colors duration-500 ${
        isDarkMode ? "bg-black text-white" : "bg-[#2d3318] text-white"
      }`}
    >
      {/* Top Section */}
      <div className="mx-auto max-w-screen-2xl px-4 pt-14 pb-10 overflow-x-hidden">
        <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-6 text-sm">
          {/* Logo */}
          <div className="flex justify-center md:justify-start w-full sm:w-auto">
            <Link to="/" className="flex items-center px-2 sm:pl-4">
              <img src={logo} alt="Triovex Solution" className="h-14" />
            </Link>
          </div>

          {/* Address */}
          <div
            className={`text-center md:text-left space-y-2 leading-relaxed w-full sm:w-auto ${
              isDarkMode ? "text-gray-300" : "text-white"
            }`}
          >
            <a
              href="https://www.google.com/maps/place/Shivalik+Shilp/@23.0270241,72.5063417,16z/data=!3m1!4b1!4m6!3m5!1s0x395e9b398e5880f1:0x32614b29d1226274!8m2!3d23.0270241!4d72.5063417!16s%2Fg%2F11dxchwdc9?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline my-2"
            >
              <p>1306, Shivalik Shilp Iskcon Cross</p>
              <p>Ahmedabad, Gujarat India</p>
            </a>
            <a
              href="https://wa.me/+919978985611"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline my-2"
            >
              +91 99789 85611
            </a>

            <a
              href="mailto:support@triovexsolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline my-2"
            >
              support@triovexsolution.com
            </a>
          </div>

          {/* Navigation + Social in Grid */}
          <div className="grid grid-cols-2 gap-6 w-full sm:w-auto text-center md:text-left">
            {/* Navigation */}
            <div className="flex flex-col items-start space-y-1 pl-4">
              <Link to="/about" className="hover:underline">
                About
              </Link>
              <Link to="/works" className="hover:underline">
                Works
              </Link>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
              <Link to="/careers" className="hover:underline">
                Career
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex flex-col space-y-1">
              <a
                href="https://www.linkedin.com/company/triovex-solution-private-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/triovex.solution"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Scroll Arrow */}
          <div className="flex justify-center md:justify-start w-full sm:w-auto relative">
            <div
              onClick={scrollToTop}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg cursor-pointer absolute -top-6 left-1/2 transform -translate-x-1/2 md:static md:transform-none"
            >
              <img src={footerarrow} alt="Scroll Arrow" className="w-12 h-12" />
            </div>
          </div>
        </div>

        {/* Divider and Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center text-xs text-center space-y-4 md:space-y-0">
            <p>© 2025 Triovex Solution. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacypolicy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link to="/termsandconditions" className="hover:underline">
                Terms &amp; Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
