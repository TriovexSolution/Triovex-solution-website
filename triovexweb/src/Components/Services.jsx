import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NavLink } from "react-router-dom";
import cart1 from "../assets/service-cart1.png";
import cart2 from "../assets/service-cart2.png";
import cart3 from "../assets/service-cart3.png";
import cart4 from "../assets/service-cart4.png";
import cart5 from "../assets/service-cart5.png";
import cart6 from "../assets/service-cart6.png";
import cart7 from "../assets/service-cart7.png";
import cart8 from "../assets/service-cart8.png";

// 3D card components
export function CardContainer({ children }) {
  return <div className="[perspective:2000px] w-full h-full">{children}</div>;
}

export function CardBody({ children, className = "" }) {
  return (
    <div
      className={`relative w-full h-full transition-all duration-200 ease-linear rounded-xl ${className}`}
      onMouseMove={(e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = -(y / rect.height - 0.5) * 10;
        const rotateY = (x / rect.width - 0.5) * 10;
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
      transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 1.0 },
    },
  };

  const AnimatedCard = ({ title, description, imageSrc }) => (
    <CardContainer>
      <CardBody className="bg-white dark:bg-black border border-gray-100 dark:border-white/[0.2] rounded-2xl p-6 group/card w-full h-auto">
        <CardItem translateZ={60}>
          <m.div variants={textVariants}>
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-3">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-neutral-300 leading-relaxed mb-6">
              {description}
            </p>
          </m.div>
        </CardItem>

        <CardItem translateZ={120} className="w-full">
          <m.div variants={imageVariants}>
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-48 object-cover rounded-t-lg group-hover/card:scale-105 group-hover/card:shadow-2xl group-hover/card:shadow-black/30 transition-all duration-300"
            />
          </m.div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );

  const services = [
  {
    title: "AI & Machine Learning",
    description:
      "Build smarter systems with AI that automate, predict, and optimize business processes effortlessly.",
    imageSrc: cart1,
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored software built for your exact business needs — scalable, secure, and efficient.",
    imageSrc: cart2,
  },
  {
    title: "Website Design & Development",
    description:
      "Modern, responsive websites crafted to impress, engage, and convert your audience.",
    imageSrc: cart3,
  },
  {
    title: "Mobile & Web Apps",
    description:
      "Launch intuitive mobile and web apps that your users love and your business benefits from.",
    imageSrc: cart4,
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your visibility with search-first strategies that drive traffic and improve rankings.",
    imageSrc: cart5,
  },
  {
    title: "Digital Marketing",
    description:
      "From content to conversion — we create digital campaigns that bring measurable growth.",
    imageSrc: cart6,
  },
  {
    title: "Social Media Management",
    description:
      "Engage your audience with creative content, timely posts, and smart strategies that grow your brand.",
    imageSrc: cart7,
  },
  {
    title: "Paid Ads & Email Marketing",
    description:
      "Target the right audience with PPC and stay top-of-mind with personalized email campaigns.",
    imageSrc: cart8,
  },
];


  const chunkedServices = [];
  for (let i = 0; i < services.length; i += 3) {
    chunkedServices.push(services.slice(i, i + 3));
  }

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="services"
        className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-20 max-w-screen-4xl mx-auto relative overflow-x-hidden"
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="lg:flex-1">
            <span className="inline-block mb-4 px-4 py-2 rounded-full text-xs font-medium bg-[#313719]/10 text-black">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-4 text-gray-900">
              Smart Digital Services That Drive Business Forward
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
              Our services are designed to help you grow faster, smarter, and
              stronger in the digital space.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <NavLink
              to="/services"
              className="bg-[#313719] text-white hover:bg-white hover:text-[#313719] border border-[#313719] px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Service
            </NavLink>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {chunkedServices.map((row, rowIndex) => (
            <m.div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
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
