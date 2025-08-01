import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function IphoneModel2({ position, scale, rotation }) {
  const { scene } = useGLTF("/p1.glb");
  const ref = useRef();
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const [startRotation, setStartRotation] = useState(false);

  useEffect(() => {
    // Apply custom material to back mesh
    clonedScene.traverse((child) => {
      if (child.isMesh && child.name.toLowerCase().includes("back")) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#313719",
          metalness: 0,
          roughness: 0.4,
        });
      }
    });

    // Delay the start of rotation by 2 seconds
    const timer = setTimeout(() => {
      setStartRotation(true);
    }, 5000); // Delay in ms

    return () => clearTimeout(timer);
  }, [clonedScene]);

  useFrame(() => {
    if (startRotation && ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      object={clonedScene}
      ref={ref}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
}
