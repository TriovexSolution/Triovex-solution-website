"use client";

import { motion as m } from "framer-motion";

const MissionVision = () => {
  return (
    <>
      <style jsx>{`
        .clip-bottom-right,
        .clip-bottom-left {
          position: relative;
          overflow: hidden;
        }

        .clip-bottom-right::after,
        .clip-bottom-left::after {
          content: "";
          position: absolute;
          width: clamp(120px, 22vw, 220px);
          height: clamp(120px, 22vw, 220px);
          background: #ffffff;
          border-radius: 50%;
          pointer-events: none;
        }

        @media (min-width: 768px) {
          .clip-bottom-right::after {
            bottom: 0;
            right: 0;
            transform: translate(50%, 50%);
          }
          .clip-bottom-left::after {
            bottom: 0;
            left: 0;
            transform: translate(-50%, 50%);
          }
        }

        @media (max-width: 767px) {
          .clip-bottom-right::after {
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 50%);
          }
          .clip-bottom-left::after {
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Desktop View */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="hidden md:flex justify-center items-center gap-8 relative"
          >
            {/* Vision */}
            <div className="bg-[#313719] text-white p-8 rounded-lg shadow-lg w-full sm:w-[300px] md:w-[580px] lg:w-[500px] h-auto md:h-[340px] lg:h-[300px] relative">
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-sm leading-relaxed mb-6">
                To become a leading force in digital innovation, empowering
                businesses to thrive in the connected world.
              </p>
              <div className="flex justify-end items-end absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <img
                  src="src/assets/triovexbuilding.png"
                  alt="Vision"
                  className="w-30 object-cover rounded shadow-md transform rotate-12 transition-transform duration-300 ease-in-out hover:rotate-0"
                />
                <img
                  src="src/assets/triovexbuilding.png"
                  alt="Vision"
                  className="w-30 object-cover rounded shadow-md -ml-4 transform -rotate-6 transition-transform duration-300 ease-in-out hover:rotate-0"
                />
                <img
                  src="src/assets/triovexbuilding.png"
                  alt="Vision"
                  className="w-30 object-cover rounded shadow-md -ml-4 transform rotate-3 transition-transform duration-300 ease-in-out hover:rotate-0"
                />
              </div>
            </div>

            {/* Mission */}
            <div className="bg-[#313719] text-white p-8 rounded-lg shadow-lg w-full sm:w-[300px] md:w-[380px] lg:w-[500px] h-auto md:h-[340px] lg:h-[300px] relative">
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-sm leading-relaxed mb-6">
                We aim to deliver impactful digital solutions that drive growth
                through technology, creativity, and strategy.
              </p>
              <div className="flex justify-start items-end absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <img
                  src="src/assets/triovexbuilding.png"
                  alt="Mission"
                  className="w-30 object-cover rounded shadow-md transform rotate-12 transition-transform duration-300 ease-in-out hover:rotate-0"
                />
                <img
                  src="src/assets/triovexbuilding.png"
                  alt="Mission"
                  className="w-30 object-cover rounded shadow-md -ml-4 transform -rotate-6 transition-transform duration-300 ease-in-out hover:rotate-0"
                />
                <img
                  src="src/assets/triovexbuilding.png"
                  alt="Mission"
                  className="w-30 object-cover rounded shadow-md -ml-4 transform rotate-3 transition-transform duration-300 ease-in-out hover:rotate-0"
                />
              </div>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 bg-white text-green-900 rounded-full w-[200px] h-[200px] z-10 flex items-center justify-center">
              <img
                src="src/assets/logo.png"
                alt="Triovex Logo"
                className="w-[200px] h-[66px] object-contain"
              />
            </div>
          </m.div>

          {/* Mobile View */}
          <div className="md:hidden space-y-8">
            <div className="bg-[#313719] text-white p-6 rounded-lg shadow-lg mx-auto w-full max-w-xs h-auto min-h-[280px] relative">
              <h3 className="text-xl font-bold mb-3">Vision</h3>
              <p className="text-sm leading-relaxed mb-4">
                To become a leading force in digital innovation, empowering
                businesses to thrive in the connected world.
              </p>
              <div className="flex justify-center items-end absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <img
                  src="src/assets/triovexbuilding.png"
                  alt="Vision"
                  className="w-16 object-cover rounded shadow-md transform rotate-12 transition-transform duration-300 ease-in-out hover:rotate-0"
                />
                <img
                  src="src/assets/triovexbuilding.png"
                  alt="Vision"
                  className="w-16 object-cover rounded shadow-md -ml-3 transform -rotate-6 transition-transform duration-300 ease-in-out hover:rotate-0"
                />
                <img
                  src="src/assets/triovexbuilding.png"
                  alt="Vision"
                  className="w-16 object-cover rounded shadow-md -ml-3 transform rotate-3 transition-transform duration-300 ease-in-out hover:rotate-0"
                />
              </div>
            </div>

            <div className="bg-[#313719] text-white p-6 rounded-lg shadow-lg mx-auto w-full max-w-xs h-auto min-h-[280px] relative">
              <h3 className="text-xl font-bold mb-3">Mission</h3>
              <p className="text-sm leading-relaxed mb-4">
                We aim to deliver impactful digital solutions that drive growth
                through technology, creativity, and strategy.
              </p>
              <div className="flex justify-center items-end absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <img
                  src="src/assets/triovexbuilding.png"
                  alt="Mission"
                  className="w-16 object-cover rounded shadow-md transform rotate-12 transition-transform duration-300 ease-in-out hover:rotate-0"
                />
                <img
                  src="src/assets/triovexbuilding.png"
                  alt="Mission"
                  className="w-16 object-cover rounded shadow-md -ml-3 transform -rotate-6 transition-transform duration-300 ease-in-out hover:rotate-0"
                />
                <img
                  src="src/assets/triovexbuilding.png"
                  alt="Mission"
                  className="w-16 object-cover rounded shadow-md -ml-3 transform rotate-3 transition-transform duration-300 ease-in-out hover:rotate-0"
                />
              </div>
            </div>

            <div className="bg-white text-green-900 px-6 py-4 rounded-full shadow-lg mx-auto w-fit">
              <div className="text-center">
                <img
                  src="src/assets/logo.png"
                  alt="Triovex"
                  className="w-[120px] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionVision;
