import React, { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NavLink } from "react-router-dom";
import cart1 from "../assets/hp10.png";
import cart2 from "../assets/service-cart2.png";
import cart3 from "../assets/service-cart3.png";
import cart4 from "../assets/hp11.png";
import cart5 from "../assets/seo.png";
import cart6 from "../assets/digitalmarketing.png";
import cart7 from "../assets/hp14.png";
import cart8 from "../assets/service-cart8.png";
import cart9 from "../assets/clude.png";

// 3D card components
export function CardContainer({ children }) {
  return <div className="[perspective:2000px] w-full h-full">{children}</div>;
}

export function CardBody({ children, className = "", style = {} }) {
  return (
    <div
      className={`relative w-full h-full transition-all duration-200 ease-linear rounded-xl ${className}`}
      style={style}
      onMouseMove={(e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = -(y / rect.height - 0.5) * 20;
        const rotateY = (x / rect.width - 0.5) * 20;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget;
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
      }}
    >
      {children}
    </div>
  );
}

export function CardItem({ children, className = "", translateZ = 0 }) {
  return (
    <div
      className={`will-change-transform transition-transform duration-200 ${className}`}
      style={{ transform: `translateZ(${translateZ}px)` }}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const [theme, setTheme] = useState("light");

  // watch for <html class="dark">
  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      setTheme(html.classList.contains("dark") ? "dark" : "light");
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    setTheme(html.classList.contains("dark") ? "dark" : "light");
    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

  // Animation variants
  const rowVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.1 },
    },
  };

  
const imageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.2 },
  },
};

  // Animated Card Component
  const AnimatedCard = ({ title, description, imageSrc }) => (
    <m.div variants={cardVariants}>
      <CardContainer>
        <CardBody
          className="rounded-2xl p-6 group/card w-full h-auto flex flex-col"
          style={{
            backgroundColor: isDark ? "#000000" : "#ffffff",
            border: `1px solid ${
              isDark ? "rgba(255,255,255,0.2)" : "#e5e7eb"
            }`,
            transition: "all 0.3s ease-in-out",
          }}
        >
          {/* Text */}
          <CardItem translateZ={60}>
            <m.div
              variants={textVariants}
              className="h-[180px] overflow-hidden flex flex-col justify-start"
            >
              <h3
                className="font-semibold text-xl"
                style={{ color: isDark ? "#ffffff" : "#111827" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed mt-1"
                style={{ color: isDark ? "#d1d5db" : "#4b5563" }}
              >
                {description}
              </p>
            </m.div>
          </CardItem>

          {/* Image */}
          <CardItem translateZ={120} className="w-full">
            
            <m.div variants={imageVariants}>
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg group-hover/card:scale-105 group-hover/card:shadow-2xl group-hover/card:shadow-black/30 transition-all duration-300"
            style={{
                  boxShadow: isDark
                    ? "0px 4px 20px rgba(255,255,255,0.05)"
                    : "0px 4px 20px rgba(0,0,0,0.1)",
                }}
          />
        </m.div> 
          </CardItem>
        </CardBody>
      </CardContainer>
    </m.div>
  );

  const services = React.useMemo(
    () => [
      {
        title: "AI & Machine Learning Solutions That Think Ahead",
        description:
          "Transform your business with intelligent systems that automate workflows, predict outcomes, and unlock real-time insights all powered by next-gen AI and machine learning.",
        imageSrc: cart1,
      },
      {
        title: "Custom Software That Fits, Scales & Performs",
        description:
          "We build powerful, secure, and scalable software tailored to your business from smart dashboards to complex systems, designed for performance and growth.",
        imageSrc: cart2,
      },
      {
        title: "Websites That Convert Design Meets Performance",
        description:
          "We craft fast, modern, responsive, SEO-ready websites that not only look stunning but drive engagement, boost conversions, and scale with your business.",
        imageSrc: cart3,
      },
      {
        title: "Mobile Apps Built to Engage, Scale & Win",
        description:
          "From sleek fintech to on-demand services we design powerful, user-friendly mobile apps that boost retention, drive revenue, and elevate your brand on every device.",
        imageSrc: cart4,
      },
      {
        title: "Rank Higher, Grow Faster, Win Organically",
        description:
          "We craft data-driven SEO strategies that boost visibility, skyrocket traffic, and keep your brand ahead on Google because great businesses deserve to be seen.",
        imageSrc: cart5,
      },
      {
        title: "Digital Campaigns That Convert, Scale & Win",
        description:
          "From strategy to storytelling, we craft performance-driven digital marketing campaigns that boost brand visibility, increase ROI, and turn clicks into loyal customers.",
        imageSrc: cart6,
      },
      {
        title: "Turn Scrolls into Sales with Strategic Social Media",
        description:
          "We manage your brand across platforms with eye-catching content, timely posting, and data-driven strategies that boost engagement, followers, and real business growth.",
        imageSrc: cart7,
      },
      {
        title: "Clicks That Convert Emails That Engage",
        description:
          "Drive instant traffic with high-performing PPC ads and keep your audience hooked with smart, personalized email campaigns designed to boost ROI and brand recall.",
        imageSrc: cart8,
      },
      {
        title: "Power Your Growth with Next-Gen Cloud Solutions",
        description:
          "We design secure, scalable, high-performance cloud systems that reduce costs, enhance agility, and boost collaboration, and from seamless migration to optimization, our expertise drives innovation and business efficiency.",
        imageSrc: cart9,
      },
    ],
    []
  );

  const chunkedServices = [];
  for (let i = 0; i < services.length; i += 3) {
    chunkedServices.push(services.slice(i, i + 3));
  }

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="services"
        className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-20 max-w-screen-4xl mx-auto relative overflow-x-hidden"
        style={{
          backgroundColor: isDark ? "#000000" : "#ffffff",
          color: isDark ? "#e5e5e5" : "#111111",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="lg:flex-1">
            <span
              className="inline-block mb-4 px-4 py-2 rounded-full text-xs font-medium"
              style={{
                backgroundColor: isDark
                  ? "rgba(6,95,70,0.4)"
                  : "rgba(49,55,25,0.1)",
                color: isDark ? "#6ee7b7" : "#111111",
              }}
            >
              Our Services
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-4"
              style={{ color: isDark ? "#ffffff" : "#111827" }}
            >
              AI-Powered Digital Services That Accelerate Growth
            </h2>
            <p
              className="text-base sm:text-lg max-w-2xl leading-relaxed mb-8"
              style={{ color: isDark ? "#d1d5db" : "#4b5563" }}
            >
              From intelligent automation to custom web apps and digital
              marketing, our services are built to scale your business faster,
              smarter, and stronger.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <NavLink
              to="/services"
              className="px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{
                backgroundColor: isDark ? "#ffffff" : "#313719",
                color: isDark ? "#111827" : "#ffffff",
                border: `1px solid #313719`,
              }}
            >
              Explore Service
            </NavLink>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-1">
          {chunkedServices.map((row, rowIndex) => (
            <m.div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={rowVariants}
            >
              {row.map((service, index) => (
                <AnimatedCard key={index} {...service} />
              ))}
            </m.div>
          ))}
        </div>
      </section>
    </LazyMotion>
  );
}
