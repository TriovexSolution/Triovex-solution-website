"use client";
import React from "react";
import { X } from "lucide-react";

export default function WebDevModal({ onClose }) {
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
          Website Design & Development
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Building Future-Ready Websites with Code & Commerce
        </p>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-gray-300">
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              About Services
            </h3>
            <p>
              We craft high-performance, scalable, and visually stunning
              websites using modern JavaScript frameworks. Our custom-coded
              solutions are designed for businesses that need more than just a
              template. Alongside this, we offer Shopify development for fast,
              powerful e-commerce setups—combining flexibility with
              conversion-focused design.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              About Triovex
            </h3>
            <p>
              Triovex Solution is a full-stack development company focused on
              building robust, user-centric websites. From dynamic platforms
              built on React, Next.js, Node.js, and Express.js to flexible
              Shopify storefronts, our solutions deliver speed, scalability, and
              business impact. We help brands stand out in today’s digital-first
              world.
            </p>
          </div>
        </div>

        {/* Service Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400 mb-12">
          {[
            {
              title: "Custom Websites with Code Precision",
              text: "We specialize in developing clean-coded, fast, and functional websites using JavaScript technologies like React, Next.js, and Node.js. Tailored to your exact needs, our solutions go beyond themes to deliver true digital craftsmanship.",
            },
            {
              title: "Shopify Stores That Sell More",
              text: "Launch or scale your online store with our Shopify services. We build high-converting e-commerce sites with custom themes, optimized product pages, and smooth checkout flows—backed by performance and design.",
            },
            {
              title: "Web Portals & Business Dashboards",
              text: "From admin panels to user dashboards and internal portals, we develop secure and intelligent web platforms using JavaScript frameworks. Role-based access, data handling, and seamless backend integration come standard.",
            },
            {
              title: "UI/UX That Matches Functionality",
              text: "We blend modern UI/UX design with real user behavior insights. Every page, animation, and interaction is crafted to boost engagement—delivered via Figma prototypes and responsive layouts.",
            },
            {
              title: "Seamless Integration & Deployment",
              text: "We integrate with APIs, payment gateways, CRM tools, and marketing platforms. Our dev team ensures smooth deployment on platforms like Vercel, AWS, or your own server—CI/CD ready.",
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
                title: "Code-First, Not Theme-Limited",
                text: "We build from scratch—no templates—resulting in highly tailored solutions that align with your brand and business logic.",
              },
              {
                title: "Full-Stack Development Expertise",
                text: "Our team brings deep experience across frontend and backend stacks, ensuring performance and security go hand-in-hand.",
              },
              {
                title: "Scalable for Growth",
                text: "We build with the future in mind—whether you start small or plan for enterprise expansion, our code grows with you.",
              },
              {
                title: "Conversion-Focused Design",
                text: "We focus on UX/UI that looks great and performs even better—guiding users to action and improving your bottom line.",
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
