import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import type { Group } from 'three'

function Sculpture() {
  const ref = useRef<Group>(null)
  useFrame((_, dt) => {
    if (!ref.current) return
    ref.current.rotation.y += dt * 0.12
  })
  return (
    <Float speed={0.9} rotationIntensity={0.12} floatIntensity={0.45}>
      <group ref={ref} position={[0.8, 0.1, 0]}>
        <mesh>
          <icosahedronGeometry args={[1.35, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.7}
            chromaticAberration={0.03}
            distortion={0.08}
            distortionScale={0.15}
            temporalDistortion={0.08}
            iridescence={0.25}
            color="#dbeafe"
            roughness={0.12}
            opacity={0.9}
          />
        </mesh>
        <mesh scale={1.015}>
          <icosahedronGeometry args={[1.35, 0]} />
          <meshBasicMaterial color="#94a3b8" wireframe transparent opacity={0.12} />
        </mesh>
      </group>
    </Float>
  )
}

export default function HeroScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        dpr={[1, 1.4]}
        camera={{ position: [2.2, 1.1, 5.2], fov: 36 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 2]} intensity={0.9} />
        <pointLight position={[-3, 1, -2]} intensity={0.45} color="#a5b4fc" />
        <Sculpture />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.25} enableRotate={false} />
      </Canvas>
    </div>
  )
}
