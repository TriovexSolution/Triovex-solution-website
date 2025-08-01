"use client";
import React from "react";
import { X } from "lucide-react";

export default function AppDevModal({ onClose }) {
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
          Application Development Solution
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Creating Scalable, Smart, and Seamless Digital Apps
        </p>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-gray-300">
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              About Services
            </h3>
            <p>
              We develop cross-platform and native mobile applications that are
              fast, user-friendly, and built to scale. From internal business
              tools to consumer-facing apps, our solutions are engineered for
              performance, security, and engagement.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              About Triovex
            </h3>
            <p>
              Triovex Solution is a leading app development company specializing
              in JavaScript-based frameworks like React Native and Flutter,
              along with native Android/iOS development. Whether it's a startup
              idea or enterprise solution, we help businesses turn concepts into
              fully functional, user-loved applications.
            </p>
          </div>
        </div>

        {/* Service Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400 mb-12">
          {[
            {
              title: "Custom Mobile Apps That Scale",
              text: "We build tailor-made mobile applications using technologies like React Native and Flutter, ensuring high performance across both Android and iOS devices. From MVPs to enterprise-grade platforms—we code it all.",
            },
            {
              title: "Smart Business Apps",
              text: "Automate operations, track metrics, and manage workflows with custom-built business apps. Ideal for internal use, sales teams, operations, and customer service—all fully integrated with your backend systems.",
            },
            {
              title: "E-Commerce & Service Apps",
              text: "Develop intuitive mobile storefronts or service booking apps with smooth navigation, real-time updates, and secure payment integrations. Designed to convert users into loyal customers.",
            },
            {
              title: "Real-Time Features & APIs",
              text: "Enable chat, notifications, live tracking, media upload, and third-party API integrations like payment gateways, CRM, and logistics—all built with security and scalability in mind.",
            },
            {
              title: "UI/UX That Keeps Users Engaged",
              text: "Our design-first approach ensures that every app looks stunning and feels intuitive. We craft wireframes and interactive prototypes in Figma before jumping into development.",
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
                title: "Cross-Platform Expertise",
                text: "We build once, run everywhere—with React Native and Flutter to support iOS and Android together.",
              },
              {
                title: "Enterprise-Ready Architecture",
                text: "Our apps are built for scale and security using best practices in performance optimization and code structure.",
              },
              {
                title: "Design That Drives Retention",
                text: "Beautiful and functional UI/UX designed to retain users, reduce churn, and increase satisfaction.",
              },
              {
                title: "Post-Launch Support & Growth",
                text: "We support your app even after launch—updates, maintenance, bug fixes, and feature enhancements.",
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
