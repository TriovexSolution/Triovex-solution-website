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

  const bgImages = [
    "image copy.png",
    "image.png",
    "image copy 2.png",
    "image copy 3.png",
    "image copy 4.png",
  ];
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
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 4xl:px-32 py-12 sm:py-16 md:py-20 max-w-screen-4xl mx-auto relative overflow-x-hidden"
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
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight mb-3 sm:mb-4 text-gray-900">
          Empowering Digital Growth Through Design, Code & Strategy
        </h2>
        <p className="mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 md:mb-12">
          At Triovex Solution, we blend creativity, technology, and strategy to
          build digital experiences that drive real growth.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 grid-rows-auto sm:grid-rows-9 gap-4 sm:gap-5 md:gap-6 lg:gap-6 auto-rows-auto">
        {/* Card 1 */}
        <motion.div
          variants={fadeFrom.left()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="aspect-square col-span-1 sm:col-span-4 md:col-span-4 lg:col-span-3 row-span-3 relative bg-white/80 backdrop-blur-lg border border-white/30 rounded-2xl shadow-md hover:scale-[1.02] transition duration-300 ease-out hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] overflow-hidden"
        >
          <img
            src={bottomImages[0]}
            alt="icon"
            className="hidden sm:block absolute top-2 w-10 sm:w-12 md:w-14 h-auto opacity-100"
          />
          <img
            src={bottomImages[0]}
            alt="icon"
            className="hidden sm:block absolute top-10 right-3 w-10 sm:w-12 md:w-14 h-auto opacity-100"
          />
          <div className="absolute bottom-0 left-4 flex items-start gap-1 opacity-70">
            <div className="flex flex-col gap-1">
              <img
                src={bottomImages[0]}
                alt="icon"
                className="w-6 sm:w-8 md:w-9 h-auto opacity-100"
              />
              <img
                src={bottomImages[0]}
                alt="icon"
                className="w-6 sm:w-8 md:w-9 h-auto opacity-100"
              />
            </div>
            <img
              src={bottomImages[0]}
              alt="icon"
              className="w-6 sm:w-8 md:w-9 my-auto opacity-100"
            />
          </div>
          <img
            src={bottomImages[0]}
            alt="icon"
            className="hidden sm:block absolute bottom-[-25px] right-[-19px] w-20 sm:w-24 h-auto opacity-100"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h3 className="font-bold text-3xl text-gray-900">10+</h3>
            <p className="text-base text-gray-800 mt-2">Industries Served</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeFrom.right()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="col-span-1 sm:col-span-6 md:col-span-8 lg:col-span-8 row-span-3 sm:col-start-1 md:col-start-1 lg:col-start-4"
        >
          <div className="bg-gradient-to-r from-white via-lime-50 to-white rounded-2xl border border-gray-200 shadow-lg hover:scale-[1.02] transition duration-300 ease-out hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-6 sm:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-900 mb-4">
                We deliver future-ready digital solutions
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                From websites and apps to marketing and SEO — every project is
                built for long-term success, with performance at the core.
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
          className="col-span-1 sm:col-span-6 md:col-span-8 lg:col-span-8 row-span-6 sm:row-start-4 relative group bg-white rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] transition duration-300 ease-out"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-lime-300 via-green-500 to-lime-600 opacity-9 rounded-full blur-3xl z-0"></div>
          <div className="relative z-10 h-full flex flex-col p-8 text-center">
            <div>
              <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-800">
                Creativity meets technology
              </h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl text-center mx-auto leading-relaxed mt-2">
                From websites and apps to marketing and SEO — every project is
                built for long-term success, with performance at the core.
              </p>
            </div>
            <div className="flex-grow flex items-center justify-center relative mt-4">
              {/* Optional: glow effect beneath the image */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-lime-400/20 rounded-full blur-2xl z-0"></div>

              {/* 3D horizontal rotating image */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"], // Zoom in and out
                }}
                transition={{
                  duration: 3, // Faster zoom
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="will-change-transform"
              >
                <img
                  src={bottomImages[2]} // or directly: '/path/to/your/image.png'
                  alt="Tech Icon"
                  className="w-48 sm:w-56 md:w-64 h-auto object-contain"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Card 4 */}

        <motion.div
          variants={fadeFrom.right()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="aspect-square col-span-1 sm:col-span-4 md:col-span-4 lg:col-span-3 row-span-3 sm:col-start-3 md:col-start-5 lg:col-start-9 sm:row-start-4 group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition duration-300 ease-out hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] relative"
        >
          <div className="relative flex flex-col items-center justify-between h-full px-4 py-5 text-center rounded-lg">
            {/* Text */}
            <div className="z-10">
              <h3 className="font-semibold text-base sm:text-lg md:text-xl text-black mb-2">
                Built on <br /> partnerships
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed">
                We align your goals with our expertise to create lasting digital
                experiences — not just one-time solutions.
              </p>
            </div>

            {/* Aesthetic 3D-Like Floating Animation */}
            <motion.img
              src={bottomImages[3]} // replace with your actual image path
              alt="3D Cubes"
              className="w-24 sm:w-28 md:w-32 h-auto mt-4 z-10"
              animate={{
                rotateX: [0, 10, 0, -10, 0, 10, 0],
                rotateY: [0, -10, 10, 0, -10, 0, 0],
                scale: [1.5, 1.05, 1.5],
                filter: [
                  "blur(0px) brightness(1)",
                  "blur(1.5px) brightness(1.15)",
                  "blur(0px) brightness(1)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
          className="aspect-square col-span-1 sm:col-span-4 md:col-span-4 lg:col-span-3 row-span-3 sm:col-start-3 md:col-start-5 lg:col-start-9 sm:row-start-7 group bg-white rounded-2xl shadow-lg overflow-hidden relative border border-gray-200"
        >
          <div
            className="absolute inset-0 bg-center bg-contain bg-no-repeat opacity-10 blur-xl"
            style={{ backgroundImage: `url('/path-to-your-openai-logo.png')` }}
          ></div>
          <div className="relative z-10 flex flex-col justify-between h-full p-6 text-left">
            <div>
              <h3 className="text-xl font-bold text-gray-800 leading-snug">
                Focused on <br /> measurable results
              </h3>
              <p className="mt-4 text-base text-gray-700">
                At , everything is tied to growth. From user experience to
                backend performance — we ensure real impact.
              </p>
            </div>
            <div className="w-full flex justify-end">
              <motion.img
                src={bottomImages[4]}
                alt="Top Cover"
                className="w-16 sm:w-24 md:w-28 h-auto"
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
