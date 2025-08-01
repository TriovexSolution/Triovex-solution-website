"use client";
import React from "react";
import { X } from "lucide-react";

export default function PaidAdsEmailModal({ onClose }) {
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

        {/* Close Button - top center */}
        <button
          onClick={onClose}
          className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/85 hover:bg-black/90 text-white p-5 rounded-full backdrop-blur-md transition mb-4"
        >
          <X size={24} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mt-10 text-center">
          Paid Ads & Email Marketing
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Reach the Right Audience. Engage Them. Convert Them.
        </p>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-gray-300">
          <div>
            <h3 className="text-lg font-medium text-white mb-2">About Services</h3>
            <p>
              We help brands grow with a powerful combo of targeted paid advertising and
              strategic email marketing. From generating leads through Google and Meta ads
              to nurturing those leads via automated email campaigns—we cover the full
              customer journey to drive conversions and ROI.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">About Triovex</h3>
            <p>
              At Triovex Solution, we combine creative storytelling with performance
              marketing. Our team designs and executes data-driven campaigns across ad
              platforms and email tools, helping businesses increase visibility, generate
              quality leads, and build lasting customer relationships.
            </p>
          </div>
        </div>

        {/* Paid Ads Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400 mb-12">
          {[
            {
              title: "Google Ads (Search, Display, Shopping, YouTube)",
              text: "Capture high-intent users with optimized campaigns using proven keyword strategies, compelling ad copies, and smart bidding.",
            },
            {
              title: "Meta Ads (Facebook & Instagram)",
              text: "Reach your ideal audience with scroll-stopping creatives, detailed targeting, and effective retargeting to maximize conversions.",
            },
            {
              title: "Custom Funnels & A/B Testing",
              text: "We build full-funnel ad strategies and continuously test visuals, copy, and CTAs for better performance at lower costs.",
            },
            {
              title: "Live Analytics & Reporting",
              text: "Transparent reporting with performance breakdowns, ad spend tracking, ROI insights, and clear next-step suggestions.",
            },
          ].map(({ title, text }, idx) => (
            <div key={idx}>
              <h4 className="text-white font-medium mb-1">{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* Email Marketing Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Email Marketing That Builds Loyalty
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400">
            {[
              {
                title: "Promotional & Nurture Campaigns",
                text: "Beautifully designed emails that engage your subscribers—whether you’re launching a new product or running a festive offer.",
              },
              {
                title: "Automated Funnels",
                text: "Set up smart journeys like welcome emails, cart abandonment sequences, re-engagement emails, and more.",
              },
              {
                title: "High-Converting Designs & Copy",
                text: "Every email is mobile-friendly, on-brand, and backed by persuasive copy and strong CTAs.",
              },
              {
                title: "Performance Optimization",
                text: "Track open rates, click-throughs, conversions, and run A/B tests to improve campaign results month over month.",
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
