"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import hbg from "../assets/hbg.png";
import pin1 from "../assets/pin1.png";
import pin2 from "../assets/pin2.png";
import pin3 from "../assets/pin3.png";
import MagnifyCursor from "../Components/AnimationComponents/MagnifyCursor";

import {
  Brain,
  Code,
  Palette,
  Smartphone,
  Search,
  TrendingUp,
  Award,
  Cloud,
} from "lucide-react";

import AIModal from "./AIModal";
import CustomSoftwareModal from "./CustomSoftwareModal";
import WebDevModal from "./WebDevModal";
import AppDevModal from "./AppDevModal";
import SEOModal from "./SEOModal";
import DigitalMarketing from "./DigitalMarketingModel";
import SocialMediaModal from "./SocialMediaHandling";
import CloudModel from "./cloude";

const MainServices = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCloudModal, setShowCloudModal] = useState(false);
  const [show1Modal, setShow1Modal] = useState(false);
  const [show2Modal, setShow2Modal] = useState(false);
  const [show3Modal, setShow3Modal] = useState(false);
  const [show4Modal, setShow4Modal] = useState(false);
  const [show5Modal, setShow5Modal] = useState(false);
  const [show6Modal, setShow6Modal] = useState(false);

  const [visibleCards, setVisibleCards] = useState([]);
  const [lineProgress, setLineProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const containerRef = useRef(null);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    const listener = (e) => setIsDarkMode(e.matches);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);
    return () =>
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
  }, []);

  const services = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description:
        "Build smarter systems with AI that automate, predict, and optimize business processes effortlessly.",
      detailedDescription: "Advanced machine learning...",
      icon: Brain,
      bgColor: "bg-[#FFECE6]",
      position: "left",
      pin: pin1,
    },
    {
      id: 2,
      title: "Cloud Computing Services",
      description:
        "Secure, scalable cloud systems that reduce costs, boost agility, and drive innovation — from migration to optimization.",
      detailedDescription: "",
      icon: Cloud,
      bgColor: "bg-[#E6F0FF]",
      position: "right",
      pin: pin2,
    },
    {
      id: 3,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your business requirements and streamline operations.",
      detailedDescription: "Full-stack development...",
      icon: Code,
      bgColor: "bg-[#F3E6FF]",
      position: "left",
      pin: pin3,
    },
    {
      id: 4,
      title: "Website Design & Development",
      description:
        "Responsive websites that engage your audience and drive conversions with modern design.",
      detailedDescription: "User-centric design...",
      icon: Palette,
      bgColor: "bg-[#FFECE6]",
      position: "right",
      pin: pin1,
    },
    {
      id: 5,
      title: "Mobile & Web Applications",
      description:
        "Seamless user experiences through powerful mobile and web apps across platforms.",
      detailedDescription: "Cross-platform development...",
      icon: Smartphone,
      bgColor: "bg-[#E6F0FF]",
      position: "left",
      pin: pin2,
    },
    {
      id: 6,
      title: "Search Engine Optimization (SEO)",
      description:
        "Boost your visibility and search rankings with comprehensive SEO strategies.",
      detailedDescription: "Data-driven SEO strategies...",
      icon: Search,
      bgColor: "bg-[#F3E6FF]",
      position: "right",
      pin: pin3,
    },
    {
      id: 7,
      title: "Digital Marketing",
      description:
        "Marketing strategies to expand your reach and connect with your audience effectively.",
      detailedDescription: "Comprehensive digital marketing...",
      icon: TrendingUp,
      bgColor: "bg-[#FFECE6]",
      position: "left",
      pin: pin1,
    },
    {
      id: 8,
      title: "Social Media Management",
      description:
        "Engage audiences and grow your brand with effective social media strategies.",
      detailedDescription: "Strategic social media campaigns...",
      icon: Award,
      bgColor: "bg-[#E6F0FF]",
      position: "right",
      pin: pin2,
    },
  ];

  const modalMap = {
    1: () => setShowModal(true),
    2: () => setShowCloudModal(true),
    3: () => setShow1Modal(true),
    4: () => setShow2Modal(true),
    5: () => setShow3Modal(true),
    6: () => setShow4Modal(true),
    7: () => setShow5Modal(true),
    8: () => setShow6Modal(true),
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute("data-card-id"));
            setVisibleCards((prev) =>
              prev.includes(cardId) ? prev : [...prev, cardId]
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const cardElements = document.querySelectorAll("[data-card-id]");
    cardElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleLineProgress = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const containerTop = rect.top + window.scrollY;
        const containerHeight = rect.height;
        const viewportHeight = window.innerHeight;
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (window.scrollY - containerTop + viewportHeight) /
              (containerHeight + viewportHeight)
          )
        );
        setLineProgress(scrollProgress);
      }
    };
    window.addEventListener("scroll", handleLineProgress);
    handleLineProgress();
    return () => window.removeEventListener("scroll", handleLineProgress);
  }, []);

  const handleCardFlip = (cardId) => {
    setFlippedCards((prev) =>
      prev.includes(cardId)
        ? prev.filter((id) => id !== cardId)
        : [...prev, cardId]
    );
  };

  return (
    <div >
      {/* Services Section */}
<section
  ref={containerRef}
  className={`relative py-16 w-full overflow-hidden ${
    isDarkMode ? "bg-black" : "bg-white"
  }`}
>
  {/* Inner centered container */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-15">
    <div className="absolute inset-0 z-10 pointer-events-none overflow-visible">
      <svg
        className="w-full h-full min-h-[3000px] hidden lg:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 3000"
        preserveAspectRatio="none"
      >
        {services.slice(0, -1).map((_, index) => {
          const fromLeft = services[index].position === "left";
          const y1 = index * 360 + 280;
          const y2 = y1 + 300;
          const path = fromLeft
            ? `M 25 ${y1} Q 50 ${y1 + 100} 75 ${y2}`
            : `M 75 ${y1} Q 50 ${y1 + 100} 25 ${y2}`;
          return (
            <path
              key={index}
              d={path}
              stroke={isDarkMode ? "#FFFFFF" : "#000000"}
              strokeWidth="0.2"
              strokeDasharray="2 0.7"
              fill="none"
              opacity="0.6"
              strokeDashoffset={`${(1 - lineProgress) * 100}`}
              style={{ transition: "stroke-dashoffset 0.9s ease-out" }}
            />
          );
        })}
      </svg>

      <svg
        className="w-full h-full min-h-[2000px] block lg:hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 2000"
        preserveAspectRatio="none"
      >
        {services.slice(0, -1).map((_, index) => {
          const y1 = index * 240 + 180;
          const y2 = y1 + 180;
          return (
            <path
              key={index}
              d={`M 50 ${y1} L 50 ${y2}`}
              stroke={isDarkMode ? "#FFFFFF" : "#000000"}
              strokeWidth="0.2"
              strokeDasharray="2 0.7"
              fill="none"
              opacity="0.6"
            />
          );
        })}
      </svg>
    </div>

    <div className="relative z-20 flex flex-col gap-[100px]">
      {services.map((service, index) => {
        const isLeft = service.position === "left";
        const isVisible = visibleCards.includes(service.id);
        const isFlipped = flippedCards.includes(service.id);

        return (
          <div
            key={service.id}
            data-card-id={service.id}
            className={`flex flex-col items-center lg:flex-row ${
              isLeft ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            <div className="relative perspective-1000">
              {/* Pin Image */}
              <div
                className={`absolute -top-5 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-700 ${
                  isVisible ? "animate-pinDrop" : "opacity-0 -translate-y-20"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={service.pin}
                  alt="Pin"
                  className="w-[23px] h-10 drop-shadow-md"
                />
              </div>

              {/* Rotating Card */}
              <div className="group">
                <div
                  className={`relative shadow-xl rounded-2xl p-3 w-full h-[280px] max-w-[250px] transition-transform duration-700
                    ${
                      isLeft
                        ? "lg:rotate-[15deg] group-hover:rotate-0"
                        : "lg:-rotate-[15deg] group-hover:rotate-0"
                    }
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
                    bg-white
                  `}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <div
                    className={`w-full h-full p-4 rounded-xl border ${service.bgColor} text-gray-800 flex flex-col justify-between`}
                  >
                    <div>
                      <span className="text-lg font-semibold text-orange-500 mb-1 block ">
                        0{service.id}
                      </span>
                      <h3 className="text-sm font-bold text-black mb-1 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-700 leading-snug">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <button
                        onClick={() => modalMap[service.id]?.()}
                        className="text-xs text-black-600 hover:text-blue-800 transition cursor-pointer"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Modals */}
      {showModal && <AIModal onClose={() => setShowModal(false)} />}
      {showCloudModal && (
        <CloudModel onClose={() => setShowCloudModal(false)} />
      )}
      {show1Modal && (
        <CustomSoftwareModal onClose={() => setShow1Modal(false)} />
      )}
      {show2Modal && <WebDevModal onClose={() => setShow2Modal(false)} />}
      {show3Modal && <AppDevModal onClose={() => setShow3Modal(false)} />}
      {show4Modal && <SEOModal onClose={() => setShow4Modal(false)} />}
      {show5Modal && <DigitalMarketing onClose={() => setShow5Modal(false)} />}
      {show6Modal && <SocialMediaModal onClose={() => setShow6Modal(false)} />}
    </div>
  );
};

export default MainServices;
