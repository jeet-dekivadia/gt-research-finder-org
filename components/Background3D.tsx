"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type { Mesh } from "three"
import { Environment, Float } from "@react-three/drei"

function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial color="#B3A369" metalness={0.7} roughness={0.2} />
      </mesh>
    </Float>
  )
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Environment preset="city" />
        <AnimatedSphere />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
      </Canvas>
    </div>
  )
}

