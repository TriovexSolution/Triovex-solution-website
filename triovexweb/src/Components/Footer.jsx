import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import footerarrow from "../assets/footerarrow.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#2d3318] text-white relative">
      {/* Top Section */}
      <div className="mx-auto max-w-screen-2xl px-4 pt-14 pb-10">
        <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-6 text-sm">
          {/* Logo */}
          <div className="flex justify-center md:justify-start w-full sm:w-auto">
            <Link to="/" className="flex items-center pl-4">
              <img src={logo} alt="Triovex Solution" className="h-14" />
            </Link>
          </div>

          {/* Address */}
          <div className="text-center md:text-left space-y-2 leading-relaxed w-full sm:w-auto">
            <a
              href="https://www.google.com/maps/place/Shivalik+Shilp/@23.0270241,72.5063417,16z/data=!3m1!4b1!4m6!3m5!1s0x395e9b398e5880f1:0x32614b29d1226274!8m2!3d23.0270241!4d72.5063417!16s%2Fg%2F11dxchwdc9?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline my-2"
            >
              <p>1306, Shivalik shilp Iscon Cross</p>
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
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/support%40triovexsolution.com?compose=new"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline my-2"
            >
              support@triovexsolution.com
            </a>
          </div>

          {/* Navigation https://api.whatsapp.com/send/?phone=919978985611&text=Hello%21+I+would+like+to+discuss+a+project+with+Triovex+Solution.&type=phone_number&app_absent=0 */}
          <div className="text-center md:text-left  w-full sm:w-auto">
            <nav>
              <Link to="/about" className="block hover:underline my-1">
                About
              </Link>
              <Link to="/works" className="block hover:underline my-1">
                Works
              </Link>
              <Link to="/services" className="block hover:underline my-1">
                Services
              </Link>
              <Link to="/contact" className="block hover:underline my-1">
                Contact
              </Link>
              <Link to="/careers" className="block hover:underline my-1">
                Career
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left w-full sm:w-auto">
            <Link to="/facebook" className="block hover:underline my-1">
              Facebook
            </Link>
            <Link to="/twitter" className="block hover:underline my-1">
              Twitter
            </Link>
            <a
              href="https://www.linkedin.com/company/triovex-solution-private-limited"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline my-1"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/triovex.solution?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== "
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline my-1"
            >
              Instagram
            </a>
          </div>

          {/* Scroll Arrow */}
          <div className="flex justify-center  md:justify-start w-full pr-4 sm:w-auto">
            <img
              src={footerarrow}
              onClick={scrollToTop}
              alt="Scroll Arrow"
              className="w-12 h-12 cursor-pointer"
            />
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
