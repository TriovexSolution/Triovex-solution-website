import React, { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const baseURL = import.meta.env.VITE_BASE_URL;

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ContactForm = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    // Detect theme change dynamically
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreed: false,
  });

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.message &&
    formData.agreed;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const toastId = toast.loading("Sending your message...", {
      theme: isDarkMode ? "dark" : "light",
    });

    try {
      await axios.post(`${baseURL}/api/contact/submit`, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
        privacy: formData.agreed,
      });

      toast.update(toastId, {
        render: "Message sent successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
        theme: isDarkMode ? "dark" : "light",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        agreed: false,
      });
    } catch (error) {
      console.error(error);
      toast.update(toastId, {
        render: "❌ Something went wrong. Please try again later.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
        theme: isDarkMode ? "dark" : "light",
      });
    }
  };

  // Inline background for whole section
  const sectionStyle = {
    backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
    transition: "background-color 0.5s ease",
  };

  // Inline style for "Get in Touch" button
  const getInTouchButtonStyle = {
    backgroundColor: isDarkMode ? "#374151" : "#E5E7EB", // dark gray vs light gray
    color: isDarkMode ? "#E5E7EB" : "#374151", // light text vs dark text
    padding: "6px 16px",
    borderRadius: "9999px",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "12px",
    transition: "all 0.3s ease",
  };

  return (
    <m.div
      style={sectionStyle}
      className="min-h-screen transition-colors duration-500 px-4 py-12 flex flex-col items-center pt-5"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Get in Touch button with inline style */}
      <button style={getInTouchButtonStyle}>Get in Touch</button>

      <p
        className={`text-center text-xs mb-8 max-w-md my-2 ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Have questions, feedback, or need assistance? Our team is here to help
        you.
      </p>

      <div
        className={`rounded-2xl p-6 w-full max-w-2xl shadow-sm transition-colors duration-500 ${
          isDarkMode ? "bg-gray-800" : "bg-[#FAFAFA]"
        }`}
      >
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label
                className={`block text-sm font-medium mb-1 ${
                  isDarkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className={`w-full text-sm px-4 py-3 rounded-full focus:outline-none focus:ring-2 transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 text-white focus:ring-[#BB86FC]"
                    : "bg-[#EAEEDC] text-black focus:ring-[#2B2F18]"
                }`}
              />
            </div>
            <div className="flex-1">
              <label
                className={`block text-sm font-medium mb-1 ${
                  isDarkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className={`w-full text-sm px-4 py-3 rounded-full focus:outline-none focus:ring-2 transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 text-white focus:ring-[#BB86FC]"
                    : "bg-[#EAEEDC] text-black focus:ring-[#2B2F18]"
                }`}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className={`w-full text-sm px-4 py-3 rounded-full focus:outline-none focus:ring-2 transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-700 text-white focus:ring-[#BB86FC]"
                  : "bg-[#EAEEDC] text-black focus:ring-[#2B2F18]"
              }`}
            />
          </div>

          {/* Message */}
          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your Message"
              rows="5"
              className={`w-full text-sm px-4 py-3 rounded-lg resize-none focus:outline-none focus:ring-2 transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-700 text-white focus:ring-[#BB86FC]"
                  : "bg-[#EAEEDC] text-black focus:ring-[#2B2F18]"
              }`}
            ></textarea>
          </div>

          {/* Privacy Checkbox */}
          <div className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="mt-1"
            />
            <p className={isDarkMode ? "text-gray-200" : "text-gray-800"}>
              By reaching out to us, you agree to our{" "}
              <Link to="/privacypolicy" className="font-semibold underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full text-sm py-3 rounded-full transition-all duration-300 ${
              isFormValid
                ? "bg-[#2B2F18] text-white cursor-pointer hover:bg-[#3a3f1c]"
                : "bg-[#2B2F18] text-white opacity-50 cursor-not-allowed"
            }`}
          >
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </m.div>
  );
};

export default ContactForm;
