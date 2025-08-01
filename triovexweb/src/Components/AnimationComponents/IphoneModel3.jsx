import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function IphoneModel3({ position, scale, rotation }) {
  const { scene } = useGLTF("/right.glb");
  const ref = useRef();

  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh && child.name.toLowerCase().includes("back")) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#313719",
          metalness: 0,
          roughness: 0.4,
        });
      }
    });
  }, [clonedScene]);

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



