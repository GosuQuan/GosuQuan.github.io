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

function StaticTechBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden rounded-3xl border border-cyan-400/10 bg-[radial-gradient(circle_at_30%_20%,rgba(103,232,249,0.16),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(167,139,250,0.14),transparent_40%),linear-gradient(160deg,#071018,#05060a)]"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 75%)',
        }}
      />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-xl border border-cyan-300/40 shadow-[0_0_40px_rgba(103,232,249,0.25)]" />
      <div className="absolute left-[28%] top-[38%] h-3 w-3 rounded-full bg-emerald-300/80" />
      <div className="absolute right-[30%] top-[42%] h-3 w-3 rounded-full bg-violet-300/80" />
      <div className="absolute bottom-[28%] left-[40%] h-2 w-2 rounded-full bg-cyan-200/70" />
    </div>
  )
}

export function Hero() {
  const [mount3d, setMount3d] = useState(false)
  const [allow3d, setAllow3d] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarse = window.matchMedia('(pointer: coarse)')
    const update = () => {
      // Desktop-ish only; phones get static fallback
      setAllow3d(mq.matches && !reduce.matches && !coarse.matches)
    }
    update()
    mq.addEventListener('change', update)
    reduce.addEventListener('change', update)
    coarse.addEventListener('change', update)
    return () => {
      mq.removeEventListener('change', update)
      reduce.removeEventListener('change', update)
      coarse.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!allow3d) {
      setMount3d(false)
      return
    }
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback
    if (idle) {
      const id = idle(() => setMount3d(true), { timeout: 1200 })
      return () => {
        ;(window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(id)
      }
    }
    const t = window.setTimeout(() => setMount3d(true), 400)
    return () => window.clearTimeout(t)
  }, [allow3d])

  return (
    <section id="about" className="relative mx-auto max-w-6xl overflow-hidden px-5 pb-20 pt-16 sm:pt-24">
      <div className="pointer-events-none absolute inset-y-4 right-[-4%] hidden w-[52%] lg:block">
        <div className="pointer-events-auto relative h-full min-h-[420px]">
          {allow3d && mount3d ? (
            <Suspense fallback={<StaticTechBackdrop />}>
              <HeroScene />
            </Suspense>
          ) : (
            <StaticTechBackdrop />
          )}
        </div>
      </div>

      <div className="relative mb-8 h-40 overflow-hidden rounded-3xl lg:hidden">
        <StaticTechBackdrop />
      </div>

      <div className="relative z-10 max-w-xl lg:max-w-2xl">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mb-4 text-sm uppercase tracking-[0.28em] text-cyan-200/70"
        >
          Resume · Open Source · Interview Ready
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
        <p className="mt-4 text-xs text-white/35">
          桌面端：抽象拓扑 3D 懒加载 · 手机端：静态降级 · 商品级 R3D 见 TrailForge 首页
        </p>
      </div>
    </section>
  )
}
