"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  FileText,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import Tilt from "react-parallax-tilt";

import AIwork from "../assets/workAI.png";
import Mchem from "../assets/mchem.png";
import trifon from "../assets/trifon.png";
import socialmedia4 from "../assets/hp15.png";
import nsarco from "../assets/nsarco.png";
import viralpep from "../assets/viralpep.png";
import rannutsav from "../assets/rannutsav.png";
import irgcayman from "../assets/irgcayman.png";
import dreampod from "../assets/dreampod.png";
import rydeathon from "../assets/rydeathon.png";
import etickets from "../assets/etickets.png";

const worksData = [
  {
    id: 1,
    title: "RAG Chatbot for Irish Tech Company",
    description:
      "Smart Retrieval-Augmented Generation (RAG) chatbot for real-time Q&A from internal documents and PDFs.",
    image: AIwork,
    details: `🔹 Client: Tankbuilder, Ireland  
🔹 Duration: 1 Week  
🔹 Tech Stack: Python • LangChain • OpenAI • Pinecone  

We engineered and deployed a fast, intelligent RAG chatbot that enables real-time Q&A using company documents and uploaded PDFs. Built within just 7 days, the chatbot streamlines internal knowledge discovery and delivers instant insights.

Key Features:
1. Embedded smart document search
2. Seamless OpenAI GPT integration
3. Instant response generation
4. Web-based interface with real-time chat support

Impact:
1. Reduced customer support load
2. Accelerated internal knowledge access
3. Fast delivery cycle impressed stakeholders`,
  },
  {
    id: 2,
    title: "Industrial Website for Mchem – Bulk Chemical Manufacturer",
    description:
      "High-performance corporate site with product architecture and SEO for India's leading bulk chemical manufacturer.",
    image: Mchem,
    details: `🔹 Client: Mchem Chemicals Pvt Ltd  
🔹 Duration: 10 Days  
🔹 Tech Stack: React • Node.js • Bootstrap  

We built a powerful, performance-optimized website for Mchem, a leading Indian manufacturer in bulk chemical production. Designed for high-volume B2B transactions, the site highlights Mchem's industrial credibility with smart content and custom architecture.

Key Product Categories:
1. Sodium & Potassium Silicates (Liquid & Glass)
2. Copper Bromide, Calcium Carbonate Powder
3. LABSA (Acid Slurry), CMT Powder & Liquid Detergents
4. Guar Gum, Waterproofing Chemicals

Build Highlights:
1. Custom product showcase
2. Smart inquiry forms with validation
3. SEO-optimized content
4. Fully responsive and fast`,
    link: "https://mchemmanufacturing.com/",
  },
  {
    id: 3,
    title: "Dynamic E-Commerce Platform for Trifon Jewels",
    description:
      "Premium jewellery e-commerce platform with real-time gold & diamond pricing sync and custom admin logic.",
    image: trifon,
    details: `🔹 Client: Trifon Jewels – Premium Jewellery Brand  
🔹 Duration: 14 Days  
🔹 Tech Stack: React • Tailwind CSS • Node.js  

We built a luxury-grade, fully dynamic e-commerce website for Trifon Jewels — with live pricing logic based on market rates.

Key Innovations:
1. Real-time gold price sync
2. Global diamond rate control
3. Intelligent admin pricing engine
4. Responsive UI for premium audience
5. Smooth checkout & payment integration`,
  },
  {
    id: 4,
    title: "Social Media That Speaks, Sells & Sticks",
    description:
      "We transform your brand's social presence into scroll-stopping experiences that drive real connection and conversions.",
    image: socialmedia4,
    details: `🔹 Client: Multi-industry Brands (Fashion, Tech, Chemicals, Food, Jewellery)  
🔹 Duration: Project-based & Retainer  
🔹 Focus Areas: Content Strategy • Visual Branding • Conversion Design  

Key Highlights:
1. Minimal yet magnetic designs
2. High-converting reels & posts
3. Emotion-led storytelling
4. Weekly calendars & ad creatives

Result: Clean, consistent, and commercially impactful social media presence.`,
  },
  {
    id: 5,
    title: "NSARCO Platform Revamp & Registration Streamline",
    description:
      "Full-scale redesign of NSARCO's platform delivering a modern, secure, and efficient registration process for ESA and service-dog certifications.",
    image: nsarco,
    details: `🔹 Client: National Service Animal Registry (NSARCO), USA  
🔹 Duration: 3-Week Full-Scale Overhaul  
🔹 Tech Stack: React • Node.js • PostgreSQL • AWS • Elasticsearch  

We redesigned and rebuilt NSARCO's legacy platform to provide a modern, secure, and efficient registration experience. This revamp transformed their outdated Perl-based system into a dynamic portal with real-time database search and seamless kit ordering — enhancing both usability and maintainability.

Key Features:
1. Responsive React-based user interface for ESA and service-dog registrations
2. Fast, accurate search via Elasticsearch-powered National Service Animal Database
3. Secure authentication, order tracking, and product catalog (kits, vests, ID cards)
4. Cloud-hosted infrastructure on AWS ensuring high reliability and scalability

Impact Delivered:
1. Faster Onboarding: 50% reduction in user registration time and streamlined kit purchases
2. Improved UX: Significant growth in session duration and database usage
3. Business-Ready: Scalable, maintainable architecture that supports future growth and integrations

This project highlights Triovex's expertise in building secure, performant, and user-first digital platforms perfectly aligned with enterprise-grade needs and mission-critical user journeys.`,
    link: "https://www.nsarco.com/",
  },
  {
    id: 6,
    title: "Viralpep All-in-One Social Media Scheduling Ecosystem",
    description:
      "Enhanced Viralpep's platform with advanced content creation, scheduling, collaboration, and real-time analytics for smarter multi-platform social media management.",
    image: viralpep,
    details: `🔹 Client: Viralpep (Social Media Management SaaS)  
🔹 Duration: 2-Week Feature Launch & Optimization Sprint  
🔹 Tech Stack: React • Node.js • PostgreSQL • REST APIs • AWS  

We powered up Viralpep's platform, enhancing its content creation, scheduling, and analytics modules to drive smarter social media management across top platforms. The project focused on simplifying multi-platform workflows while boosting visibility and collaboration.

Key Features:
1. Unified dashboard for creating, scheduling, and publishing across Facebook, Instagram, Twitter, LinkedIn & Pinterest
2. Role-based team collaboration and content approval workflow
3. Real-time analytics with engagement insights, audience demographics, and live performance tracking
4. Multi-timezone automation and post-preview to ensure optimal post timing and appearance

Impact Delivered:
1. Efficiency Boost: Streamlined publishing workflow, reducing time spent on manual posting
2. Team Scalability: Seamless agency-level account and team management capabilities
3. Data-Driven Strategy: Live analytics and reporting empowered users to optimize campaigns in real-time

This project underscores Triovex's expertise in building scalable, intuitive, and performance-driven SaaS platforms tailored for modern digital marketers.`,
    link: "https://www.viralpep.com/",
  },
  {
    id: 7,
    title: "Rann Utsav Tent City Portal & Festival Experience Platform",
    description:
      "Redesigned and integrated a booking-enabled festival portal for Gujarat Tourism's iconic Rann Utsav, enhancing global reach, engagement, and conversions.",
    image: rannutsav,
    details: `🔹 Client: Rann Utsav (Gujarat Tourism Initiative)  
🔹 Duration: 3-Week End-to-End Redesign & Booking Integration  
🔹 Tech Stack: Next.js • Node.js • PostgreSQL • AWS • ElasticSearch  

We transformed the Rann Utsav site into a vibrant, user-friendly portal that invites global visitors to explore the White Desert Tent City, book packages, and discover cultural festivities with ease and elegance.

Key Features:
1. Visually immersive homepage showcasing festival dates (Oct–Mar), attractions, and booking options
2. Dynamic Packages section detailing duration, pricing tiers (e.g., Deluxe to Rajwadi Suites), and special date availability
3. Interactive maps and itineraries guiding visitors to local highlights like Tent City, Dholavira, and cultural tours
4. Seamless booking workflows with secure payment gateway, inquiry forms, and automated confirmations
5. Mobile-first responsive design ensuring performance and clarity across devices

Impact Delivered:
1. Improved Engagement: Clear visuals and intuitive booking features enhanced time-on-site and reduced bounce rates
2. Higher Conversions: Optimized package listings and call-to-action buttons significantly increased bookings and inquiries
3. Scalable & Secure: Built on a robust stack for seasonal traffic surges and future feature expansions`,
    link: "https://www.rannutsav.com/",
  },
  {
    id: 8,
    title: "IRG Cayman Luxury Real Estate & Global Reach",
    description:
      "Full-scale redesign of IRG Cayman's luxury real estate platform, delivering a sophisticated, high-performance experience for global property buyers and investors.",
    image: irgcayman,
    details: `🔹 Client: IRG – International Realty Group, Cayman Islands  
🔹 Duration: 4-Week Full-Scale Website Redesign  
🔹 Tech Stack: Next.js • Node.js • PostgreSQL • AWS • Elasticsearch  

We revamped IRG Cayman's digital presence to reflect its prestigious standing among global luxury property players. From showcasing high-end listings to delivering seamless user experiences, we crafted a platform that embodies sophistication, performance, and international appeal.

Key Features:
1. High-impact property listings covering luxury homes, waterfront condos, commercial spaces, developments, and premium land plots
2. Powerful search capabilities with location filters across key Cayman markets like Seven Mile Beach, South Sound, Grand Harbour, and the Sister Islands
3. Dedicated sections for appraisals, relocations, landlord/tenant services, and investment consulting for a unified user journey
4. Global brand integration through partnerships like LeadingRE, Luxury Portfolio International, and CIREBA for extended audience outreach

Impact Delivered:
1. Elevated Brand Presence: Enhanced user trust and engagement through an intuitive and visually rich interface
2. Better Discoverability: Advanced filtering and streamlined navigation empowered users to find ideal properties effortlessly
3. Global Reach: Membership alignments allowed IRG to expand its digital footprint and connect with luxury buyers worldwide
4. Scalable & Secure: Built on robust infrastructure optimized for performance and expanding inventory

This project underscores our expertise in crafting real estate platforms that balance aesthetics, usability, and strategy — positioning IRG as a top-tier global real estate brand.`,
    link: "https://www.irgcayman.com/",
  },
  {
    id: 9,
    title: "MyDreamPod Dual-Comfort Mattresses & Sleep Essentials",
    description:
      "Revamped MyDreamPod's e-commerce platform to spotlight dual-firmness mattresses, bundled sleep products, and seamless purchasing with enhanced trust and usability.",
    image: dreampod,
    details: `🔹 Client: MyDreamPod (India-based bedding brand)  
🔹 Duration: 2-Week UX Revamp & E-Commerce Optimization  
🔹 Tech Stack: React • Node.js • PostgreSQL • AWS • Stripe/API Integrations  

We revitalized MyDreamPod's online storefront to highlight its unique reclined comfort offerings. Our redesign emphasizes the dual-firmness mattress, sleep bundles, and hassle-free purchasing with improved visuals, trust signals, and frictionless checkout.

Key Features:
1. Rotatable mattresses showcasing both "medium soft" and "medium firm" comfort preferences
2. Clear trust badges: "30 Nights Risk-Free Trial," "Free Delivery," "10-Year Warranty," and "Custom Sizes"
3. Bundled product offerings like reversible mattress sets with pillows and comforters
4. Optimized mobile-first shopping with intuitive browsing, rapid "Add to Cart," and seamless checkout flows
5. Service locators and FAQs to support customers across major Indian cities (Mumbai, Delhi, Bangalore, Chennai, and more)

Impact Delivered:
1. Boosted Sales Conversions: Intuitive product presentation and trust badges reduced bounce rates and increased add-to-cart actions
2. Enhanced User Engagement: Bundles and visually clear features created a more confident and satisfying browsing experience
3. Operational Scalability: Built on a robust backend that supports custom sizing, product bundles, and future platform enhancements`,
    link: "https://www.mydreampod.com/",
  },
  {
    id: 10,
    title: "Ryde-A-Thon 24-Hour Charity Challenge & Community Engagement",
    description:
      "Enhanced the digital platform for Cayman Islands' annual 24-hour cycling and running fundraiser, enabling seamless registration, live donation tracking, and engaging event storytelling.",
    image: rydeathon,
    details: `🔹 Client: Ryde Cayman & HLB Berman Fisher (Cayman Islands)  
🔹 Duration: Annual 6th-Year Event Planning & Launch  
🔹 Tech Stack: Custom CMS • Secure Donation Platform • Event Scheduler • Responsive Design  

We elevated the digital experience for Ryde-A-Thon, the Cayman Islands' annual 24-hour cycling/running fundraiser, ensuring effortless team registration, real-time fundraising tracking, and an immersive event showcase across devices.

Key Features:
1. Live fundraising counter highlighting over CI$192,585 raised
2. Event details including date/time (Feb 21, 4:30 PM – Feb 22, 6:30 PM), location (Camana Bay), and charitable beneficiary (Addison Kelly Mental Health Education Fund)
3. Flexible team creation and participation options ("Create New Team" / "Join A Team") for seamless community engagement
4. Inclusive event presentation blending fitness, family-friendly activities, Zwift league, and a final outdoor celebration

Impact Delivered:
1. Streamlined Participation: Simplified team login and onboarding boosted user engagement and registration ease
2. Real-Time Transparency: Live fundraising totals fostered trust, urgency, and visibility enhancing donor enthusiasm
3. Community Reach: By spotlighting inclusive activities and compelling storytelling, the site drove higher involvement and awareness
4. Future-Ready Platform: Designed for annual scalability, the platform supports increasing traffic, dynamic updates, and new charitable partnerships

This project highlights our ability to build event-driven platforms that combine powerful storytelling, intuitive UX, and technical resilience — making community fundraising both seamless and compelling.`,
    link: "https://www.rydeathon.com/",
  },
  {
    id: 11,
    title: "eTickets.ca Canada's Vast Ticketing Network",
    description:
      "Enhanced eTickets.ca into a dynamic hub for sports, concerts, and theatre tickets, focusing on better discoverability, seamless booking, and secure transactions.",
    image: etickets,
    details: `🔹 Client: eTickets.ca (Canada's online entertainment ticketing portal)  
🔹 Duration: 2-Week Platform Enhancement & UX Upgrade  
🔹 Tech Stack: React • Node.js • PostgreSQL • Elasticsearch • Secure Payment Gateway  

We elevated eTickets.ca, transforming it into a dynamic, user-friendly hub for sports, concerts, and theatre tickets. The upgrade focused on increasing visibility, simplifying booking, and ensuring trust in every transaction.

Key Features:
1. Massive ticket inventory across sports (NFL, NBA, CFL), concerts, Broadway, and global events
2. Powerful search and filter options by city including Toronto, Montreal, Vancouver, Calgary, New York, Los Angeles, and more
3. "100% Ticket Guarantee" promise: verified, authentic, secure, and timely delivery features highlighted
4. Mobile ticket access, interactive seat maps, and real-time event updates for seamless purchasing

Impact Delivered:
1. Enhanced Discoverability: Optimized filtering and search elevated user journeys and lowered bounce rates
2. Trust & Transparency: Prominent guarantees and secure UX boosted credibility in a crowded resale landscape
3. Cross-Platform Usability: Mobile-first design with real-time features improved booking speed and convenience`,
    link: "https://www.etickets.ca/",
  },
];

function CarouselCard({ work, onClick, index }) {
  const cardColors = [
    "#E6EBF5",
    "#F0F0EB",
    "#DFF7EE",
    "#FFEAD1",
    "#E1F3E6",
    "#F4E3F7",
    "#DEF2F6",
    "#FBE2EB",
    "#FBF4E2",
    "#E2F4E6",
    "#EDE2F7",
  ];

  return (
    <motion.div
      className="flex-shrink-0 w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl px-2 sm:px-4"
      initial={false}
      animate={false}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareBorderRadius="16px"
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1000}
        transitionSpeed={1000}
        className="w-full"
      >
        <div
          style={{ backgroundColor: cardColors[index] }}
          className="rounded-2xl px-4 sm:px-6 pt-6 pb-8 sm:pb-10 shadow-xl w-full mx-auto flex flex-col h-[520px] transition-all duration-300 border border-white/10 dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 sm:gap-6">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 mb-2 sm:mb-3 leading-tight">
                {work.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-2xl">
                {work.description}
              </p>
            </div>
            <div className="flex flex-row justify-center lg:justify-end items-center gap-2 sm:gap-4 mt-3 lg:mt-0 flex-wrap">
              <button
                onClick={() => onClick(work)}
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-medium flex items-center gap-1 sm:gap-2 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                See Details
              </button>
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-medium flex items-center gap-1 sm:gap-2 transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                  Visit Live
                </a>
              )}
            </div>
          </div>

          {/* Image Container */}
          <div className="flex justify-center rounded-3xl overflow-hidden mt-4 sm:mt-6 flex-grow min-h-[300px]">
            <img
              loading="lazy"
              src={work.image}
              alt={work.title}
              className="w-full h-full object-contain transition-transform duration-300"
            />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(darkQuery.matches);
    const listener = (e) => setIsDark(e.matches);
    darkQuery.addEventListener("change", listener);
    return () => darkQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % worksData.length);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % worksData.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + worksData.length) % worksData.length);
  const goToSlide = (index) => setCurrentIndex(index);
  const togglePlayPause = () => setIsPlaying(!isPlaying);

  return (
    <section
      className={`${
        isDark ? "bg-black" : "bg-white"
      } min-h-screen py-16 sm:py-20 transition-colors duration-500`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Carousel */}
        <div className="relative mb-8 sm:mb-12">
          <motion.div
            className="flex justify-center items-center overflow-hidden"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) => {
              if (info.offset.x < -50) nextSlide();
              if (info.offset.x > 50) prevSlide();
            }}
          >
            <AnimatePresence mode="wait">
              <CarouselCard
                key={currentIndex}
                work={worksData[currentIndex]}
                onClick={(work) => {
                  setSelectedWork(work);
                  setOpenModal(true);
                }}
                index={currentIndex}
              />
            </AnimatePresence>
          </motion.div>

          {/* Navigation buttons (hidden on mobile) */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white dark:bg-black dark:text-white backdrop-blur-md border border-white/20 text-black hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 z-10 p-2 sm:p-3 rounded-full"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white dark:bg-black dark:text-white backdrop-blur-md border border-white/20 text-black hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 z-10 p-2 sm:p-3 rounded-full"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Controls / Dots */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            {worksData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? isDark
                      ? "bg-white scale-125 shadow-glow"
                      : "bg-black scale-125 shadow-glow"
                    : "bg-gray-400/50 dark:bg-gray-600/50 hover:bg-gray-500 dark:hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          <button
            onClick={togglePlayPause}
            className="bg-[#313719] dark:bg-white/10 backdrop-blur-md border border-white/20 text-white cursor-pointer dark:hover:bg-white/20 px-3 sm:px-4 py-1 sm:py-2 rounded-lg flex items-center gap-1 sm:gap-2 transition-all duration-300"
          >
            {isPlaying ? (
              <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
            ) : (
              <Play className="w-3 h-3 sm:w-4 sm:h-4" />
            )}
            <span className="text-xs sm:text-sm">
              {isPlaying ? "Pause" : "Play"}
            </span>
          </button>
        </div>

        <div className="text-center mt-4 sm:mt-8">
          <p
            className={`${
              isDark ? "text-gray-400" : "text-gray-600"
            } text-xs sm:text-sm`}
          >
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(worksData.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openModal && selectedWork && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 px-4 sm:px-6 backdrop-blur-sm overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenModal(false)}
          >
            <motion.div
              className="bg-black text-white relative w-full max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto p-6 sm:p-8 lg:p-12 overflow-y-auto max-h-[90vh] mt-16 sm:mt-20 rounded-2xl shadow-xl border border-gray-700"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <button
                onClick={() => setOpenModal(false)}
                className="fixed top-20 mt-5 sm:top-20 left-1/2 -translate-x-1/2 bg-gray-800 text-white p-4 sm:p-5 hover:bg-gray-700 transition-all duration-300 rounded-full z-50"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="pr-0 sm:pr-16 mt-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-8 leading-tight">
                  {selectedWork.title}
                </h2>
                <div className="prose prose-invert prose-sm sm:prose-lg max-w-none">
                  <p className="whitespace-pre-line leading-relaxed text-sm sm:text-lg">
                    {selectedWork.details}
                  </p>
                </div>

                {selectedWork.link && (
                  <div className="mt-4 sm:mt-8 pt-4 sm:pt-8 border-t border-gray-700">
                    <a
                      href={selectedWork.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 shadow-md bg-black text-white hover:bg-gray-800"
                    >
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                      Visit Live Website
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
