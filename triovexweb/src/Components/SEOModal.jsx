    "use client";
    import React from "react";
    import { X } from "lucide-react";

    export default function SEOModal({ onClose }) {
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
            SEO Solutions
            </h2>
            <p className="text-center text-gray-300 mb-12">
            Boosting Visibility, Ranking, and Real Results
            </p>

            {/* About Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-gray-300">
            <div>
                <h3 className="text-lg font-medium text-white mb-2">
                About Services
                </h3>
                <p>
                We deliver result-driven SEO strategies that improve your online
                visibility, bring in qualified traffic, and convert visitors into
                customers. From technical audits to content optimization and link
                building—we cover it all to help you dominate search engine
                results.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-medium text-white mb-2">
                About Triovex
                </h3>
                <p>
                Triovex Solution provides full-scale SEO services for businesses
                aiming to grow organically. Whether you're a local business,
                e-commerce brand, or service provider, our tailored strategies in
                On-Page, Off-Page, and Technical SEO ensure long-term success on
                Google and beyond.
                </p>
            </div>
            </div>

            {/* Service Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400 mb-12">
            {[
                {
                title: "On-Page SEO That Connects",
                text: "We optimize everything from meta tags and keyword-rich content to URL structures and internal linking—ensuring your site is search-engine friendly and conversion-ready.",
                },
                {
                title: "Off-Page SEO That Builds Authority",
                text: "Our white-hat backlink strategies, guest posting, and brand mentions help build your domain authority, improve trust, and skyrocket rankings across your target keywords.",
                },
                {
                title: "Technical SEO That Powers Performance",
                text: "From crawl errors and site speed to mobile responsiveness and schema markup—we fix what’s under the hood to keep your website technically healthy and Google-approved.",
                },
                {
                title: "Local SEO That Brings Footfall",
                text: "Target nearby customers and rank in Google Maps and local searches with our location-specific optimization—ideal for clinics, shops, agencies, and service-based businesses.",
                },
                {
                title: "E-Commerce SEO That Sells",
                text: "We optimize product pages, category structures, site speed, and schema for online stores using platforms like Shopify and WooCommerce to bring in organic sales on autopilot.",
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
                    title: "Tailored SEO for Every Business",
                    text: "From local stores to global e-commerce brands—we create unique SEO strategies that fit your goals.",
                },
                {
                    title: "Transparent Monthly Reporting",
                    text: "Know exactly how your SEO is performing with clear reports showing keyword movement, backlinks, and traffic growth.",
                },
                {
                    title: "White-Hat Tactics Only",
                    text: "We follow ethical SEO practices that bring sustainable results without risking penalties.",
                },
                {
                    title: "End-to-End SEO Management",
                    text: "From audits to implementation and monitoring—we manage every part of your SEO journey.",
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
