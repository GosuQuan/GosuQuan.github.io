import { useEffect, useState } from 'react'

/** Desktop-only soft spotlight. Never on touch/coarse pointers. Stays under content (no blend on UI). */
export function SoftLight() {
  const [enabled, setEnabled] = useState(false)
  const [pos, setPos] = useState({ x: 0.72, y: 0.28 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setEnabled(desktop.matches && !reduce.matches)
    update()
    desktop.addEventListener('change', update)
    reduce.addEventListener('change', update)
    return () => {
      desktop.removeEventListener('change', update)
      reduce.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    let raf = 0
    const onMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== 'mouse') return
      const next = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      }
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setPos(next))
    }
    const onScroll = () => setScrollY(window.scrollY)
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

  const drift = Math.min(scrollY / 1400, 1)
  const x = pos.x * 100
  const y = pos.y * 100

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute h-[50vmax] w-[50vmax] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[left,top] duration-300 ease-out will-change-[left,top]"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          background: `radial-gradient(circle, rgba(226,232,240,${0.09 - drift * 0.03}) 0%, rgba(165,180,252,0.05) 32%, transparent 70%)`,
          filter: 'blur(10px)',
        }}
      />
    </div>
  )
}
