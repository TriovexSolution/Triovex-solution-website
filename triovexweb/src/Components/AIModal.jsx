"use client";
import React from "react";
import { X } from "lucide-react";

export default function AIModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-sm overflow-x-hidden">
      {/* ✅ Fixed Close Button - Top Center */}
      <button
        onClick={onClose}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/85 hover:bg-black/90 text-white p-4 rounded-full backdrop-blur-md transition"
      >
        <X size={24} />
      </button>

      {/* Scrollable Content */}
      <div
        className="relative max-w-6xl mx-auto w-full text-white px-6 py-16"
        style={{
          height: "90vh",
          overflowY: "scroll",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        {/* Hide Scrollbar (Webkit) */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mt-16 text-center">
          AI & Machine Learning Solution
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Empowering Smart Workspaces in the Digital Future
        </p>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-gray-300">
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              About Services
            </h3>
            <p>
              We build AI-powered solutions to automate, predict, and optimize
              key business processes. Our tools streamline decision-making,
              improve efficiency, and enhance customer experiences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              About Triovex
            </h3>
            <p>
              Triovex Solution is a next-gen IT & AI company that delivers
              intelligent, scalable, and customized automation across
              industries. From cutting-edge NLP and Computer Vision to
              voice-native AI assistants, our solutions help clients stay ahead.
            </p>
          </div>
        </div>

        {/* Service Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400 mb-12">
          {[
            {
              title: "RAG Chatbots That Think Like Experts",
              text: "Chatbots built using Retrieval Augmented Generation (RAG) to provide accurate and contextual human-like responses.",
            },
            {
              title: "NLP & Gen AI Engines",
              text: "Custom fine-tuned models that generate smart insights across NLP and conversational AI.",
            },
            {
              title: "Computer Vision That Sees More",
              text: "Detect quality, recognize objects, and analyze visual data using AI-powered CV pipelines.",
            },
            {
              title: "Voice-First Global Platforms",
              text: "Build multilingual voice-native AI platforms that work globally on mobile, desktop, and embedded devices.",
            },
            {
              title: "Seamless Integration & Deployment",
              text: "Our AI integrates with AWS, Azure, Google Cloud, Slack, Salesforce, and more. Scalable and ready.",
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
                title: "Domain-Specific AI Models",
                text: "Models tailored for your industry with more relevant insights.",
              },
              {
                title: "Voice-Ready Global Platforms",
                text: "Multilingual, multi-device, and ready for global deployment.",
              },
              {
                title: "From Prototype to Production Fast",
                text: "We don’t just prototype, we ship real AI that runs in production.",
              },
              {
                title: "Plug & Play Integrations",
                text: "AI that connects effortlessly with your existing tools and platforms.",
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
