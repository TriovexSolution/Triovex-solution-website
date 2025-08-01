import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function IphoneModel({
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
}) {
  const { scene } = useGLTF("/Triovex_app6.glb");
  const ref = useRef();

  // Clone the scene once
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  // Ensure all meshes render both sides and apply back color override
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        // Force double-sided for existing material
        if (child.material) {
          child.material.side = THREE.DoubleSide;
          child.material.needsUpdate = true;
        }

        // Optional: Custom backside override
        if (child.name.toLowerCase().includes("back")) {
          child.material = new THREE.MeshStandardMaterial({
            color: "#313719",
            metalness: 0,
            roughness: 0.4,
            side: THREE.DoubleSide, // ✅ Make sure it's double-sided too
          });
        }

        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [clonedScene]);

  // Animate rotation
  useFrame(() => {
    if (ref.current) {
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
