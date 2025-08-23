import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import why1 from "../assets/aboutwhychoose5.png";
import why2 from "../assets/aboutwhychoose2.png";
import why3 from "../assets/aboutwhychoose4.png";
import darkwhy3 from "../assets/aboutwhychoose4dark.png";
import darkwhy1 from "../assets/aboutwhychoose1dark.png";
import darkwhy2 from "../assets/aboutwhychoose2dark.png";

const fadeInVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const AboutWhyChoose = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"));
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const sectionStyle = {
    backgroundColor: isDark ? "#000" : "#fff",
    color: isDark ? "#fff" : "#111",
    transition: "all 0.3s ease-in-out",
  };

  const cardStyle = {
    backgroundColor: isDark ? "#1f2937" : "#fff",
    color: isDark ? "#e5e5e5" : "#111",
    transition: "all 0.3s ease-in-out",
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
        <span
          className="inline-block px-5 py-1.5 rounded-full text-sm font-semibold"
          style={{
            backgroundColor: isDark ? "#84cc16" : "#e5e5e5",
            color: isDark ? "#f3f4f6" : "#365314",
          }}
        >
          Why Choose Us?
        </span>

        <h2
          className="mt-6 text-3xl font-bold sm:text-4xl leading-tight"
          style={{ color: textColor("#111827", "#fff") }}
        >
          Smart Software. Real Results.
        </h2>

        <p
          className="mt-4 text-lg max-w-2xl mx-auto"
          style={{ color: textColor("#4b5563", "#d1d5db") }}
        >
          At Triovex Solution, we don’t just build software we engineer intelligent solutions that solve real problems, fuel innovation, and accelerate business growth with precision and performance.
        </p>
      </motion.div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16 h-full max-w-6xl mx-auto">
        {/* Left Card */}
        <motion.div
          variants={fadeInVariant(0.3)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:col-span-6 rounded-3xl shadow-xl p-8 flex flex-col relative"
          style={cardStyle}
        >
          <div>
            <h3
              className="text-2xl font-bold flex justify-center text-center"
              style={{ color: textColor("#111827", "#fff") }}
            >
              Built on Vision. Backed by Expertise.
            </h3>
            <p
              className="mt-2 text-center"
              style={{ color: textColor("#4b5563", "#d1d5db") }}
            >
              We’re more than developers we’re strategic partners in your growth. With deep roots in AI, automation, and digital transformation, we craft every product with clarity, creativity, and code that performs.
            </p>
          </div>

          {/* Mobile Image */}
          <div className="relative mt-10 flex justify-center lg:hidden">
            <motion.img
              src={isDark ? darkwhy1 : darkwhy1}
              alt="Consultation"
              className="w-[80%] max-w-xs mx-auto z-10"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
            />
          </div>

          {/* Desktop Image */}
          <div className="relative mt-10 justify-center hidden lg:flex">
            <div className="absolute h-[240px] w-[240px] z-10"></div>
            <div className="relative justify-center">
              <div className="absolute h-[840px] w-[840px] -z-10"></div>
              <motion.img
                src={isDark ? darkwhy1 : darkwhy1}
                alt="Consultation"
                className="max-w-[400px] z-10"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
              />
            </div>
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
              <h3
                className="text-2xl font-bold"
                style={{ color: textColor("#111827", "#fff") }}
              >
                Driven by Purpose. Trusted <br className="hidden lg:inline" />
                Worldwide.
              </h3>
              <p
                className="mt-2"
                style={{ color: textColor("#4b5563", "#d1d5db") }}
              >
                From startups to global brands, businesses <br className="hidden lg:inline" />
                choose Triovex for our agility, reliability, and <br className="hidden lg:inline" />
                unwavering commitment to outcomes that <br className="hidden lg:inline" />
                matter.
              </p>
            </div>

            {/* Mobile Image */}
            <div className="relative mt-10 flex justify-center lg:hidden">
              <motion.img
                src={isDark ? darkwhy2 : darkwhy2}
                alt="Projects Delivered"
                className="w-[70%]"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
              />
            </div>

            {/* Desktop Image */}
            <div className="relative mt-10 flex justify-center hidden lg:flex">
              <motion.img
                src={isDark ? darkwhy2 : darkwhy2}
                alt="Projects Delivered"
                className="max-w-[200px] translate-x-[35%] translate-y-[-110%] absolute top-1/2 left-1/2 scale-x-[-1] rotate-120"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
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
              <h3
                className="text-2xl font-bold"
                style={{ color: textColor("#111827", "#fff") }}
              >
                Empowering the Future, One <br className="hidden lg:inline" />
                Solution at a Time
              </h3>
              <p
                className="mt-2"
                style={{ color: textColor("#4b5563", "#d1d5db") }}
              >
                At Triovex Solution, we combine deep technical <br className="hidden lg:inline" />
                expertise with forward-thinking design to build <br className="hidden lg:inline" />
                systems that evolve. Our mission is to <br className="hidden lg:inline" />
                simplify the complex, automate the repetitive, <br className="hidden lg:inline" />
                and bring intelligent experiences to life through scalable, <br className="hidden lg:inline" />
                secure, and future-ready technology.
              </p>
            </div>

            {/* Mobile Image */}
            <div className="flex justify-center mt-10 lg:hidden">
              <motion.img
                src={isDark ? darkwhy3 : why3}
                alt="Services & Features"
                className="w-[60%]"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
              />
            </div>

            {/* Desktop Image */}
            <motion.img
              src={isDark ? darkwhy3 : why3}
              alt="Services & Features"
              className="w-[80%] sm:w-[35%] md:w-[40%] lg:w-[40%] z-10 translate-x-[22%] translate-y-[7%] rounded-br-3xl absolute left-1/2 transform hidden lg:block"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChoose;
