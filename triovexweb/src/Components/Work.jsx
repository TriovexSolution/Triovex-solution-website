import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import IphoneModel from "./AnimationComponents/IphoneModel";
import IphoneModel2 from "./AnimationComponents/IphoneModel2";
import IphoneModel3 from "./AnimationComponents/IphoneModel3";
import { NavLink } from "react-router-dom";
// import IphoneModel2 from "./AnimationComponents/IphoneModel2";
// import IphoneModel2 from "./AnimationComponents/IphoneModel2";

export default function Work() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center relative z-10 px-4 py-12">
        <a
          href="#work"
          className="inline-block mb-4 px-4 py-2 text-sm font-medium bg-white/10 rounded-full transition-colors"
        >
          Our Work
        </a>

        <h2 className="text-4xl font-bold leading-tight mb-6">
          Empowering Digital Growth Through Design, Code & Strategy
        </h2>

        <p className="text-lg max-w-2xl mx-auto mb-8 text-[#6D706A]">
          At Triovex Solution, we craft digital solutions that solve real
          problems and spark business growth.
        </p>

        <NavLink
          to="/works"
          className="inline-block px-8 py-4 bg-[#313719] text-white rounded-full hover:bg-white hover:text-[#313719] transition-colors"
        >
          View More Works
        </NavLink>
      </div>

      {/* 3D Scene */}
      <div className="w-full h-[600px]" style={{ marginTop: "-50px" }}>
        {/* <img src="/logo.png" alt="" /> */}
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={8} castShadow />

          {/* Left Model */}
          <IphoneModel
            position={[-2.5, 0.9, 1]}
            scale={[0.28, 0.32, 0.32]} // ↓ X = width
            rotation={[0, Math.PI / 6, 0]}
          />
          {/* Center Model */}
          <IphoneModel2 position={[0, 1.4, 1.0]} scale={0.35} />

          {/* Right Model */}
          <IphoneModel3
            position={[2.5, 0.9, 1]}
            scale={[0.28, 0.32, 0.32]} // ↓ X = width
            rotation={[0, -Math.PI / 6, 0]}
          />

          {/* <Environment preset="sunset" /> */}
          <OrbitControls enableZoom={false} enablePan={true} />
        </Canvas>
      </div>
    </section>
  );
}
