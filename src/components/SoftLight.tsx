import { useEffect, useState } from 'react'

export function SoftLight() {
  const [enabled, setEnabled] = useState(false)
  const [pos, setPos] = useState({ x: 0.7, y: 0.25 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setEnabled(fine.matches && !reduce.matches)
    update()
    fine.addEventListener('change', update)
    reduce.addEventListener('change', update)
    return () => {
      fine.removeEventListener('change', update)
      reduce.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    let raf = 0
    let target = { x: pos.x, y: pos.y }
    const onMove = (e: MouseEvent) => {
      target = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      }
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setPos({ ...target }))
    }
    const onScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [enabled])

  if (!enabled) return null

  const drift = Math.min(scrollY / 1200, 1)
  const x = pos.x * 100
  const y = pos.y * 100

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute h-[55vmax] w-[55vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 transition-[left,top] duration-300 ease-out"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          background: `radial-gradient(circle, rgba(226,232,240,${0.14 - drift * 0.04}) 0%, rgba(165,180,252,${0.08}) 28%, transparent 68%)`,
          filter: 'blur(8px)',
        }}
      />
      <div
        className="absolute h-[28vmax] w-[28vmax] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen transition-[left,top] duration-500 ease-out"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          background: `radial-gradient(circle, rgba(255,255,255,${0.12}) 0%, transparent 70%)`,
        }}
      />
    </div>
  )
}
