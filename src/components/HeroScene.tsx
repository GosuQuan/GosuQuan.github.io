import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Grid, Line, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import type { Group, Mesh, Points } from 'three'

function DataCore() {
  const group = useRef<Group>(null)
  useFrame((_, dt) => {
    if (!group.current) return
    group.current.rotation.y += dt * 0.22
  })
  return (
    <group ref={group}>
      <mesh>
        <boxGeometry args={[1.15, 1.15, 1.15]} />
        <meshStandardMaterial
          color="#081018"
          metalness={0.9}
          roughness={0.25}
          emissive="#0ea5e9"
          emissiveIntensity={0.15}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[1.18, 1.18, 1.18]} />
        <meshBasicMaterial color="#67e8f9" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[Math.PI / 4, Math.PI / 5, 0]}>
        <octahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#7c3aed"
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.15}
        />
      </mesh>
    </group>
  )
}

function Topology() {
  const nodes = useMemo(
    () =>
      [
        [2.2, 0.9, 0.3],
        [2.0, -0.7, -0.6],
        [-2.1, 0.8, -0.4],
        [-1.9, -0.9, 0.7],
        [0.2, 1.7, -1.1],
        [0.3, -1.6, 1.0],
        [1.3, 0.2, 1.6],
        [-1.2, 0.1, -1.7],
      ] as [number, number, number][],
    [],
  )

  const links = useMemo(
    () =>
      [
        [0, 1],
        [0, 4],
        [0, 6],
        [1, 5],
        [2, 3],
        [2, 4],
        [2, 7],
        [3, 5],
        [4, 7],
        [5, 6],
        [6, 1],
        [7, 3],
      ] as [number, number][],
    [],
  )

  return (
    <group>
      {nodes.map((p, i) => (
        <Float key={i} speed={1 + (i % 3) * 0.25} floatIntensity={0.6}>
          <mesh position={p}>
            <icosahedronGeometry args={[0.12, 0]} />
            <meshStandardMaterial
              color={i % 2 ? '#34d399' : '#67e8f9'}
              emissive={i % 2 ? '#059669' : '#0891b2'}
              emissiveIntensity={0.55}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
      {links.map(([a, b], i) => (
        <Line
          key={i}
          points={[nodes[a], nodes[b]]}
          color="#67e8f9"
          lineWidth={1}
          transparent
          opacity={0.35}
        />
      ))}
    </group>
  )
}

function PacketFlow() {
  const ref = useRef<Points>(null)
  const { positions, speeds } = useMemo(() => {
    const count = 120
    const positions = new Float32Array(count * 3)
    const speeds = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2
      const r = 1.6 + (i % 5) * 0.18
      positions[i * 3] = Math.cos(a) * r
      positions[i * 3 + 1] = ((i % 7) - 3) * 0.18
      positions[i * 3 + 2] = Math.sin(a) * r
      speeds[i] = 0.4 + (i % 6) * 0.08
    }
    return { positions, speeds }
  }, [])

  useFrame((_, dt) => {
    const pts = ref.current
    if (!pts) return
    const arr = pts.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < speeds.length; i++) {
      const ix = i * 3
      const x = arr[ix]
      const z = arr[ix + 2]
      const ang = Math.atan2(z, x) + dt * speeds[i]
      const r = Math.hypot(x, z)
      arr[ix] = Math.cos(ang) * r
      arr[ix + 2] = Math.sin(ang) * r
      arr[ix + 1] += Math.sin(ang * 2) * dt * 0.05
    }
    pts.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#a5f3fc" size={0.035} sizeAttenuation transparent opacity={0.85} />
    </points>
  )
}

function HoloPanel({ position, rotation, labelHue }: { position: [number, number, number]; rotation: [number, number, number]; labelHue: string }) {
  const ref = useRef<Mesh>(null)
  useFrame(({ clock }) => {
    if (!ref.current) return
    const mat = ref.current.material as THREE.MeshStandardMaterial
    mat.opacity = 0.18 + Math.sin(clock.elapsedTime * 2 + position[0]) * 0.05
  })
  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <planeGeometry args={[1.1, 0.7]} />
      <meshStandardMaterial color={labelHue} transparent opacity={0.2} emissive={labelHue} emissiveIntensity={0.4} side={THREE.DoubleSide} />
    </mesh>
  )
}

function TechStage() {
  return (
    <group position={[0, -0.15, 0]}>
      <Grid
        args={[12, 12]}
        cellSize={0.35}
        cellThickness={0.6}
        cellColor="#164e63"
        sectionSize={1.4}
        sectionThickness={1.1}
        sectionColor="#22d3ee"
        fadeDistance={10}
        fadeStrength={1.2}
        infiniteGrid
        position={[0, -1.55, 0]}
      />
      <DataCore />
      <Topology />
      <PacketFlow />
      <HoloPanel position={[1.7, 1.1, 0.8]} rotation={[0, -0.5, 0.1]} labelHue="#67e8f9" />
      <HoloPanel position={[-1.8, 0.9, 0.5]} rotation={[0, 0.55, -0.08]} labelHue="#c4b5fd" />
      <mesh position={[0, -1.52, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.9, 2.05, 64]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-0">
      <Canvas dpr={[1, 1.6]} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
        <PerspectiveCamera makeDefault position={[3.8, 2.1, 5.2]} fov={40} />
        <color attach="background" args={['#00000000']} />
        <fog attach="fog" args={['#05060a', 8, 16]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 6, 3]} intensity={1.3} color="#e0f2fe" />
        <pointLight position={[-4, 2, -2]} intensity={1.2} color="#a78bfa" />
        <spotLight position={[0, 5, 2]} angle={0.4} penumbra={0.5} intensity={1.1} color="#67e8f9" />
        <Stars radius={40} depth={30} count={1200} factor={2} saturation={0} fade speed={0.4} />
        <TechStage />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.45}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 2.1}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  )
}
