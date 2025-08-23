import React, { useEffect, useState } from "react";
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
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Sync with navbar theme button
  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"));
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Inline styles for dark/light mode
  const sectionStyle = {
    backgroundColor: isDark ? "#000000" : "#ffffff",
    color: isDark ? "#e5e5e5" : "#111111",
    transition: "all 0.3s ease-in-out",
  };

  const cardStyle = {
    backgroundColor: isDark ? "#111111" : "#ffffff",
    color: isDark ? "#e5e5e5" : "#111111",
    transition: "all 0.3s ease-in-out",
  };

  const tagStyle = {
    backgroundColor: isDark ? "#ffffff" : "#1B2604",
    color: isDark ? "#000000" : "#ffffff",
  };

  const headerTagStyle = {
    backgroundColor: isDark ? "rgba(6,95,70,0.4)" : "rgba(49,55,25,0.1)",
    color: isDark ? "#6ee7b7" : "#111111",
  };

  const textColor = (light, dark) => (isDark ? dark : light);

  return (
    <section ref={ref} className="w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={sectionStyle}>
      {/* Header */}
      <motion.div
        variants={fadeInVariant(0)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto text-center"
      >
        <span className="inline-block px-5 py-1.5 rounded-full text-sm font-semibold" style={headerTagStyle}>
          Why Choose Us?
        </span>

        <h2 className="mt-6 text-3xl font-bold sm:text-4xl leading-tight" style={{ color: textColor("#111827", "#ffffff") }}>
          Smart Software. Real Results.
        </h2>

        <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: textColor("#4b5563", "#d1d5db") }}>
          At Triovex Solution, we don’t just build software we engineer
          intelligent solutions that solve real problems, fuel innovation, and
          accelerate business growth with precision and performance.
        </p>
      </motion.div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16 h-full max-w-6xl mx-auto">
        {/* Left Card */}
        <motion.div
          variants={fadeInVariant(0.3)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:col-span-6 rounded-3xl shadow-xl p-8 flex flex-col justify-between relative"
          style={cardStyle}
        >
          <div>
            <h3 className="text-2xl font-bold" style={{ color: textColor("#111827", "#ffffff") }}>
              ₹0 Consultation 100% Transparency, Always
            </h3>
            <p className="mt-2 text-base font-medium" style={{ color: textColor("#4b5563", "#d1d5db") }}>
              No Hidden Costs
            </p>
            <p className="mt-2" style={{ color: textColor("#4b5563", "#9ca3af") }}>
              At Triovex Solution, we believe great partnerships start with
              honesty. That’s why we offer zero consultation fees, clear
              communication, and upfront pricing no hidden charges, no
              third-party surprises.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Transparent Billing", "Clear Communication", "No Hidden or Extra Costs"].map((item) => (
                <span key={item} className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium" style={tagStyle}>
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

        {/* Right Column */}
        <div className="md:col-span-6 flex flex-col gap-6">
          {/* Top Right Card */}
          <motion.div
            variants={fadeInVariant(0.6)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="rounded-3xl shadow-xl p-8 flex flex-col justify-between h-full relative"
            style={cardStyle}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold" style={{ color: textColor("#111827", "#ffffff") }}>
                500+ Success Stories Globally Trusted, Locally Rooted
              </h3>
              <p className="mt-2 text-base font-medium" style={{ color: textColor("#4b5563", "#d1d5db") }}>
                Trusted by Brands Worldwide
              </p>
              <p className="mt-2" style={{ color: textColor("#4b5563", "#9ca3af") }}>
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
            className="rounded-3xl shadow-xl p-8 flex flex-col justify-between h-full relative"
            style={cardStyle}
          >
            <div className="relative z-20">
              <h3 className="text-2xl font-bold" style={{ color: textColor("#111827", "#ffffff") }}>
                1,000+ Solutions to Launch, <br />
                Grow & Scale Smarter
              </h3>
              <p className="mt-2 text-base font-medium" style={{ color: textColor("#4b5563", "#d1d5db") }}>
                From Development to Digital Growth
              </p>
              <p className="mt-2" style={{ color: textColor("#4b5563", "#9ca3af") }}>
                From AI-driven software to performance marketing <br /> Triovex
                covers everything you
                <br /> need to start fast, scale
                <br /> confidently, and stay ahead in the <br />
                digital game.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Start in Minutes", "Backed by Expert Teams", "Built for Real Results"].map((item) => (
                  <span key={item} className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium" style={tagStyle}>
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
