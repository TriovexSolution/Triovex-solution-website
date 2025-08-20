import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import why1 from "../assets/whychoose1.png";
import why2 from "../assets/whychoose2.png";
import why3 from "../assets/whychoose3.png";

// Animation variant factory
const fadeInVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const WhyChoose = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full bg-white dark:bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ---------- Header ---------- */}
      <motion.div
        variants={fadeInVariant(0)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto text-center"
      >
        <span className="inline-block px-5 py-1.5 rounded-full bg-lime-100  text-lime-800 dark:bg-emerald-900/40 dark:text-emerald-300 text-sm font-semibold">
          Why Choose Us?
        </span>

        <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl leading-tight">
          Smart Software. Real Results.
        </h2>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          At Triovex Solution, we don’t just build software we engineer
          intelligent solutions that solve real problems, fuel innovation, and
          accelerate business growth with precision and performance.
        </p>
      </motion.div>

      {/* ---------- Card Grid ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16 h-full max-w-6xl mx-auto">
        {/* Card 1 - Left */}
        <motion.div
          variants={fadeInVariant(0.3)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:col-span-6 bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 flex flex-col justify-between relative"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              ₹0 Consultation 100% Transparency, Always
            </h3>
            <p className="mt-2 text-base font-medium text-gray-700 dark:text-gray-300">
              No Hidden Costs
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              At Triovex Solution, we believe great partnerships start with
              honesty. That’s why we offer zero consultation fees, clear
              communication, and upfront pricing no hidden charges, no
              third-party surprises.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Transparent Billing",
                "Clear Communication",
                "No Hidden or Extra Costs",
              ].map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap rounded-full bg-[#1B2604] dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-10 justify-center hidden lg:flex">
            <div className="absolute h-[240px] w-[240px] -z-10"></div>
            <img
              src={why1}
              alt="Consultation"
              className="max-w-[400px] z-10 translate-x-[-23%] translate-y-[-93.7%] absolute top-1/2 left-1/2"
            />
          </div>
        </motion.div>

        {/* Right Column – Two Cards */}
        <div className="md:col-span-6 flex flex-col gap-6">
          {/* Top Right Card */}
          <motion.div
            variants={fadeInVariant(0.6)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 flex flex-col justify-between h-full relative"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                500+ Success Stories Globally Trusted, Locally Rooted
              </h3>
              <p className="mt-2 text-base font-medium text-gray-700 dark:text-gray-300">
                Trusted by Brands Worldwide
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                From fast-growing startups to global <br />
                enterprises, businesses trust Triovex for <br />
                scalable web platforms, high-performing <br />
                apps, smart automation, and AI-powered <br />
                digital transformation.
              </p>
            </div>
            <div className="relative mt-10 flex justify-center hidden lg:flex">
              <img
                src={why2}
                alt="Projects Delivered"
                className="max-w-[300px] translate-x-[-2%] translate-y-[-86.7%] absolute top-1/2 left-1/2"
              />
            </div>
          </motion.div>

          {/* Bottom Right Card */}
          <motion.div
            variants={fadeInVariant(0.9)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 flex flex-col justify-between h-full relative"
          >
            <div className="relative z-20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                1,000+ Solutions to Launch, <br />
                Grow & Scale Smarter
              </h3>
              <p className="mt-2 text-base font-medium text-gray-700 dark:text-gray-300">
                From Development to Digital Growth
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                From AI-driven software to performance marketing <br /> Triovex
                covers everything you
                <br /> need to start fast, scale
                <br /> confidently, and stay ahead in the <br />
                digital game.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Start in Minutes",
                  "Backed by Expert Teams",
                  "Built for Real Results",
                ].map((item) => (
                  <span
                    key={item}
                    className="whitespace-nowrap rounded-full bg-[#1B2604] dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <img
              src={why3}
              alt="Services & Features"
              className="w-[80%] sm:w-[70%] md:w-[65%] lg:w-[75%] z-10 translate-x-[-13%] translate-y-[-7.8%] absolute left-1/2 transform scale-x-[-1] hidden lg:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
