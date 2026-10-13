import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Environment, Float, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import type { Group } from 'three'

function Sculpture() {
  const ref = useRef<Group>(null)
  useFrame((_, dt) => {
    if (!ref.current) return
    ref.current.rotation.y += dt * 0.18
  })
  return (
    <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.6}>
      <group ref={ref}>
        <mesh castShadow>
          <icosahedronGeometry args={[1.15, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.55}
            chromaticAberration={0.04}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.1}
            iridescence={0.3}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
            color="#c7d2fe"
            roughness={0.15}
          />
        </mesh>
        <mesh scale={1.02}>
          <icosahedronGeometry args={[1.15, 0]} />
          <meshBasicMaterial color="#94a3b8" wireframe transparent opacity={0.18} />
        </mesh>
      </group>
    </Float>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [2.6, 1.4, 4.2], fov: 35 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 5, 2]} intensity={1.1} />
        <Sculpture />
        <ContactShadows position={[0, -1.35, 0]} opacity={0.4} scale={8} blur={2.5} far={4} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  )
}
