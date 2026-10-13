import { motion } from 'framer-motion'
import { featuredProject } from '../data/content'

export function Featured() {
  const p = featuredProject
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">Featured Case</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">电商项目集成 · {p.name}</h2>
        <p className="mt-2 text-white/50">{p.subtitle}</p>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
      >
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[260px] overflow-hidden border-b border-white/10 bg-[#0a0f1c] p-8 lg:border-b-0 lg:border-r">
            <motion.div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  'radial-gradient(circle at 30% 30%, rgba(110,231,255,0.25), transparent 40%), radial-gradient(circle at 70% 70%, rgba(167,139,250,0.28), transparent 45%)',
              }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">Live Demo Preview</p>
                <h3 className="mt-4 text-2xl font-semibold">{p.name}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">{p.description}</p>
              </div>
              <p className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-400/5 px-4 py-3 text-sm text-cyan-100/90">
                {p.seoLine}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-8">
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {p.highlights.map((h) => (
                <a
                  key={h.label}
                  href={h.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white/75 transition hover:border-violet-300/40 hover:text-violet-100"
                >
                  {h.label} →
                </a>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-3 pt-2">
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#05060a] transition hover:bg-cyan-100"
              >
                打开演示
              </a>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/40"
              >
                查看仓库
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  )
}
