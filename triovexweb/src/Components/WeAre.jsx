import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import triovexBuilding from "../assets/triovexbuilding.png";

const WeAre = () => {
  const [showCards, setShowCards] = useState(false);
  const [isDark, setIsDark] = useState(false);

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

  // Delay showing cards
  useEffect(() => {
    const timer = setTimeout(() => setShowCards(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
  };

  const containerVariants = {
    visible: { transition: { staggerChildren: 0.4, delayChildren: 0.3 } },
  };

  // Card background based on theme
  const cardBg = isDark ? "#313719" : "#313719";

  return (
    <div
      className="flex justify-center px-4 py-6 transition-colors duration-500"
      style={{ backgroundColor: isDark ? "#000000" : "#ffffff" }}
    >
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-8 md:grid-rows-9 gap-4">
          {/* WHO WE ARE SECTION */}
          <m.div
            className="flex flex-col justify-center text-center space-y-3 md:col-span-2 md:row-span-2 md:col-start-4 md:row-start-1 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <span
              className="mx-auto inline-block px-4 py-1 rounded-full text-sm font-medium transition-colors duration-300"
              style={{
                backgroundColor: isDark ? "#374151" : "#e5e5e5",
                color: isDark ? "#e5e5e5" : "#111827",
              }}
            >
              Who We Are
            </span>
            <p
              className="text-base md:text-sm lg:text-base px-4 transition-colors duration-300"
              style={{ color: isDark ? "#d1d5db" : "#4b5563" }}
            >
              Triovex Solution empowers businesses to grow digitally through
              innovative web, app, and marketing solutions.
            </p>
          </m.div>

          {/* CARDS */}
          {showCards && (
            <m.div className="contents" initial="hidden" animate="visible" variants={containerVariants}>
              {/* Card 1 */}
              <m.div
                className="md:col-span-2 md:row-span-5 text-white p-4 rounded-lg flex flex-col text-left items-start"
                style={{ backgroundColor: cardBg }}
                variants={fadeIn}
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                  Digital Innovation Experts
                </h3>
                <p className="text-sm my-4" style={{ color: "#ffffff" }}>
                  Triovex Solution is at the cutting edge of digital innovation. We specialize in generative AI, ML, data visualization, and AI driven product design turning ideas into intelligent systems that create real business advantage. Our team does not just build technology; we design intelligent platforms that adapt, learn, and drive measurable growth.
                </p>
              </m.div>

              {/* Card 2 */}
              <m.div
                className="md:col-span-2 md:row-span-5 text-white p-4 rounded-lg flex flex-col text-left items-start"
                style={{ backgroundColor: cardBg }}
                variants={fadeIn}
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                  Trusted by Global Brands
                </h3>
                <p className="text-sm my-4" style={{ color: "#ffffff" }}>
                  Our clients span geographies and industries from startups to established enterprises. We partner with organizations seeking digital excellence, whether it’s AI integration, scalable cloud solutions, or performance driven marketing campaigns. Our ability to deliver smart, data informed digital ecosystems has earned the trust of global brands looking for reliable, scalable, and impactful technology partners.
                </p>
              </m.div>

              {/* Center Image */}
              <m.div
                className="md:col-span-4 md:row-span-5 md:col-start-3 md:row-start-3"
                variants={fadeIn}
              >
                <img
                  src={triovexBuilding}
                  alt="Triovex Building"
                  className="w-full h-full object-cover rounded-lg"
                />
              </m.div>

              {/* Card 3 */}
              <m.div
                className="md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-8 px-4 py-4 rounded-lg flex flex-col items-start text-left"
                style={{ backgroundColor: cardBg }}
                variants={fadeIn}
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                  Creative-Driven Team
                </h3>
                <p className="text-sm my-4" style={{ color: "#ffffff" }}>
                  At Triovex Solution, our international team blends creative mindset with technical expertise to deliver digital products that inspire engagement and drive business outcomes. From Al powered platforms to custom mobile applications and performance marketing campaigns, we fuse design thinking with data science to unlock real ROI for global clients. Our creative technologists solve real world problems, building solutions that are as thoughtful as they are impactful. This globally distributed workforce allows us to serve clients across time zones with consistency and quality.
                </p>
              </m.div>

              {/* Card 4 */}
              <m.div
                className="md:col-span-2 md:row-span-5 p-4 rounded-lg flex flex-col text-left items-start"
                style={{ backgroundColor: cardBg }}
                variants={fadeIn}
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                  Customer-Centric Approach
                </h3>
                <p className="text-sm my-4" style={{ color: "#ffffff" }}>
                  At Triovex Solution, we prioritize understanding our clients' unique needs to deliver tailored digital experiences. By integrating user feedback and market insights, we create intuitive designs and seamless functionality that drive customer satisfaction and business growth. Our commitment to innovation ensures that every solution is crafted with precision and adaptability.
                </p>
              </m.div>

              {/* Card 5 */}
              <m.div
                className="md:col-span-2 md:row-span-5 p-4 rounded-lg flex flex-col text-left items-start"
                style={{ backgroundColor: cardBg }}
                variants={fadeIn}
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                  End-to-End Services
                </h3>
                <p className="text-sm my-4" style={{ color: "#ffffff" }}>
                  We provide comprehensive digital transformation services, guiding you from initial ideation all the way through development, deployment, and optimization. Our offerings span Al, Machine Learning, predictive analytics, custom software, cloud native architecture, mobile apps, web platforms, API integration, SEO, SEM, and performance marketing. Whether you're overhauling legacy systems or launching new digital ventures, our goal is the same: a seamless, full stack solution tailored to your business and growth objectives.
                </p>
              </m.div>
            </m.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeAre;
