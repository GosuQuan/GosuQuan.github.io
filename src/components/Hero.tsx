import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { profile } from '../data/content'

const fade: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  const reduce = useReducedMotion()
  const title = `${profile.displayName} 的作品集`

  const cta = (
    <div className="mt-6 flex w-full flex-col gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:gap-3">
      <a
        href="#work"
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#f4f4f5] px-5 py-2.5 text-sm font-semibold text-[#09090b] hover:bg-white"
        style={{ color: '#09090b', WebkitTextFillColor: '#09090b' }}
      >
        查看项目
      </a>
      <a
        href="#about"
        className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm text-slate-200 hover:border-white/35"
      >
        关于我
      </a>
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm text-slate-200 hover:border-white/35"
      >
        GitHub
      </a>
    </div>
  )

  const block = (
    <div className="max-w-2xl">
      <p className="text-[11px] font-medium tracking-[0.28em] text-slate-500 uppercase">Portfolio</p>
      <h1 className="mt-3 font-serif text-[2.2rem] font-normal leading-[1.15] tracking-tight text-white sm:mt-4 sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <p className="mt-3 text-[15px] tracking-wide text-slate-400 sm:mt-4 sm:text-lg">{profile.tagline}</p>
      <p className="mt-3 max-w-md text-[14px] leading-6 text-slate-500 sm:mt-4 sm:text-[15px] sm:leading-7">
        <span className="sm:hidden">{profile.blurbShort}</span>
        <span className="hidden sm:inline">{profile.blurb}</span>
      </p>
      {cta}
    </div>
  )

  if (reduce) {
    return (
      <section id="top" className="relative mx-auto max-w-6xl px-4 pb-12 pt-12 sm:min-h-[72vh] sm:px-5 sm:pb-20 sm:pt-28">
        {block}
      </section>
    )
  }

  return (
    <section id="top" className="relative mx-auto max-w-6xl px-4 pb-12 pt-12 sm:min-h-[72vh] sm:px-5 sm:pb-20 sm:pt-28">
      <div className="max-w-2xl">
        <motion.p custom={0} variants={fade} initial="hidden" animate="show" className="text-[11px] font-medium tracking-[0.28em] text-slate-500 uppercase">
          Portfolio
        </motion.p>
        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-3 font-serif text-[2.2rem] font-normal leading-[1.15] tracking-tight text-white sm:mt-4 sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p custom={2} variants={fade} initial="hidden" animate="show" className="mt-3 text-[15px] tracking-wide text-slate-400 sm:mt-4 sm:text-lg">
          {profile.tagline}
        </motion.p>
        <motion.p custom={3} variants={fade} initial="hidden" animate="show" className="mt-3 max-w-md text-[14px] leading-6 text-slate-500 sm:mt-4 sm:text-[15px] sm:leading-7">
          <span className="sm:hidden">{profile.blurbShort}</span>
          <span className="hidden sm:inline">{profile.blurb}</span>
        </motion.p>
        <motion.div custom={4} variants={fade} initial="hidden" animate="show">
          {cta}
        </motion.div>
      </div>
    </section>
  )
}
