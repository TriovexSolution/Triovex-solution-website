"use client";
import React from "react";
import { X } from "lucide-react";

export default function SocialMediaModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-sm overflow-x-hidden">
      {/* ✅ Fixed Close Button (Top Center) */}
      <button
        onClick={onClose}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/85 hover:bg-black/90 text-white p-5 rounded-full backdrop-blur-md transition"
      >
        <X size={24} />
      </button>

      {/* ✅ Scrollable Content Section */}
      <div
        className="relative max-w-6xl mx-auto w-full text-white px-6 py-16"
        style={{
          height: "90vh",
          overflowY: "scroll",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        {/* ✅ Hide Scrollbar for WebKit */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mt-16 text-center">
          Social Media Handling
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Building Brands, Engaging Audiences, and Driving Real Growth
        </p>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-gray-300">
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              About Services
            </h3>
            <p>
              We manage your brand’s presence across platforms like Instagram,
              Facebook, LinkedIn, and more—creating content that connects, grows
              followers organically, and drives meaningful engagement. Our
              strategies turn social media into a powerful lead and sales
              channel.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              About Triovex
            </h3>
            <p>
              Triovex Solution helps businesses build an active, consistent, and
              impactful social presence. From creatives and captions to reels and
              reporting, we handle everything so you can focus on your business
              while we grow your digital community.
            </p>
          </div>
        </div>

        {/* Service Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400 mb-12">
          {[
            {
              title: "Content That Connects",
              text: "We create visually striking posts, stories, carousels, and reels tailored to your audience. Every design reflects your brand’s tone, values, and message—crafted for engagement and shareability.",
            },
            {
              title: "Account Growth & Strategy",
              text: "We implement proven strategies to grow your followers organically, increase reach, and boost engagement through smart content scheduling, trending formats, and hashtag planning.",
            },
            {
              title: "Reels & Short Videos That Go Viral",
              text: "Our in-house creative team produces high-quality, trendy short-form videos that catch attention, showcase your offerings, and build stronger emotional connections with your audience.",
            },
            {
              title: "Ad-Ready Profiles",
              text: "We set up and optimize your accounts to be ready for paid campaigns with complete bio optimization, call-to-action buttons, highlights, and content grids that convert visitors into leads.",
            },
          ].map(({ title, text }, idx) => (
            <div key={idx}>
              <h4 className="text-white font-medium mb-1">{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* Reports Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Monthly Calendar & Reports
          </h3>
          <div className="text-gray-400">
            <p>
              We provide a clear monthly content calendar, daily post planning,
              and performance reports that show reach, clicks, shares, and what’s
              working—so you’re always in the loop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
