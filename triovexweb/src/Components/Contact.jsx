import React, { useState, useEffect, useRef } from "react";
import { motion as m } from "framer-motion";
import hbg from "../assets/hbg.png";
import MagnifyCursor from "../Components/AnimationComponents/MagnifyCursor";

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
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowCards(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-black transition-colors duration-500">
      {/* 🔹 Hero Section */}

      {/* 🔹 Who We Are Section */}
      <m.div
        className="flex flex-col items-center text-center px-4 py-6 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeCard(0.1)}
      >
        <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-1 rounded-full text-sm font-medium mb-3">
          Who We Are
        </span>
        <p className="text-base sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300">
          Triovex Solution empowers businesses to grow digitally through
          innovative web, app, and marketing solutions.
        </p>
      </m.div>

      {/* 🔹 Info Cards + Map */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-black transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
          {/* 🔸 Left Column */}
          <div className="flex flex-col gap-6 col-span-1 ">
            <m.div
              className="bg-[#2F3712] dark:bg-[#1f2a0f] text-white rounded-xl p-6 h-52 sm:h-60 md:h-64 lg:h-[196px] flex flex-col items-center justify-center"
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
              className="bg-[#2F3712] dark:bg-[#1f2a0f] text-white rounded-xl p-6 h-52 sm:h-60 md:h-64 lg:h-[196px] flex flex-col items-center justify-center"
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
                className="block hover:underline my-2 "
              >
                <p className="text-white">
                  1306, Shivalik shilp, Iskcon Cross Road, SG Highway, Ahmedabad
                  – 380054.
                </p>
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
            <div className="space-y-2">
              <iframe
                title="Google Map - Shivalik Shilp"
                src="https://maps.google.com/maps?q=Shivalik+Shilp,+Iskcon+Cross+Road,+SG+Highway,+Ahmedabad&z=17&output=embed"
                className="w-full h-[450px] border-none rounded-xl shadow-md"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </m.div>

          {/* 🔸 Right Column */}
          <div className="flex flex-col gap-6 col-span-1">
            <m.div
              className="bg-[#2F3712] dark:bg-[#1f2a0f] text-white rounded-xl p-6 h-52 sm:h-60 md:h-64 lg:h-[196px] w-full overflow-x-auto flex flex-col items-center justify-center overflow-x-hidden"
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
              className="bg-[#2F3712] dark:bg-[#1f2a0f] text-white rounded-xl p-6 h-52 sm:h-60 md:h-64 lg:h-[196px] flex flex-col items-center justify-center"
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
