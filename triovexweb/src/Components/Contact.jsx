import React, { useState, useEffect, useRef } from "react";
import { motion as m } from "framer-motion";

// Animation Variants
const fadeCard = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

function Contact() {
  const [showCards, setShowCards] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const heroRef = useRef(null);

  // Detect dark mode based on html class
  useEffect(() => {
    const checkTheme = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();

    const observer = new MutationObserver(() => checkTheme());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowCards(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#000000" : "#ffffff",
        transition: "background-color 0.5s ease",
      }}
    >
      {/* 🔹 Who We Are Section */}
      <m.div
        className="flex flex-col items-center text-center px-4 py-6 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeCard(0.1)}
      >
        <span
          style={{
            backgroundColor: isDark ? "#374151" : "#E5E7EB",
            color: isDark ? "#E5E7EB" : "#374151",
          }}
          className="px-4 py-1 rounded-full text-sm font-medium mb-3"
        >
          Who We Are
        </span>
        <p
          style={{
            color: isDark ? "#D1D5DB" : "#4B5563",
          }}
          className="text-base sm:text-sm md:text-base lg:text-lg"
        >
          Triovex Solution empowers businesses to grow digitally through
          innovative web, app, and marketing solutions.
        </p>
      </m.div>

      {/* 🔹 Info Cards + Map */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
          {/* 🔸 Left Column */}
          <div className="flex flex-col gap-6 col-span-1">
            <m.div
              style={{ backgroundColor: "#2F3712", color: "#FFFFFF" }}
              className="rounded-xl p-6 h-52 sm:h-60 md:h-64 lg:h-[196px] flex flex-col items-center justify-center"
              variants={fadeCard(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="font-bold text-lg">Contact Number</h3>
              <a
                href="https://wa.me/+919978985611"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline my-2"
              >
                +91 99789 85611
              </a>
            </m.div>

            <m.div
              style={{ backgroundColor: "#2F3712", color: "#FFFFFF" }}
              className="rounded-xl p-6 h-52 sm:h-60 md:h-64 lg:h-[196px] flex flex-col items-center justify-center"
              variants={fadeCard(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="font-bold text-lg">Office Address</h3>
              <a
                href="https://www.google.com/maps?q=Shivalik+Shilp,+Iskcon+Cross+Road,+SG+Highway,+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline my-2"
              >
                <p>1306, Shivalik Shilp, Iskcon Cross Road, SG Highway, Ahmedabad – 380054.</p>
              </a>
            </m.div>
          </div>

          {/* 🔹 Map Center */}
          <m.div
            className="col-span-1 md:col-span-3 rounded-xl overflow-hidden h-[300px] md:h-[360px] lg:h-[420px]"
            variants={fadeCard(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <iframe
              title="Google Map - Shivalik Shilp"
              src="https://maps.google.com/maps?q=Shivalik+Shilp,+Iskcon+Cross+Road,+SG+Highway,+Ahmedabad&z=17&output=embed"
              className="w-full h-[450px] border-none rounded-xl shadow-md"
              allowFullScreen
              loading="lazy"
            />
          </m.div>

          {/* 🔸 Right Column */}
          <div className="flex flex-col gap-6 col-span-1">
            <m.div
              style={{ backgroundColor: "#2F3712", color: "#FFFFFF" }}
              className="rounded-xl p-6 h-52 sm:h-60 md:h-64 lg:h-[196px] flex flex-col items-center justify-center"
              variants={fadeCard(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="font-bold text-lg">Email Address</h3>
              <a
                href="mailto:support@triovexsolution.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline my-2 text-sm sm:text-base break-words"
              >
                support@triovexsolution.com
              </a>
            </m.div>

            <m.div
              style={{ backgroundColor: "#2F3712", color: "#FFFFFF" }}
              className="rounded-xl p-6 h-52 sm:h-60 md:h-64 lg:h-[196px] flex flex-col items-center justify-center"
              variants={fadeCard(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="font-bold text-lg">Office Time</h3>
              <p className="mt-2">
                We’re here for you: <br /> Mon to Sat 9 AM – 9 PM
              </p>
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
