import { motion, type Variants } from 'framer-motion'
import { profile } from '../data/content'

const fade: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl overflow-hidden px-5 pb-20 pt-16 sm:pt-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.p
        custom={0}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mb-4 text-sm uppercase tracking-[0.28em] text-cyan-200/70"
      >
        Portfolio · Open Source · Motion
      </motion.p>
      <motion.h1
        custom={1}
        variants={fade}
        initial="hidden"
        animate="show"
        className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
      >
        炫酷动效的作品集，
        <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">
          技术文章与开源分享
        </span>
      </motion.h1>
      <motion.p
        custom={2}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
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
          看重点案例
        </a>
        <a
          href="#writing"
          className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/80 transition hover:border-cyan-300/40 hover:text-cyan-100"
        >
          文章与实验室
        </a>
      </motion.div>
    </section>
  )
}
