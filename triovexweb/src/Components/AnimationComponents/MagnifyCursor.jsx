import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";

// Animated 3D circle cursor
const AnimatedCursor = ({ hovered, zoom }) => {
  const mesh = useRef();
  const { mouse, viewport, size } = useThree();

  useFrame(() => {
    if (!mesh.current) return;

    // Position tracking
    mesh.current.position.x = (mouse.x * viewport.width) / 2;
    mesh.current.position.y = (mouse.y * viewport.height) / 2;

    // Scale transitions
    const baseScale = size.width > 1280 ? 1.1 : size.width > 768 ? 0.8 : 0.6;
    const targetScale = zoom
      ? baseScale * 1.6
      : hovered
      ? baseScale * 1.15
      : baseScale;

    mesh.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.15);
  });

  return (
    <mesh ref={mesh}>
      <circleGeometry args={[0.4, 64]} />
      <meshBasicMaterial color={"#68a483"} transparent opacity={0.25} />
    </mesh>
  );
};

// Main component
const MagnifyCursor = ({ containerRef }) => {
  const [hovered, setHovered] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(true);

  const zoomContainerRef = useRef();
  const timeoutRef = useRef();

  const triggerActivity = () => {
    setActive(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActive(false);
    }, 1500);
  };

  useEffect(() => {
    if (!containerRef?.current) return;
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      triggerActivity();

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPos({ x, y });

      const target = e.target;
      if (target.closest(".cursor-zoom")) {
        setHovered(true);
        setZoom(true);
      } else {
        setHovered(false);
        setZoom(false);
      }
    };

    const handleMouseOut = () => {
      setHovered(false);
      setZoom(false);
      setActive(false);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseout", handleMouseOut);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseout", handleMouseOut);
      clearTimeout(timeoutRef.current);
    };
  }, [containerRef]);

  useEffect(() => {
    if (zoomContainerRef.current && containerRef?.current) {
      zoomContainerRef.current.innerHTML = containerRef.current.innerHTML;
    }
  }, [zoom]);

  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      {/* Cursor Canvas */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="cursor-canvas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <AnimatedCursor hovered={hovered} zoom={zoom} />
            </Canvas>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoom Lens */}
      {zoom && (
        <div
          className="absolute rounded-full overflow-hidden border border-[#68a483] shadow-xl"
          style={{
            width: 150,
            height: 150,
            top: pos.y - 75,
            left: pos.x - 75,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              transform: `scale(2) translate(-${pos.x - 75}px, -${pos.y - 75}px)`,
              transformOrigin: "top left",
              width: containerRef?.current?.offsetWidth || "100vw",
              height: containerRef?.current?.offsetHeight || "100vh",
            }}
          >
            <div
              className="pointer-events-none"
              ref={zoomContainerRef}
              style={{ position: "relative", zIndex: -1 }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MagnifyCursor;
