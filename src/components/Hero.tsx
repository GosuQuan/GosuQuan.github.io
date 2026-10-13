import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { profile } from '../data/content'

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Blurb() {
  return (
    <>
      <span className="sm:hidden">{profile.blurbShort}</span>
      <span className="hidden sm:inline">{profile.blurb}</span>
    </>
  )
}

export function Hero() {
  const reduce = useReducedMotion()

  const cta = (
    <div className="mt-5 flex w-full flex-col gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
      <a
        href="#work"
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#f4f4f5] px-5 py-2.5 text-sm font-semibold text-[#09090b] hover:bg-white"
        style={{ color: '#09090b', WebkitTextFillColor: '#09090b' }}
      >
        主开源案例
      </a>
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-slate-200 hover:bg-white/10"
      >
        GitHub
      </a>
    </div>
  )

  if (reduce) {
    return (
      <section id="about" className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 sm:min-h-[78vh] sm:px-5 sm:pb-20 sm:pt-28">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.2em] text-slate-400 uppercase sm:text-xs sm:tracking-[0.24em]">Portfolio for interviews</p>
          <h1 className="mt-2.5 text-[2.15rem] font-semibold leading-[1.12] tracking-tight text-white sm:mt-5 sm:text-6xl">{profile.name}</h1>
          <p className="mt-2 text-[15px] leading-snug text-slate-300 sm:mt-3 sm:text-xl">{profile.tagline}</p>
          <p className="mt-3 text-[14px] leading-6 text-slate-400 sm:mt-6 sm:text-base sm:leading-7">
            <Blurb />
          </p>
          {cta}
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 sm:min-h-[78vh] sm:px-5 sm:pb-20 sm:pt-28">
      <div className="max-w-2xl">
        <motion.p custom={0} variants={fade} initial="hidden" animate="show" className="text-[11px] tracking-[0.2em] text-slate-400 uppercase sm:text-xs sm:tracking-[0.24em]">
          Portfolio for interviews
        </motion.p>
        <motion.h1 custom={1} variants={fade} initial="hidden" animate="show" className="mt-2.5 text-[2.15rem] font-semibold leading-[1.12] tracking-tight text-white sm:mt-5 sm:text-6xl">
          {profile.name}
        </motion.h1>
        <motion.p custom={2} variants={fade} initial="hidden" animate="show" className="mt-2 text-[15px] leading-snug text-slate-300 sm:mt-3 sm:text-xl">
          {profile.tagline}
        </motion.p>
        <motion.p custom={3} variants={fade} initial="hidden" animate="show" className="mt-3 text-[14px] leading-6 text-slate-400 sm:mt-6 sm:text-base sm:leading-7">
          <Blurb />
        </motion.p>
        <motion.div custom={4} variants={fade} initial="hidden" animate="show">
          {cta}
        </motion.div>
      </div>
    </section>
  )
}
