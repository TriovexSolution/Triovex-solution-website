import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import { motion as m } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      name: "Nihar Gami",
      position: "Chef Technology Officer",
      image: "",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Nihar Gami",
      position: "Chef Technology Officer",
      image: "",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Nihar Gami",
      position: "Chef Technology Officer",
      image: "",
      instagram: "#",
      linkedin: "#",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="py-16 px-4 bg-white">
      {/* Header Animation */}
      <m.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
      >
        <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
          Team Member
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Meet the Minds Behind Our Magic
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          A passionate team of creators, coders, and strategists dedicated to
          building impactful digital solutions.
        </p>
      </m.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-8 lg:px-10">
        {teamMembers.map((member, index) => (
          <m.div
            key={index}
            className="flex flex-col w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn}
          >
            {/* Image Placeholder */}
            <div className="w-full h-[370px] bg-gray-200 rounded-lg mb-4"></div>

            {/* Name, Role & Social */}
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.position}</p>
              </div>

              <div className="flex space-x-4">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2E331F] text-white rounded-full flex items-center justify-center"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2E331F] text-white rounded-full flex items-center justify-center"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
