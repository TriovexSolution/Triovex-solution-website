import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nihar from "../assets/nihar.jpg";
import { HiPhone } from "react-icons/hi";

const baseURL = import.meta.env.VITE_BASE_URL;

const ConsultationForm = () => {
  const services = [
    "AI Automation & Agentic AI Solutions",
    "Artificial Intelligence (AI) Development",
    "Machine Learning (ML) Solutions",
    "Deep Learning Applications",
    "Computer Vision Solutions",
    "Natural Language Processing (NLP) Services",
    "AI-Powered Chatbots & Virtual Assistants",
    "Data Analytics & Predictive Modeling",
    "Cloud Computing & Migration Services",
    "Cybersecurity & IT Infrastructure Management",
    "Web Development Services",
    "Mobile App Development",
    "IT Consulting & Strategy",
    "Digital Marketing & Brand Growth",
    "Other (please specify)",
  ];

  const methods = ["Phone", "Email", "Google Meet"];
  const optionHeight = 40;
  const defaultIndex = -1;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredMethod: "",
    preferredDate: "",
    preferredTime: "",
    serviceInterest: "",
    projectDetails: "",
    agreement: false,
    otherService: "",
  });

  const [methodDropdownOpen, setMethodDropdownOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [highlightedMethodIndex, setHighlightedMethodIndex] =
    useState(defaultIndex);
  const [highlightedServiceIndex, setHighlightedServiceIndex] =
    useState(defaultIndex);

  const methodRef = useRef(null);
  const serviceRef = useRef(null);

  const isFormValid =
    formData.fullName &&
    formData.email &&
    formData.preferredDate &&
    formData.preferredTime &&
    formData.serviceInterest &&
    formData.projectDetails &&
    formData.agreement &&
    (formData.serviceInterest !== "Other (please specify)" ||
      formData.otherService);

  // Detect dark mode dynamically
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() =>
      setIsDark(html.classList.contains("dark"))
    );
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const scrollToIndex = (ref, index) => {
    if (!ref.current) return;
    ref.current.scrollTo({
      top: index * optionHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (serviceDropdownOpen && highlightedServiceIndex >= 0) {
      scrollToIndex(serviceRef, highlightedServiceIndex);
    }
  }, [serviceDropdownOpen, highlightedServiceIndex]);

  useEffect(() => {
    if (methodDropdownOpen && highlightedMethodIndex >= 0) {
      scrollToIndex(methodRef, highlightedMethodIndex);
    }
  }, [methodDropdownOpen, highlightedMethodIndex]);

  const handleServiceSelect = (service, idx) => {
    setFormData((prev) => ({ ...prev, serviceInterest: service }));
    setHighlightedServiceIndex(idx);
    setServiceDropdownOpen(false);
  };

  const handleMethodSelect = (method, idx) => {
    setFormData((prev) => ({ ...prev, preferredMethod: method }));
    setHighlightedMethodIndex(idx);
    setMethodDropdownOpen(false);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!isFormValid) return;

  // Use the current theme dynamically
  const currentTheme = isDark ? "dark" : "light";

  const toastId = toast.loading("Submitting your consultation request...", {
    theme: currentTheme,
    style: {
      background: isDark ? "#1F2937" : "#fff",
      color: isDark ? "#fff" : "#000",
    },
    progressStyle: {
      background: isDark ? "#BB86FC" : "#313719",
    },
  });

  try {
    await axios.post(`${baseURL}/api/consultant/submit`, formData);

    toast.update(toastId, {
      render: "Consultation request sent successfully!",
      type: "success",
      isLoading: false,
      autoClose: 3000,
      closeOnClick: true,
      theme: currentTheme,
      style: {
        background: isDark ? "#1F2937" : "#fff",
        color: isDark ? "#fff" : "#000",
      },
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      preferredMethod: "",
      preferredDate: "",
      preferredTime: "",
      serviceInterest: "",
      projectDetails: "",
      agreement: false,
      otherService: "",
    });
    setServiceDropdownOpen(false);
    setMethodDropdownOpen(false);
    setHighlightedMethodIndex(defaultIndex);
    setHighlightedServiceIndex(defaultIndex);
  } catch (error) {
    console.error(error);
    toast.update(toastId, {
      render: "Something went wrong. Please try again later.",
      type: "error",
      isLoading: false,
      autoClose: 3000,
      closeOnClick: true,
      theme: currentTheme,
      style: {
        background: isDark ? "#1F2937" : "#fff",
        color: isDark ? "#fff" : "#000",
      },
    });
  }
};

  // Inline theme styles
  const containerStyle = {
    backgroundColor: isDark ? "#000000" : "#ffffff",
    color: isDark ? "#e5e5e5" : "#111111",
    transition: "all 0.3s ease-in-out",
  };

  const cardStyle = {
    backgroundColor: isDark ? "#1F2937" : "#FAFAFA",
    color: isDark ? "#e5e5e5" : "#111111",
    transition: "all 0.3s ease-in-out",
  };

  const inputStyle = {
    backgroundColor: isDark ? "#374151" : "#EAEEDC",
    color: isDark ? "#fff" : "#000",
  };

  const buttonStyle = {
    backgroundColor: "#2B2F18",
    color: "#fff",
  };

  return (
    <div
      className="min-h-screen px-4 py-12 flex flex-col items-center pt-5 transition-colors duration-500"
      style={containerStyle}
      id="Consultation"
    >
      {/* Header */}
      <button
        className="px-5 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm transition-colors duration-300"
        style={{
          backgroundColor: isDark ? "rgba(6,95,70,0.4)" : "#EAEEDC",
          color: isDark ? "#6ee7b7" : "#313719",
        }}
      >
        Schedule a Consultation
      </button>
      <p
        className="text-center text-sm mb-8 max-w-md transition-colors duration-300"
        style={{ color: isDark ? "#d1d5db" : "#4b5563" }}
      >
        Ready to transform your business with cutting-edge AI, cloud, and
        digital solutions? Fill out the form and our expert team will connect
        with you to craft a strategy tailored to your goals fast, reliable, and
        built for success.
      </p>

      {/* Form & Image Card */}
      <div
        className="rounded-3xl p-8 w-full max-w-5xl shadow-md flex flex-col md:flex-row gap-10 transition-colors duration-300"
        style={cardStyle}
      >
        {/* Form Section */}
        <form className="space-y-6 flex-1" onSubmit={handleSubmit} noValidate>
          {/* All input fields, dropdowns, checkboxes, textarea */}
          {/* Full Name */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              style={{ color: isDark ? "#e5e5e5" : "#111827" }}
            >
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your Full Name"
              style={inputStyle}
              className="w-full text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 transition-colors duration-300"
              required
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: isDark ? "#e5e5e5" : "#111827" }}
              >
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                style={inputStyle}
                className="w-full text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: isDark ? "#e5e5e5" : "#111827" }}
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                style={inputStyle}
                className="w-full text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 transition-colors duration-300"
              />
            </div>
          </div>

          {/* Preferred Method */}
          <div className="relative">
            <label
              style={{ color: isDark ? "#e5e5e5" : "#111827" }}
              className="block text-sm font-medium mb-1"
            >
              Preferred Method
            </label>
            <div
              onClick={() => setMethodDropdownOpen((prev) => !prev)}
              style={{
                backgroundColor: isDark ? "#374151" : "#EAEEDC",
                color: isDark ? "#fff" : "#000",
              }}
              className="cursor-pointer w-full text-sm px-5 py-3 rounded-full flex items-center justify-between transition-colors duration-300"
            >
              <span>{formData.preferredMethod || "Select a method"}</span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  methodDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {methodDropdownOpen && (
              <ul
                ref={methodRef}
                style={{ backgroundColor: isDark ? "#374151" : "#EAEEDC" }}
                className="absolute z-10 mt-1 w-full h-[120px] overflow-y-scroll overflow-x-hidden rounded-xl shadow-lg transition-colors duration-300"
              >
                {methods.map((method, idx) => (
                  <motion.li
                    key={method}
                    onClick={() => handleMethodSelect(method, idx)}
                    style={{
                      height: `${optionHeight}px`,
                      fontWeight:
                        method === formData.preferredMethod ? "bold" : "normal",
                      color:
                        method === formData.preferredMethod
                          ? isDark
                            ? "#fff"
                            : "#313719"
                          : isDark
                          ? "#fff"
                          : "#111827",
                    }}
                    className="select-none px-5 py-2 text-sm cursor-pointer transition-colors duration-300"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(49,55,25,0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {method}
                  </motion.li>
                ))}
              </ul>
            )}
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                style={{ color: isDark ? "#e5e5e5" : "#111827" }}
                className="block text-sm font-medium mb-1"
              >
                Preferred Date <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                style={{
                  backgroundColor: isDark ? "#374151" : "#EAEEDC",
                  color: isDark ? "#fff" : "#000",
                }}
                className="w-full text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label
                style={{ color: isDark ? "#e5e5e5" : "#111827" }}
                className="block text-sm font-medium mb-1"
              >
                Preferred Time <span className="text-red-600">*</span>
              </label>
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                step="60"
                style={{
                  backgroundColor: isDark ? "#374151" : "#EAEEDC",
                  color: isDark ? "#fff" : "#000",
                }}
                className="w-full text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 transition-colors duration-300"
                required
              />
            </div>
          </div>

          {/* Service Interest */}
          <div className="relative">
            <label
              style={{ color: isDark ? "#e5e5e5" : "#111827" }}
              className="block text-sm font-medium mb-1"
            >
              Service Interest <span className="text-red-600">*</span>
            </label>
            <div
              onClick={() => setServiceDropdownOpen((prev) => !prev)}
              style={{
                backgroundColor: isDark ? "#374151" : "#EAEEDC",
                color: isDark ? "#fff" : "#000",
              }}
              className="cursor-pointer w-full text-sm px-5 py-3 rounded-full flex items-center justify-between transition-colors duration-300"
            >
              <span>{formData.serviceInterest || "Select a service"}</span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  serviceDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {serviceDropdownOpen && (
              <ul
                ref={serviceRef}
                style={{ backgroundColor: isDark ? "#374151" : "#EAEEDC" }}
                className="absolute z-10 mt-1 w-full h-[120px] overflow-y-scroll overflow-x-hidden rounded-xl shadow-lg transition-colors duration-300"
              >
                {services.map((service, idx) => (
                  <motion.li
                    key={service}
                    onClick={() => handleServiceSelect(service, idx)}
                    style={{
                      height: `${optionHeight}px`,
                      fontWeight:
                        service === formData.serviceInterest
                          ? "bold"
                          : "normal",
                      color:
                        service === formData.serviceInterest
                          ? isDark
                            ? "#fff"
                            : "#313719"
                          : isDark
                          ? "#fff"
                          : "#111827",
                    }}
                    className="select-none px-5 py-2 text-sm cursor-pointer transition-colors duration-300"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(49,55,25,0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            )}

            {formData.serviceInterest === "Other (please specify)" && (
              <input
                type="text"
                name="otherService"
                placeholder="Please specify"
                value={formData.otherService}
                onChange={handleChange}
                style={{
                  backgroundColor: isDark ? "#374151" : "#EAEEDC",
                  color: isDark ? "#fff" : "#000",
                }}
                className="mt-3 w-full text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 transition-colors duration-300"
                required
              />
            )}
          </div>

          {/* Project Details */}
          <div>
            <label
              style={{ color: isDark ? "#e5e5e5" : "#111827" }}
              className="block text-sm font-medium mb-1"
            >
              Project Details <span className="text-red-600">*</span>
            </label>
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              rows={3}
              placeholder="Enter Project Details"
              style={{
                backgroundColor: isDark ? "#374151" : "#EAEEDC",
                color: isDark ? "#fff" : "#000",
              }}
              className="w-full text-sm px-5 py-3 rounded-2xl focus:outline-none focus:ring-2 transition-colors duration-300"
              required
            />
          </div>

          {/* Agreement */}
          <div
            className="flex items-start gap-2 text-sm"
            style={{ color: isDark ? "#d1d5db" : "#4b5563" }}
          >
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <label htmlFor="agreement" className="max-w-xs">
              I agree to the{" "}
              <a
                href="/privacypolicy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: isDark ? "#fff" : "#313719" }}
                className="font-semibold hover:underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/termsandconditions"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: isDark ? "#fff" : "#313719" }}
                className="font-semibold hover:underline"
              >
                Terms of Service
              </a>
              .
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            style={{
              backgroundColor: "#2B2F18",
              color: "#fff",
              opacity: isFormValid ? 1 : 0.5,
              cursor: isFormValid ? "pointer" : "not-allowed",
            }}
            className="w-full text-sm py-3 rounded-full font-semibold transition-all duration-300 hover:brightness-110"
          >
            Get In Touch With Us
          </button>
        </form>

        {/* Right Section Image & Contact */}
        <div
          className="flex flex-col items-center justify-center text-center max-w-xs mx-auto md:mx-0 transition-colors duration-300"
          style={{ color: isDark ? "#e5e5e5" : "#4b5563" }}
        >
          <img
            src={nihar}
            alt="Mr.Nihar Gami"
            className="w-auto rounded-xl object-cover mb-3 max-h-[600px]"
          />
          <h3
            style={{ color: isDark ? "#fff" : "#313719" }}
            className="font-semibold mb-2"
          >
            Mr. Nihar Gami
          </h3>
          <p className="text-sm mb-4 max-w-xs">{`Helping businesses design the right tech strategy and develop high-performance digital solutions.`}</p>
          <button
            onClick={() => window.open("tel:+919978985611")}
            className="font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors duration-300"
            style={{
              backgroundColor: isDark ? "#374151" : "#EAEEDC",
              color: isDark ? "#fff" : "#313719",
            }}
          >
            <HiPhone className="h-5 w-5" />
            CALL US NOW
          </button>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default ConsultationForm;
