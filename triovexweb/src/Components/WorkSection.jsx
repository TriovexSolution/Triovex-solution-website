"use client";
import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import cart2 from "../assets/service-cart2.png";
import cart3 from "../assets/service-cart3.png";
const worksData = [
  {
    id: 1,
    title: "We deliver future-ready digital solutions",
    description:
      "From websites and apps to marketing and SEO — every project is built for long-term success, with performance at the core.",
    image: "src/assets/service-cart2.png", // ❌ hardcoded path
  },
  {
    id: 2,
    title: "We deliver future-ready digital solutions",
    description:
      "From websites and apps to marketing and SEO — every project is built for long-term success, with performance at the core.",
    image: "src/assets/service-cart3.png",
  },
];


export default function WorksSection() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="bg-white my-6 py-12 px-4 md:px-8 lg:px-16">
      <div className="relative h-[200vh]">
        {worksData.map((work, index) => (
          <div
            key={work.id}
            className="sticky top-50 flex justify-center items-center"
            style={{ zIndex: index + 1 }}
          >
            <div className="bg-[#ECF0DC] rounded-xl px-6 md:px-8 pt-8 pb-10 my-4 shadow-md w-full max-w-4xl mx-auto">
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
                  onClick={() => setOpenModal(true)}
                  className="w-5 h-5 text-gray-700 mt-2 cursor-pointer"
                />
              </div>
              <div className="rounded-md overflow-hidden mt-6">
                <img
                  src={work.image}
                  alt="Project showcase"
                  className="w-full h-auto object-cover rounded-b-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-transparent max-w-6xl w-full p-4 md:p-10 text-white relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/70 hover:bg-black/90 text-white p-5 rounded-full backdrop-blur-md transition mb-4"
            >
              <X size={24} />
            </button>

            <div className="grid gap-6 md:grid-cols-2 text-left mt-16">
              <div>
                <h2 className="text-xl font-bold">
                  Trifone E-Commerce Website
                </h2>
                <p className="text-sm mt-2">
                  Our Client Jewelry E-commerce website Design
                </p>
              </div>
              {/* <div className="flex justify-around text-sm font-semibold">
                <span className="cursor-pointer hover:underline-none no-underline">
                  View Live Project →
                </span>
                <span className="cursor-pointer hover:underline-none no-underline">
                  View Figma Design →
                </span>
              </div> */}
            </div>

            <div className="mt-10 flex flex-col md:flex-row md:gap-12 gap-6">
              <div className="md:w-1/2">
                <h3 className="text-lg font-semibold">About Trifone</h3>
                <p className="text-sm mt-2">
                  Trivoex Solution blends artificial intelligence with
                  real-world systems to reshape how businesses function. We
                  create environments where smart tech becomes second nature.
                </p>
              </div>
              <div className="md:w-1/2">
                <p className="text-sm">
                  Trivoex Solution is a next-gen IT & AI company that delivers
                  intelligent, scalable, and customized automation across
                  industries. From cutting-edge NLP and Computer Vision to
                  voice-native AI assistants, our solutions enhance efficiency,
                  reduce energy costs, and help clients stay ahead of the
                  digital curve.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row md:items-start md:gap-12 gap-6">
              <div className="md:w-1/2">
                <h3 className="font-semibold text-lg">Color Palette</h3>
              </div>
              <div className="md:w-1/2 grid grid-cols-6 gap-1">
                {["#f7edf7", "#fceafa", "#eed9f2", "#eec8ef", "#e2c3ea", "#d9afe1", "#cb86cf", "#bd5fbd", "#a74ea8", "#933b94", "#782c79", "#5c1d5e", "#461347", "#320a34", "#210420", "#140213", "#0b0111"].map((color, i) => (
                  <div
                    key={i}
                    className="h-16 w-16 rounded-md"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row md:items-start md:gap-12 gap-6">
              <div className="md:w-1/2">
                <h3 className="font-semibold text-lg">Typography</h3>
              </div>
              <div className="md:w-1/2">
                <p className="text-white text-2xl font-bold">
                  H1 - NUNITO SANS - BOLD - 36PX
                </p>
                <p className="text-white text-xl font-bold mt-2">
                  H2 - NUNITO SANS - BOLD - 24PX
                </p>
                <p className="text-white text-sm mt-2">
                  P - NUNITO SANS - REGULAR - 16px
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
