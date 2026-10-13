import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { profile } from '../data/content'

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.07 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  const reduce = useReducedMotion()

  const body = (
    <>
      <p className="text-xs tracking-[0.24em] text-slate-400 uppercase">Portfolio for interviews</p>
      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">{profile.name}</h1>
      <p className="mt-3 text-lg text-slate-300 sm:text-xl">{profile.tagline}</p>
      <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">{profile.blurb}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href="#work" className="rounded-full bg-[#f4f4f5] px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white" style={{ color: "#09090b" }}>
          主开源案例
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-slate-200 backdrop-blur hover:bg-white/10">
          GitHub
        </a>
      </div>
      <div className="mt-16 flex items-center gap-3 text-xs text-slate-500">
        <span className="h-8 w-px bg-gradient-to-b from-slate-400 to-transparent" />
        {reduce ? '内容已按系统设置静态展示' : '向下滚动，分段动画展开'}
      </div>
    </>
  )

  if (reduce) {
    return (
      <section id="about" className="relative mx-auto min-h-[78vh] max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
        <div className="max-w-2xl">{body}</div>
      </section>
    )
  }

  return (
    <section id="about" className="relative mx-auto min-h-[78vh] max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
      <div className="max-w-2xl">
        <motion.p custom={0} variants={fade} initial="hidden" animate="show" className="text-xs tracking-[0.24em] text-slate-400 uppercase">
          Portfolio for interviews
        </motion.p>
        <motion.h1 custom={1} variants={fade} initial="hidden" animate="show" className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          {profile.name}
        </motion.h1>
        <motion.p custom={2} variants={fade} initial="hidden" animate="show" className="mt-3 text-lg text-slate-300 sm:text-xl">
          {profile.tagline}
        </motion.p>
        <motion.p custom={3} variants={fade} initial="hidden" animate="show" className="mt-6 max-w-xl text-base leading-7 text-slate-400">
          {profile.blurb}
        </motion.p>
        <motion.div custom={4} variants={fade} initial="hidden" animate="show" className="mt-10 flex flex-wrap gap-3">
          <a href="#work" className="rounded-full bg-[#f4f4f5] px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white" style={{ color: "#09090b" }}>
            主开源案例
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-slate-200 backdrop-blur hover:bg-white/10">
            GitHub
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }} className="mt-16 flex items-center gap-3 text-xs text-slate-500">
          <span className="h-8 w-px bg-gradient-to-b from-slate-400 to-transparent" />
          向下滚动，分段动画展开
        </motion.div>
      </div>
    </section>
  )
}
