import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import IphoneModel from "./AnimationComponents/IphoneModel";
import IphoneModel2 from "./AnimationComponents/IphoneModel2";
import IphoneModel3 from "./AnimationComponents/IphoneModel3";
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Work() {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  const handleScrollClick = () => {
    const targetId = scrollDirection === "down" ? "services" : "about";
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="about"
        className="w-full min-h-screen bg-black text-white relative overflow-hidden"
      >
        {/* Text Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10 px-4 py-12">
          <a
            href="#work"
            className="inline-block mb-4 px-4 py-2 text-sm font-medium bg-white/10  dark:bg-emerald-900/40 dark:text-emerald-300 rounded-full transition-colors"
          >
            Our Work
          </a>

          <h2 className="text-4xl font-bold leading-tight mb-6">
           Engineering Impact with AI, Design & Scalable Code

          </h2>

          <p className="text-lg max-w-2xl mx-auto mb-8 text-[#6D706A]">
            At Triovex Solution, we craft intelligent digital products that solve real-world challenges and ignite measurable business growth powered by strategy, creativity, and future-ready tech.
          </p>

          <NavLink
            to="/works"
            className="inline-block px-8 py-4 bg-[#313719] text-white rounded-full hover:bg-white hover:text-[#313719] transition-colors"
          >
            View More Works
          </NavLink>
          
        </div>

        {/* 3D Section with Scroll Button */}
        <div className="relative w-full h-[600px] overflow-y-auto md:overflow-hidden touch-pan-y">
          <button
            onClick={handleScrollClick}
            className="absolute bottom-10 right-4 z-20 text-white text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300
              bg-gradient-to-r from-[#313719] via-[#5a6133] to-[#8c9445]
              hover:from-[#8c9445] hover:to-[#313719] cursor-pointer"
          >
            {scrollDirection === "down" ? (
              <ChevronDown className="w-8 h-8" />
            ) : (
              <ChevronUp className="w-8 h-8" />
            )}
          </button>

          <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={8} castShadow />

            {/* Left Model */}
            <IphoneModel
              position={[-2.5, 0.9, 1]}
              scale={[0.28, 0.32, 0.32]}
              rotation={[0, Math.PI / 6, 0]}
            />

            {/* Center Model */}
            <IphoneModel2 position={[0, 1.4, 1.0]} scale={0.35} />

            {/* Right Model */}
            <IphoneModel3
              position={[2.5, 0.9, 1]}
              scale={[0.28, 0.32, 0.32]}
              rotation={[0, -Math.PI / 6, 0]}
            />

            <OrbitControls enableZoom={false} enablePan={true} />
          </Canvas>
        </div>
      </section>

      {/* 👇 Your Services Section */}
    </>
  );
}
