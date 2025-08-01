import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export default function RotatingPhone({
  textureURL,
  position,
  rotationDirection,
  initialYRotation = 0,
}) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const texture = useTexture(textureURL);

  useFrame(() => {
    // Only rotate if it's not hovered and rotationDirection is not zero
    if (!hovered && meshRef.current && rotationDirection !== 0) {
      meshRef.current.rotation.y += 0.01 * rotationDirection;
    }

    // Apply zoom effect on hover only if it's the static (middle) phone
    if (meshRef.current && rotationDirection === 0) {
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
      meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
      meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={[0, initialYRotation, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      {/* Phone-like proportions */}
      <boxGeometry args={[1, 2, 0.08]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
