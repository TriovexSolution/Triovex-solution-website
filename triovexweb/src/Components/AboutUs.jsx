import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const fadeFrom = {
    left: (delay = 0) => ({
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.7, ease: "easeOut" },
      },
    }),
    right: (delay = 0) => ({
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.7, ease: "easeOut" },
      },
    }),
  };

  const bottomImages = [
    "image copy.png",
    "image.png",
    "image copy 2.png",
    "image copy 3.png",
    "image copy 4.png",
  ];

  return (
    <section
      id="about"
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 md:py-20 max-w-screen-4xl mx-auto relative overflow-x-hidden"
    >
      {/* Background Blobs */}
      <span
        className="hidden sm:block absolute top-20 left-10 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-lime-300/40 to-emerald-500/20 rounded-full blur-2xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <span
        className="hidden sm:block absolute top-40 right-10 sm:right-16 md:right-20 w-28 sm:w-32 md:w-40 h-28 sm:h-32 md:h-40 bg-gradient-to-br from-emerald-300/30 to-lime-500/20 rounded-full blur-2xl animate-pulse"
        style={{ animationDuration: "6s" }}
      />
      <span
        className="hidden sm:block absolute bottom-20 left-1/4 w-24 sm:w-28 md:w-36 h-24 sm:h-28 md:h-36 bg-gradient-to-br from-lime-400/30 to-emerald-400/20 rounded-full blur-2xl animate-pulse"
        style={{ animationDuration: "5s" }}
      />

      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium bg-emerald-100 text-emerald-700">
          About us
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-gray-900 mb-3 sm:mb-4">
          Fueling Digital Growth with Intelligence, Creativity & Code
        </h2>
        <p className="mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg text-gray-600">
          At Triovex Solution, we merge AI-driven tech with design and strategy to craft smart digital experiences that scale and succeed.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">

        {/* Card 1 */}
        <motion.div
          variants={fadeFrom.left()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="col-span-1 md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-md p-4 h-64 flex items-center justify-center"
        >
          {/* Decorative images (same as before) */}
          <img
            src={bottomImages[0]}
            className="hidden sm:block absolute top-2 left-2 w-10 sm:w-12 md:w-14"
            alt="icon"
          />
          <img
            src={bottomImages[0]}
            className="hidden sm:block absolute top-4 right-3 w-10 sm:w-12 md:w-14"
            alt="icon"
          />
          <div className="absolute bottom-4 left-4 flex items-start gap-1 opacity-70">
            <div className="flex flex-col gap-1">
              <img src={bottomImages[0]} className="w-6 sm:w-8 md:w-9" alt="icon" />
              <img src={bottomImages[0]} className="w-6 sm:w-8 md:w-9" alt="icon" />
            </div>
            <img
              src={bottomImages[0]}
              className="w-6 sm:w-8 md:w-9 my-auto"
              alt="icon"
            />
          </div>
          <img
            src={bottomImages[0]}
            className="hidden sm:block absolute bottom-0 right-0 w-20 sm:w-24"
            alt="icon"
          />
          <div className="z-10 flex flex-col items-center justify-center h-full text-center relative">
            <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900">10+</h3>
            <p className="text-base sm:text-lg text-gray-800 mt-2">Industries Served</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeFrom.right()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="col-span-1 md:col-span-3 lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-md p-6 sm:p-8 flex flex-col justify-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between h-full">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-900 mb-4">
                Smart, Scalable & Future-Ready Digital Solutions
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                From intelligent websites and AI-integrated apps to SEO and marketing, we build solutions to scale with speed, strategy, and long-term impact.
              </p>
            </div>
            <motion.img
              src={bottomImages[1]}
              alt="Card 2"
              className="w-24 sm:w-32 md:w-40 lg:w-48 mt-6 md:mt-0 object-contain"
              animate={{ rotate: [0, -5, -10, -15, -10, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={fadeFrom.left()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="col-span-1 md:col-span-1 lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-md p-6 sm:p-8 flex flex-col justify-between"
        >
          <div className="relative z-10 h-full flex flex-col text-center justify-between">
            <h3 className="font-semibold text-lg sm:text-xl text-gray-800">
              Where Creative Vision Meets AI Precision

            </h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
             We merge bold design with smart technology from AI-powered websites to automated marketing and intelligent SEO every project is built to perform, adapt, and scale.
            </p>
            <motion.div
              className="mt-4"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={bottomImages[2]}
                alt="Tech Icon"
                className="w-full max-w-[120px] mx-auto object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          variants={fadeFrom.right()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="col-span-1 md:col-span-1 lg:col-span-1 bg-white rounded-2xl border border-gray-200 shadow-md p-6 sm:p-8 flex flex-col items-center justify-between"
        >
          <div className="h-full flex flex-col items-center justify-between text-center">
            <h3 className="font-semibold text-lg sm:text-xl text-black mb-2">
            Collaborative & Enduring
            </h3>
            <p className="text-sm text-gray-800 mb-4">
             We create evolving, AI-powered digital partnerships.
            </p>
            <motion.img
              src={bottomImages[3]}
              alt="3D Cubes"
              className="w-20 sm:w-24 md:w-28 h-auto max-w-[70%] mt-4 z-10"
              animate={{
                rotateX: [0, 0, 0, 0, 0],
                rotateY: [0, 0, 0, 0, 0],
                scale: [1.25, 1, 1.25],
                
                filter: [
                  "blur(0px) brightness(1)",
                  "blur(1.5px) brightness(1.15)",
                  "blur(0px) brightness(1)",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 800,
              }}
            />
          </div>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          variants={fadeFrom.left()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-md p-6 sm:p-8 flex flex-col justify-between"
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                Data-Driven. Impact-Obsessed.

              </h3>
              <p className="text-base text-gray-700 text-center">
                At Triovex, every pixel, click, and line of code is engineered for measurable growth from intuitive UX to high-performance backend systems, we turn strategy into scalable success.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <motion.img
                src={bottomImages[4]}
                alt="Top Cover"
                className="w-20 sm:w-24 md:w-28"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}