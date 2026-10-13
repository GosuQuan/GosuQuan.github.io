import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import type { Mesh } from 'three'

function Crystal() {
  const ref = useRef<Mesh>(null)
  useFrame((_, dt) => {
    if (!ref.current) return
    ref.current.rotation.y += dt * 0.25
    ref.current.rotation.x += dt * 0.08
  })
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.35}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#6ee7ff"
          emissive="#1d4ed8"
          emissiveIntensity={0.35}
          roughness={0.18}
          metalness={0.65}
          distort={0.28}
          speed={1.6}
        />
      </mesh>
    </Float>
  )
}

function OrbitRing() {
  const ref = useRef<Mesh>(null)
  useFrame((_, dt) => {
    if (!ref.current) return
    ref.current.rotation.z -= dt * 0.35
  })
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.4, 0.2, 0]}>
      <torusGeometry args={[2.1, 0.035, 16, 120]} />
      <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={0.5} metalness={0.8} roughness={0.25} />
    </mesh>
  )
}

function Satellites() {
  const positions = useMemo(
    () =>
      [
        [1.8, 0.6, 0.4],
        [-1.5, -0.4, 0.8],
        [0.4, 1.5, -0.9],
      ] as [number, number, number][],
    [],
  )
  return (
    <>
      {positions.map((p, i) => (
        <Float key={i} speed={1 + i * 0.3} floatIntensity={1.5}>
          <mesh position={p} scale={0.18 + i * 0.04}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={i === 1 ? '#34d399' : '#c4b5fd'}
              emissive={i === 1 ? '#059669' : '#6d28d9'}
              emissiveIntensity={0.4}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.4, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#00000000']} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 3, 2]} intensity={1.2} color="#dff9ff" />
        <pointLight position={[-3, -1, -2]} intensity={1.1} color="#a78bfa" />
        <Crystal />
        <OrbitRing />
        <Satellites />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} maxPolarAngle={Math.PI / 1.6} minPolarAngle={Math.PI / 3} />
      </Canvas>
    </div>
  )
}
