import React, { useState } from "react";
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

    const browserDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const toastId = toast.loading("Sending your message...", {
      theme: browserDarkMode ? "dark" : "light",
    });

    try {
      const response = await axios.post(`${baseURL}/api/contact/submit`, {
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
        theme: browserDarkMode ? "dark" : "light",
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
        theme: browserDarkMode ? "dark" : "light",
      });
    }
  };

  return (
    <m.div
      className="min-h-screen bg-white dark:bg-black transition-colors duration-500 px-4 py-12 flex flex-col items-center pt-5"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <button className="bg-gray-200 dark:bg-gray-700 px-4 py-1 rounded-full text-sm mb-3 text-gray-800 dark:text-gray-200">
        Get in Touch
      </button>
      <p className="text-center text-xs text-gray-700 dark:text-gray-300 mb-8 max-w-md my-2">
        Have questions, feedback, or need assistance? Our team is here to help
        you.
      </p>

      <div className="bg-[#FAFAFA] dark:bg-gray-800 rounded-2xl p-6 w-full max-w-2xl shadow-sm transition-colors duration-500">
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full bg-[#EAEEDC] dark:bg-gray-700 text-black dark:text-white text-sm px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2B2F18] dark:focus:ring-[#BB86FC] transition-colors duration-300"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full bg-[#EAEEDC] dark:bg-gray-700 text-black dark:text-white text-sm px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2B2F18] dark:focus:ring-[#BB86FC] transition-colors duration-300"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full bg-[#EAEEDC] dark:bg-gray-700 text-black dark:text-white text-sm px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2B2F18] dark:focus:ring-[#BB86FC] transition-colors duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your Message"
              rows="5"
              className="w-full bg-[#EAEEDC] dark:bg-gray-700 text-black dark:text-white text-sm px-4 py-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#2B2F18] dark:focus:ring-[#BB86FC] transition-colors duration-300"
            ></textarea>
          </div>

          {/* Privacy Checkbox */}
          <div className="flex items-start gap-2 text-sm text-gray-400 dark:text-gray-300">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="mt-1"
            />
            <p className="text-gray-800 dark:text-gray-200">
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
                ? "bg-[#2B2F18] dark:bg-[#BB86FC] text-white cursor-pointer hover:bg-[#3a3f1c] dark:hover:bg-[#9a5de1]"
                : "bg-[#2B2F18] dark:bg-[#BB86FC] text-white opacity-50 cursor-not-allowed"
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
