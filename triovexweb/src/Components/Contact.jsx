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

  const headingWords = ["We're", "Here", "to", "Help", "–", "Contact", "Us"];

  return (
    <div>
      {/* 🔹 Hero Section */}
      <div className="min-h-screen bg-white relative overflow-hidden cursor-none">
        <m.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute w-full h-full object-cover object-center"
          src={hbg}
          alt="Background"
        />

        <div
          ref={heroRef}
          className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <MagnifyCursor containerRef={heroRef} />

          <div className="text-center">
            <a
              href="#contact"
              className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              Contact
            </a>

            <h2 className="text-2xl font-bold text-gray-900 mt-6 sm:text-3xl cursor-zoom">
              {headingWords.map((word, i) => (
                <m.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="inline-block mr-1"
                >
                  {word}
                </m.span>
              ))}
            </h2>

            <m.p
              className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto cursor-zoom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Have questions or need help? Our friendly team is just a message
              away and ready to support you anytime.
            </m.p>
          </div>
        </div>
      </div>

      {/* 🔹 Who We Are Section */}
      <m.div
        className="flex flex-col items-center text-center px-4 py-6 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeCard(0.1)}
      >
        <span className="inline-block bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-medium mb-3">
          Who We Are
        </span>
        <p className="text-base sm:text-sm md:text-base lg:text-lg text-gray-600">
          Triovex Solution empowers businesses to grow digitally through
          innovative web, app, and marketing solutions.
        </p>
      </m.div>

      {/* 🔹 Info Cards + Map */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
          {/* 🔸 Left Column */}
          <div className="flex flex-col gap-6 col-span-1">
            <m.div
              className="bg-[#2F3712] text-white rounded-xl p-6 h-52 sm:h-60 md:h-64 lg:h-[196px]"
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
              className="bg-[#2F3712] text-white rounded-xl p-6 h-52 sm:h-60 md:h-64 lg:h-[196px]"
              variants={fadeCard(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="font-bold text-lg">Office Address</h3>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline my-2"
              >
                <p>
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
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Ahmedabad,Gujarat,India&z=14&output=embed"
              className="w-full h-full border-none rounded-xl shadow-md"
              allowFullScreen
              loading="lazy"
            />
          </m.div>

          {/* 🔸 Right Column */}
          <div className="flex flex-col gap-6 col-span-1">
            <m.div
              className="bg-[#2F3712] text-white rounded-xl p-6 h-52 sm:h-60 md:h-64 lg:h-[196px] w-full overflow-x-auto"
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
              className="bg-[#2F3712] text-white rounded-xl p-6 h-52 sm:h-60 md:h-64 lg:h-[196px]"
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
