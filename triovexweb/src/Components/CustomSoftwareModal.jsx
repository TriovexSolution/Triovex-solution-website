"use client";
import React from "react";
import { X } from "lucide-react";

export default function CustomSoftwareModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-sm">
      <div
        className="relative max-w-6xl w-full bg-transparent text-white px-6 py-16"
        style={{
          height: "90vh",
          overflowY: "scroll",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        {/* Hide scrollbar */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/85 hover:bg-black/90 text-white p-5 rounded-full backdrop-blur-md transition mb-4"
        >
          <X size={24} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mt-10 text-center">
          Custom Software Development
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Solving Complex Problems with Tailor-Made Software
        </p>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-gray-300">
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              About Services
            </h3>
            <p>
              We design and develop powerful, secure, and scalable custom
              software solutions that streamline operations, enhance
              productivity, and drive digital transformation. Built around your
              unique business needs—no bloat, just results.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              About Triovex
            </h3>
            <p>
              Triovex Solution is a trusted software development company with
              expertise in building customized tools, platforms, and systems
              using modern technologies. Whether it’s an internal dashboard,
              CRM, ERP, or a cloud-based product—we develop software that
              empowers your business to scale with confidence.
            </p>
          </div>
        </div>

        {/* Service Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400 mb-12">
          {[
            {
              title: "End-to-End Custom Development",
              text: "From discovery and UI/UX design to backend architecture and deployment—we handle the full lifecycle of your custom software. Every feature is tailored to your workflows, not the other way around.",
            },
            {
              title: "Technologies We Use",
              text: "We leverage cutting-edge stacks like Node.js, React, Next.js, PHP Laravel, Express.js, MongoDB, and MySQL to build fast, secure, and future-ready solutions.",
            },
            {
              title: "Enterprise Portals & Internal Tools",
              text: "We create role-based systems, admin panels, inventory managers, HR tools, and business intelligence dashboards—built to reduce manual work and centralize operations.",
            },
            {
              title: "Cloud-Based Architecture",
              text: "Our software solutions are designed to be scalable and cloud-ready, using platforms like AWS, Azure, and DigitalOcean. Enjoy speed, security, and flexibility without infrastructure headaches.",
            },
            {
              title: "API-First Approach",
              text: "We ensure seamless integration with third-party tools, legacy systems, and external platforms via robust API development—empowering data flow and automation across your tech stack.",
            },
          ].map(({ title, text }, idx) => (
            <div key={idx}>
              <h4 className="text-white font-medium mb-1">{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* Why Triovex Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Why Triovex?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400">
            {[
              {
                title: "Tailored to Your Business",
                text: "Every solution is purpose-built to align with your internal processes and goals—no one-size-fits-all.",
              },
              {
                title: "Modern, Maintainable Code",
                text: "Built using best practices and latest frameworks so your software is easy to scale and maintain.",
              },
              {
                title: "Rapid Development, Real Results",
                text: "We move fast without compromising on quality—delivering working software on time.",
              },
              {
                title: "Dedicated Support & Growth",
                text: "Ongoing technical support, feature updates, and performance tuning as your business evolves.",
              },
            ].map(({ title, text }, i) => (
              <div key={i}>
                <h4 className="text-white font-medium mb-1">{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
