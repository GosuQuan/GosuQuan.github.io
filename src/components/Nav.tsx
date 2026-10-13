import { motion } from 'framer-motion'
import { nav, profile } from '../data/content'

export function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-white/5 bg-[#05060a]/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="text-sm font-semibold tracking-wide text-cyan-200">
          {profile.name}
          <span className="ml-2 text-white/40">作品集</span>
        </a>
        <nav className="hidden gap-6 text-sm text-white/60 sm:flex">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="transition hover:text-cyan-200">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:border-cyan-300/40 hover:text-cyan-100"
        >
          GitHub
        </a>
      </div>
    </motion.header>
  )
}
