"use client";
import React from "react";
import { X } from "lucide-react";

export default function DigitalMarketingModal({ onClose }) {
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
          Digital Marketing Solutions
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Turning Clicks into Customers, and Strategies into Success
        </p>

        {/* About Section (2 Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-gray-300">
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              About Services
            </h3>
            <p>
              We offer 360° digital marketing services designed to boost your
              online visibility, attract the right audience, and drive
              consistent growth. From SEO and social media to paid ads and
              email campaigns, we cover every touchpoint in your customer’s
              digital journey.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              About Triovex
            </h3>
            <p>
              Triovex Solution is a full-service digital marketing agency
              helping businesses scale faster in the digital space. Whether
              you're launching a new brand or revamping an existing strategy,
              our tailored campaigns ensure every marketing dollar delivers
              maximum ROI.
            </p>
          </div>
        </div>

        {/* Service Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400 mb-12">
          {[
            {
              title: "Google & Meta Ads That Convert",
              text: "We plan and run targeted ad campaigns across Google Search, Display, YouTube, Facebook, and Instagram. Our team ensures optimized ad spend, high CTRs, and real-time reporting for maximum lead generation and sales.",
            },
            {
              title: "Content Marketing That Builds Trust",
              text: "From blog writing and email campaigns to website copy and lead magnets, we create content that educates, informs, and converts—positioning your brand as a leader in your space.",
            },
            {
              title: "Email & WhatsApp Campaigns That Drive Action",
              text: "We craft automated email and WhatsApp funnels to nurture leads, recover carts, and re-engage customers—customized for e-commerce, service-based, or B2B brands.",
            },
            {
              title: "Performance Tracking & Analytics",
              text: "We provide transparent reports with KPIs, traffic breakdowns, ad performance, and conversion rates—so you always know what’s working and what’s not.",
            },
          ].map(({ title, text }, idx) => (
            <div key={idx}>
              <h4 className="text-white font-medium mb-1">{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* Why Triovex / Custom Strategy Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Custom Strategy Per Industry
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400">
            {[
              {
                title: "E-Commerce & Retail",
                text: "Targeted funnels and ad campaigns designed to drive traffic, increase conversions, and reduce cart abandonment.",
              },
              {
                title: "Service-Based Businesses",
                text: "Attract high-intent leads through local SEO, PPC, and review management that builds credibility.",
              },
              {
                title: "SaaS & Tech Startups",
                text: "End-to-end growth marketing strategies that scale MRR through demand gen and lead nurturing.",
              },
              {
                title: "Education, Healthcare, and Real Estate",
                text: "Bespoke marketing solutions designed to engage, educate, and convert niche audiences in regulated sectors.",
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
