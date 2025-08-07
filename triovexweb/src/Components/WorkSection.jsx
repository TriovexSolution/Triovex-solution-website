"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

import AIwork from "../assets/workAI.png";
import Mchem from "../assets/mchem.png";
import trifon from "../assets/trifon.png";
import socialmedia4 from "../assets/hp15.png";

const worksData = [
  {
    id: 1,
    title: "RAG Chatbot for Irish Tech Company",
    description:
      "Smart Retrieval-Augmented Generation (RAG) chatbot for real-time Q&A from internal documents and PDFs.",
    image: AIwork,
    details: `🔹 Client: Tankbuilder, Ireland  \n🔹 Duration: 1 Week  \n🔹 Tech Stack: Python • LangChain • OpenAI • Pinecone  \n\nWe engineered and deployed a fast, intelligent RAG chatbot that enables real-time Q&A using company documents and uploaded PDFs. Built within just 7 days, the chatbot streamlines internal knowledge discovery and delivers instant insights.\n\nKey Features:\n1. Embedded smart document search\n2. Seamless OpenAI GPT integration\n3. Instant response generation\n4. Web-based interface with real-time chat support\n\nImpact Delivered:\n1. Reduced customer support load\n2. Accelerated internal knowledge access\n3. Fast delivery cycle impressed stakeholders\n\nThis project showcases our capability to deliver cutting-edge AI solutions that are both performance-driven and business-ready in record time.`,
  },
  {
    id: 2,
    title: "Industrial Website for Mchem – Bulk Chemical Manufacturer",
    description:
      "High-performance corporate site with product architecture and SEO for India’s leading bulk chemical manufacturer.",
    image: Mchem,
    details: `🔹 Client: Mchem Chemicals Pvt Ltd  \n🔹 Duration: 10 Days  \n🔹 Tech Stack: React • Node.js • Bootstrap  \n\nWe built a powerful, performance-optimized website for Mchem, a leading Indian manufacturer in bulk chemical production. Designed for high-volume B2B transactions, the site highlights Mchem’s industrial credibility with smart content and custom architecture.\n\nKey Product Categories:\n1. Sodium & Potassium Silicates (Liquid & Glass forms)\n2. Copper Bromide, Calcium Carbonate Powder, Soda Ash Light\n3. LABSA (Acid Slurry) for detergents\n4. CMT Powder & Liquid Detergents\n5. Guar Gum for Corrugation, Textile, Cattle Feed, Cosmetics\n6. Waterproofing Chemicals\n\nBuild Highlights:\n1. Custom product showcase architecture\n2. Smart inquiry forms with bulk request validation\n3. SEO-optimized content for industrial visibility\n4. Fully responsive and blazing fast interface\n\nWhether you're a distributor or sourcing agent, the Mchem platform is engineered for trust, transparency, and industrial scale.`,
  },
  {
    id: 3,
    title: "Dynamic E-Commerce Platform for Trifon Jewels",
    description:
      "Premium jewellery e-commerce platform with real-time gold & diamond pricing sync and custom admin logic.",
    image: trifon,
    details: `🔹 Client: Trifon Jewels – Premium Jewellery Brand  \n🔹 Duration: 14 Days  \n🔹 Tech Stack: React • Tailwind CSS • Node.js  \n\nWe built a luxury-grade, fully dynamic e-commerce website for Trifon Jewels — a brand dealing in high-value gold and diamond jewellery. The standout innovation? Live pricing logic that updates in real-time based on market rates.\n\nKey Innovations:\n1. Real-time gold price sync across all products\n2. Global diamond rate control — update once, reflect everywhere\n3. Intelligent admin panel with custom pricing engine\n4. Fully responsive UI tailored for premium audience\n5. Smooth checkout, wishlist, and payment integration\n\nResult:\nThis isn’t just an e-store — it’s a high-performance digital retail experience that blends visual luxury with backend complexity.`,
  },
  {
  id: 4,
  title: "Social Media That Speaks, Sells & Sticks",
  description:
    "From cluttered to captivating — we transform your brand’s social presence into scroll-stopping experiences that drive real connection and conversions.",
  image: socialmedia4, // replace with your actual image import
  details: `🔹 Client: Multi-industry Brands (Fashion, Tech, Chemicals, Food, Jewellery)  
🔹 Duration: Project-based & Retainer  
🔹 Focus Areas: Content Strategy • Visual Branding • Conversion Design  

At Triovex Solution, we don’t just manage — we elevate your social media into a high-performing brand channel.  

Key Highlights:  
1. Minimal yet magnetic designs tailored to your brand vibe  
2. High-converting reels, posts & carousels  
3. Content crafted for Gen Z, Millennials & beyond  
4. Emotion-led storytelling that builds loyalty  
5. Strategic weekly calendars, ad creatives, and growth planning  

Result: Clean, consistent, and commercially impactful journeys that go beyond likes — they earn loyalty.`,
}
,
];

function ScrollStackCard({ work, index, onClick }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="sticky top-20 h-screen flex justify-center items-center z-10 mb-4 mx-2"
    >
      <div className="bg-[#ECF0DC] rounded-xl px-6 md:px-8 pt-8 pb-10 shadow-md w-full max-w-4xl mx-auto">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              {work.title}
            </h3>
            <p className="text-sm text-gray-700 mt-1 max-w-2xl">
              {work.description}
            </p>
          </div>
          <ArrowRight
            className="w-5 h-5 text-gray-700 mt-2 cursor-pointer"
            onClick={() => onClick(work)}
          />
        </div>
        <div className="flex justify-center rounded-md overflow-hidden mt-6">
  <img
    src={work.image}
    alt="Project showcase"
    className="w-full max-w-[720px] h-[230px] sm:h-[270px] md:h-[300px] lg:h-[340px] object-cover  rounded-b-xl transition-all duration-500"
  />
</div>

      </div>
    </motion.div>
  );
}

export default function WorksSection() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <section className="bg-white ">
      <div className={`h-[${worksData.length * 100}vh] `}>
        {worksData.map((work, index) => (
          <ScrollStackCard
            key={work.id}
            work={work}
            index={index}
            onClick={(w) => {
              setSelectedWork(w);
              setOpenModal(true);
            }}
          />
        ))}
      </div>

     {openModal && selectedWork && (
  <div
    className="fixed inset-0 z-50 bg-black/85 px-2 sm:px-4 overflow-x-hidden"
    onClick={() => setOpenModal(false)}
  >
    {/* Close Button */}
    <button
      onClick={() => setOpenModal(false)}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 hover:bg-black/90 text-white p-4 sm:p-5 rounded-full backdrop-blur-md transition"
    >
      <X size={24} />
    </button>

    {/* Modal Content */}
    <div
      className="relative w-full max-w-6xl mx-auto text-white p-4 sm:p-6 md:p-10 overflow-y-auto max-h-[92vh] mt-24 sm:mt-28 pb-20 rounded-xl"
      onClick={(e) => e.stopPropagation()}
      style={{
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
      }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Modal Text Content */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 flex justify-center  mb-5">
          {selectedWork.title}
        </h2>
        <p className="whitespace-pre-line text-sm sm:text-base text-gray-200 leading-relaxed">
          {selectedWork.details}
        </p>
      </div>
    </div>
  </div>
)}

    </section>
  );
}
