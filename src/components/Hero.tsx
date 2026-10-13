import { motion, type Variants } from 'framer-motion'
import { lazy, Suspense, useEffect, useState } from 'react'
import { profile } from '../data/content'

const HeroScene = lazy(() => import('./HeroScene'))

const fade: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

function SoftFallback() {
  return (
    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-slate-800/60 via-slate-900 to-slate-950 ring-1 ring-white/10" />
  )
}

export function Hero() {
  const [mount3d, setMount3d] = useState(false)
  const [allow3d, setAllow3d] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarse = window.matchMedia('(pointer: coarse)')
    const update = () => setAllow3d(mq.matches && !reduce.matches && !coarse.matches)
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
    const t = window.setTimeout(() => setMount3d(true), 300)
    return () => window.clearTimeout(t)
  }, [allow3d])

  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-20">
      <div>
        <motion.p custom={0} variants={fade} initial="hidden" animate="show" className="text-xs tracking-[0.22em] text-slate-400 uppercase">
          Portfolio for interviews
        </motion.p>
        <motion.h1 custom={1} variants={fade} initial="hidden" animate="show" className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {profile.name}
          <span className="mt-3 block text-xl font-normal text-slate-400 sm:text-2xl">{profile.tagline}</span>
        </motion.h1>
        <motion.p custom={2} variants={fade} initial="hidden" animate="show" className="mt-6 max-w-xl text-base leading-7 text-slate-400">
          {profile.blurb}
        </motion.p>
        <motion.div custom={3} variants={fade} initial="hidden" animate="show" className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-slate-200">
            主开源案例
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-300 hover:border-white/30">
            GitHub
          </a>
        </motion.div>
      </div>

      <div className="relative h-56 overflow-hidden rounded-[2rem] ring-1 ring-white/10 sm:h-72 lg:h-[420px]">
        {allow3d && mount3d ? (
          <Suspense fallback={<SoftFallback />}>
            <HeroScene />
          </Suspense>
        ) : (
          <SoftFallback />
        )}
      </div>
    </section>
  )
}
