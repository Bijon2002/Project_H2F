import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, Environment, PresentationControls, Html } from '@react-three/drei';
import * as THREE from 'three';

// H2F Integrated Logo Component
function H2FLogo(props: any) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.1;
      
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group
        ref={groupRef}
        scale={hovered ? 1.1 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        {...props}
      >
        {/* Main circular frame */}
        <mesh>
          <torusGeometry args={[2, 0.2, 32, 100]} />
          <meshStandardMaterial 
            color={hovered ? "#3b82f6" : "#1e40af"} 
            roughness={0.1}
            metalness={0.9}
            emissive="#1e40af"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Letter H */}
        <mesh position={[-1.2, 0, 0]}>
          <boxGeometry args={[0.3, 1.5, 0.3]} />
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.3, 1.5, 0.3]} />
            <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0.8, 0, 0]}>
            <boxGeometry args={[0.3, 1.5, 0.3]} />
            <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0.4, 0, 0]}>
            <boxGeometry args={[1.1, 0.3, 0.3]} />
            <meshStandardMaterial color="#60a5fa" metalness={0.8} roughness={0.2} />
          </mesh>
        </mesh>

        {/* Number 2 - Stylized */}
        <mesh position={[0, 0, 0]}>
          {/* Curved top */}
          <mesh position={[0, 0.5, 0]}>
            <torusGeometry args={[0.5, 0.15, 16, 100, Math.PI]} />
            <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Bottom curve */}
          <mesh position={[0, -0.5, 0]} rotation={[0, 0, Math.PI]}>
            <torusGeometry args={[0.5, 0.15, 16, 100, Math.PI]} />
            <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Middle connector */}
          <mesh position={[0.25, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.8, 0.15, 0.3]} />
            <meshStandardMaterial color="#f87171" metalness={0.8} roughness={0.2} />
          </mesh>
        </mesh>

        {/* Letter F */}
        <mesh position={[1.2, 0, 0]}>
          <mesh position={[-0.4, 0, 0]}>
            <boxGeometry args={[0.3, 1.5, 0.3]} />
            <meshStandardMaterial color="#10b981" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0.2, 0.6, 0]}>
            <boxGeometry args={[0.8, 0.3, 0.3]} />
            <meshStandardMaterial color="#34d399" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.6, 0.3, 0.3]} />
            <meshStandardMaterial color="#34d399" metalness={0.8} roughness={0.2} />
          </mesh>
        </mesh>

        {/* Connecting rings */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.8, 2, 32]} />
          <meshStandardMaterial 
            color="#f59e0b"
            side={THREE.DoubleSide}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Inner glow effect */}
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.05}
            emissive="#3b82f6"
            emissiveIntensity={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Floating particles around the logo
function Particles({ count = 100 }) {
  const meshRef = useRef<THREE.Points>(null);
  const particles = useRef<Float32Array>(null!);

  if (!particles.current) {
    particles.current = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      particles.current[i] = (Math.random() - 0.5) * 8;
      particles.current[i + 1] = (Math.random() - 0.5) * 8;
      particles.current[i + 2] = (Math.random() - 0.5) * 8;
    }
  }

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#60a5fa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main Interactive Logo Component
export default function InteractiveH2FLogo() {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-gray-900 to-black">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={['#0f172a']} />
        
        {/* Lighting setup */}
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#3b82f6" />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#ef4444" />
        <pointLight position={[0, -5, 0]} intensity={0.3} color="#10b981" />
        
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          castShadow
          color="#ffffff"
        />
        
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, -Math.PI / 4, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <H2FLogo position={[0, 0, 0]} />
          <Particles count={200} />
        </PresentationControls>
        
        {/* Background Text */}
        <Text
          position={[0, -3.5, 0]}
          fontSize={0.3}
          color="#94a3b8"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
          textAlign="center"
        >
          INTERACTIVE 3D LOGO
        </Text>
        
        <Environment preset="studio" />
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={0}
          maxDistance={12}
          minDistance={4}
        />
      </Canvas>
      
      {/* HTML overlay for controls info */}
      <div className="absolute bottom-4 left-4 text-white text-sm bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Drag to rotate • Scroll to zoom
        </div>
      </div>
    </div>
  );
}