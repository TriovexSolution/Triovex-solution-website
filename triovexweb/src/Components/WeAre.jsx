import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

const WeAre = () => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards(true);
    }, 2200); // Delay for cards
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="text-center mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-8 md:grid-rows-9 gap-4">
        {/* WHO WE ARE SECTION */}
        <m.div
          className="flex flex-col justify-center text-center space-y-3 md:col-span-2 md:row-span-2 md:col-start-4 md:row-start-1 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <span className="mx-auto inline-block bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-medium">
            Who We Are
          </span>
          <p className="text-base md:text-sm lg:text-base text-gray-600 px-4">
            Triovex Solution empowers businesses to grow digitally through
            innovative web, app, and marketing solutions.
          </p>
        </m.div>

        {/* CONTAINER FOR STAGGERED CARDS */}
        {showCards && (
          <m.div
            className="contents"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Card 1 */}
            <m.div
              className="md:col-span-2 md:row-span-5 text-white p-4 rounded-lg flex flex-col text-left items-start"
              style={{ backgroundColor: "#313719" }}
              variants={fadeIn}
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                Digital Innovation Experts
              </h3>
              <p className="text-sm my-4">
                We create cutting-edge web and mobile solutions tailored to modern
                business needs.
              </p>
            </m.div>

            {/* Card 2 */}
            <m.div
              className="md:col-span-2 md:row-span-5 text-white p-4 rounded-lg flex flex-col text-left items-start"
              style={{ backgroundColor: "#313719" }}
              variants={fadeIn}
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                Trusted by Global Brands
              </h3>
              <p className="text-sm my-4">
                Startups to enterprises trust us for reliable, scalable, and
                high-performance digital solutions.
              </p>
            </m.div>

            {/* Center Image */}
            <m.div
              className="md:col-span-4 md:row-span-5 md:col-start-3 md:row-start-3"
              variants={fadeIn}
            >
              <img
                src="src/assets/triovexbuilding.png"
                alt="Triovex Building"
                className="w-full h-full object-cover rounded-lg"
              />
            </m.div>

            {/* Card 3 */}
            <m.div
              className="md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-8 bg-green-800 text-white px-4 py-4 rounded-lg flex flex-col items-start text-left"
              style={{ backgroundColor: "#313719" }}
              variants={fadeIn}
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                Creative-Driven Team
              </h3>
              <p className="text-sm my-4">
                Our designers and strategists turn ideas into user-focused digital
                experiences.
              </p>
            </m.div>

            {/* Card 4 */}
            <m.div
              className="md:col-span-2 md:row-span-5 text-white p-4 rounded-lg flex flex-col text-left items-start"
              style={{ backgroundColor: "#313719" }}
              variants={fadeIn}
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                Trusted by Global Brands
              </h3>
              <p className="text-sm my-4">
                Everything we build is designed to grow your business and deliver
                measurable success.
              </p>
            </m.div>

            {/* Card 5 */}
            <m.div
              className="md:col-span-2 md:row-span-5 text-white p-4 rounded-lg flex flex-col text-left items-start"
              style={{ backgroundColor: "#313719" }}
              variants={fadeIn}
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                End-to-End Services
              </h3>
              <p className="text-sm my-4">
                From development to digital marketing, we handle it all—under one
                roof.
              </p>
            </m.div>
          </m.div>
        )}
      </div>
    </div>
  );
};

export default WeAre;
