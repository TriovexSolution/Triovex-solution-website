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

    const browserDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const toastId = toast.loading("Submitting your consultation request...", {
      theme: browserDarkMode ? "dark" : "light",
      style: {
        background: browserDarkMode ? "#1F2937" : "#fff", // dark bg
        color: browserDarkMode ? "#fff" : "#000", // text color
      },
      progressStyle: {
        background: browserDarkMode ? "#BB86FC" : "#313719", // loading bar color
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
        theme: browserDarkMode ? "dark" : "light",
        style: {
          background: browserDarkMode ? "#1F2937" : "#fff",
          color: browserDarkMode ? "#fff" : "#000",
        },
      });

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
      console.error("Error submitting form:", error);
      toast.update(toastId, {
        render: "Something went wrong. Please try again later.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
        theme: browserDarkMode ? "dark" : "light",
        style: {
          background: browserDarkMode ? "#1F2937" : "#fff",
          color: browserDarkMode ? "#fff" : "#000",
        },
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-white dark:bg-black px-4 py-12 flex flex-col items-center pt-5 transition-colors duration-500"
      id="Consultation"
    >
      <button className="bg-[#EAEEDC]  text-[#313719] dark:bg-emerald-900/40 dark:text-emerald-300 px-5 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm transition-colors duration-300">
        Schedule a Consultation
      </button>
      <p className="text-center text-sm text-gray-700 dark:text-gray-300 mb-8 max-w-md transition-colors duration-300">
        Ready to transform your business with cutting-edge AI, cloud, and
        digital solutions? Fill out the form and our expert team will connect
        with you to craft a strategy tailored to your goals fast, reliable, and
        built for success.
      </p>

      <div className="bg-[#FAFAFA] dark:bg-gray-800 rounded-3xl p-8 w-full max-w-5xl shadow-md flex flex-col md:flex-row gap-10 transition-colors duration-300">
        {/* Left Section */}
        <form className="space-y-6 flex-1" onSubmit={handleSubmit} noValidate>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your Full Name"
              className="w-full bg-[#EAEEDC] dark:bg-gray-700 text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#313719] dark:focus:ring-[#BB86FC] text-black dark:text-white transition-colors duration-300"
              required
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full bg-[#EAEEDC] dark:bg-gray-700 text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#313719] dark:focus:ring-[#BB86FC] text-black dark:text-white transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full bg-[#EAEEDC] dark:bg-gray-700 text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#313719] dark:focus:ring-[#BB86FC] text-black dark:text-white transition-colors duration-300"
              />
            </div>
          </div>

          {/* Preferred Method */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
              Preferred Method
            </label>
            <div
              onClick={() => setMethodDropdownOpen((prev) => !prev)}
              className="cursor-pointer w-full bg-[#EAEEDC] dark:bg-gray-700 text-sm px-5 py-3 rounded-full flex items-center justify-between transition-colors duration-300 text-black dark:text-white"
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
                className="absolute z-10 mt-1 w-full h-[120px] overflow-y-scroll overflow-x-hidden rounded-xl bg-[#EAEEDC] dark:bg-gray-700 shadow-lg transition-colors duration-300"
              >
                {methods.map((method, idx) => (
                  <motion.li
                    key={method}
                    onClick={() => handleMethodSelect(method, idx)}
                    style={{
                      height: `${optionHeight}px`,
                      fontWeight:
                        method === formData.preferredMethod ? "bold" : "normal",
                    }}
                    className={`select-none px-5 py-2 text-sm cursor-pointer transition-colors duration-300
  ${
    method === formData.preferredMethod
      ? "text-[#313719] dark:text-white"
      : "text-gray-800 dark:text-white"
  }
`}
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
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Preferred Date <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full bg-[#EAEEDC] dark:bg-gray-700 text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#313719] dark:focus:ring-[#BB86FC] text-black dark:text-white transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Preferred Time <span className="text-red-600">*</span>
              </label>
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full bg-[#EAEEDC] dark:bg-gray-700 text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#313719] dark:focus:ring-[#BB86FC] text-black dark:text-white transition-colors duration-300"
                required
              />
            </div>
          </div>

          {/* Service Interest */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
              Service Interest <span className="text-red-600">*</span>
            </label>
            <div
              onClick={() => setServiceDropdownOpen((open) => !open)}
              className="cursor-pointer w-full bg-[#EAEEDC] dark:bg-gray-700 text-sm px-5 py-3 rounded-full flex items-center justify-between transition-colors duration-300 text-black dark:text-white"
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
                className="absolute z-10 mt-1 w-full h-[120px] overflow-y-scroll overflow-x-hidden rounded-xl bg-[#EAEEDC] dark:bg-gray-700 shadow-lg transition-colors duration-300"
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
                    }}
                    className={`select-none px-5 py-2 text-sm cursor-pointer transition-colors duration-300
  ${
    service === formData.serviceInterest
      ? "text-[#313719] dark:text-white"
      : "text-gray-800 dark:text-white"
  }
`}
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
                className="mt-3 w-full bg-[#EAEEDC] dark:bg-gray-700 text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#313719] dark:focus:ring-[#BB86FC] text-black dark:text-white transition-colors duration-300"
                required
              />
            )}
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
              Project Details <span className="text-red-600">*</span>
            </label>
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              rows={3}
              className="w-full bg-[#EAEEDC] dark:bg-gray-700 text-sm px-5 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#313719] dark:focus:ring-[#BB86FC] text-black dark:text-white transition-colors duration-300"
              required
              placeholder="Enter Project Details"
            />
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
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
                className="font-semibold text-[#313719] dark:text-white hover:text-[#253013] dark:hover:text-gray-300"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/termsandconditions"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#313719] dark:text-white hover:text-[#253013] dark:hover:text-gray-300"
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
            className={`w-full text-sm py-3 rounded-full font-semibold transition-all duration-300 ${
              isFormValid
                ? "bg-[#EAEEDC] text-black hover:bg-[#313719] hover:text-white"
                : "bg-[#EAEEDC] text-black opacity-50 cursor-not-allowed"
            }`}
          >
            Get In Touch With Us
          </button>
        </form>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center text-center text-gray-700 dark:text-gray-300 max-w-xs mx-auto md:mx-0 transition-colors duration-300">
          <img
            src={nihar}
            alt="Mr.Nihar Gami"
            className="w-auto rounded-xl object-cover mb-3 max-h-[600px]"
          />
          <h3 className="font-semibold text-[#313719] dark:text-white mb-2">
            Mr. Nihar Gami
          </h3>
          <p className="text-sm mb-4 max-w-xs">
            Helping businesses design the right tech strategy and develop
            high-performance digital solutions.
          </p>
          <button
            onClick={() => window.open("tel:+919978985611")}
            className="bg-[#EAEEDC] dark:bg-gray-700 text-dark dark:text-white font-semibold px-6 py-3  rounded-full flex items-center gap-2 hover:bg-[#313719] dark:hover:bg-[#BB86FC] hover:text-white transition-colors duration-300"
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
