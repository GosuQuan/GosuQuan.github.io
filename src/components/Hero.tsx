import { motion, type Variants } from 'framer-motion'
import { lazy, Suspense, useEffect, useState } from 'react'
import { profile } from '../data/content'

const HeroScene = lazy(() => import('./HeroScene'))

const fade: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  const [mount3d, setMount3d] = useState(false)

  useEffect(() => {
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback
    if (idle) {
      const id = idle(() => setMount3d(true), { timeout: 1200 })
      return () => {
        ;(window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(id)
      }
    }
    const t = window.setTimeout(() => setMount3d(true), 400)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <section id="about" className="relative mx-auto max-w-6xl overflow-hidden px-5 pb-20 pt-16 sm:pt-24">
      <div className="pointer-events-none absolute inset-y-0 right-[-8%] w-full opacity-40 lg:opacity-100 lg:w-[52%] block max-h-[280px] lg:max-h-none">
        <div className="pointer-events-auto h-full min-h-[420px]">
          {mount3d ? (
            <Suspense fallback={<div className="h-full animate-pulse rounded-full bg-cyan-400/5" />}>
              <HeroScene />
            </Suspense>
          ) : (
            <div className="h-full animate-pulse rounded-full bg-gradient-to-br from-cyan-400/10 to-violet-500/10" />
          )}
        </div>
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl lg:hidden"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-xl lg:max-w-2xl">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mb-4 text-sm uppercase tracking-[0.28em] text-cyan-200/70"
        >
          Resume · Open Source · 3D Motion
        </motion.p>
        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
        >
          介绍我做过的开源，
          <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">
            方便面试讲清楚
          </span>
        </motion.h1>
        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg"
        >
          {profile.blurb}
        </motion.p>
        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#work"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 px-5 py-2.5 text-sm font-semibold text-[#05060a] shadow-[0_0_40px_rgba(110,231,255,0.25)] transition hover:brightness-110"
          >
            看主开源案例
          </a>
          <a
            href="#writing"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/80 transition hover:border-cyan-300/40 hover:text-cyan-100"
          >
            面试可讲点
          </a>
        </motion.div>
        <p className="mt-4 text-xs text-white/35">右侧 3D 场景懒加载 · 拖动可旋转 · 不阻塞首屏文案</p>
      </div>
    </section>
  )
}
