import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, Environment, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

// Floating 3D Logo Component
function FloatingLogo(props: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Rotate the logo continuously
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh
        ref={meshRef}
        scale={hovered ? 1.2 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        {...props}
      >
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial 
          color={hovered ? "#3b82f6" : "#60a5fa"} 
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

// 3D Text Component
function LogoText(props: any) {
  return (
    <Text
      font="/fonts/inter-bold.woff"
      fontSize={0.5}
      maxWidth={5}
      lineHeight={1}
      letterSpacing={0.05}
      textAlign="center"
      color="#1e293b"
      anchorX="center"
      anchorY="middle"
      {...props}
    >
      H2F
    </Text>
  );
}

// Main Interactive Logo Component
export default function InteractiveLogo() {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-2xl">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight
          position={[0, 10, 0]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, -Math.PI / 4, 0]}
          polar={[0, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <FloatingLogo position={[0, 0, 0]} />
          <LogoText position={[0, -2, 0]} />
        </PresentationControls>
        
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}