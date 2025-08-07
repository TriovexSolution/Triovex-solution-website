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

    // Show loading toast
    const toastId = toast.loading(" Sending your message...");

    try {
      const response = await axios.post(`${baseURL}/api/contact/submit`, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
        privacy: formData.agreed,
      });

      // Update toast on success
      toast.update(toastId, {
        render: " Message sent successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });

      console.log("Server response:", response.data);

      // Reset the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        agreed: false,
      });
    } catch (error) {
      console.error("❌ Error submitting form:", error);

      // Update toast on error
      toast.update(toastId, {
        render: "❌ Something went wrong. Please try again later.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    }
  };

  return (
    <m.div
      className="min-h-screen bg-white px-4 py-12 flex flex-col items-center mt-5"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <button className="bg-gray-200 px-4 py-1 rounded-full text-sm mb-3">
        Get in Touch
      </button>
      <p className="text-center text-xs text-gray-700 mb-8 max-w-md my-2">
        Have questions, feedback, or need assistance? Our team is here to help
        you.
      </p>

      <div className="bg-[#FAFAFA] rounded-2xl p-6 w-full max-w-2xl shadow-sm">
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-800 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full bg-[#EAEEDC] text-sm px-4 py-3 rounded-full focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full bg-[#EAEEDC] text-sm px-4 py-3 rounded-full focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full bg-[#EAEEDC] text-sm px-4 py-3 rounded-full focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your Message"
              rows="5"
              className="w-full bg-[#EAEEDC] text-sm px-4 py-3 rounded-lg resize-none focus:outline-none"
            ></textarea>
          </div>

          {/* Privacy Checkbox */}
          <div className="flex items-start gap-2 text-sm text-gray-400">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="mt-1"
            />
            <p>
              By reaching out to us, you agree to our{" "}
              
              <Link to="/privacypolicy" className="font-semibold text-gray-800">Privacy Policy.</Link>
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full text-sm py-3 rounded-full transition-all duration-300 ${
              isFormValid
                ? "bg-[#2B2F18] text-white cursor-pointer"
                : "bg-[#2B2F18] text-white opacity-50 cursor-not-allowed"
            }`}
          >
            Send Messages
          </button>
        </form>
      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </m.div>
  );
};

export default ContactForm;
