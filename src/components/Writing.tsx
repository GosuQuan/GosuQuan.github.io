import { motion } from 'framer-motion'
import { articles } from '../data/content'

export function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-6xl px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Writing & Labs</p>
        <h2 className="mt-2 text-3xl font-semibold">技术文章与实验</h2>
      </motion.div>
      <div className="mt-8 space-y-3">
        {articles.map((a, i) => (
          <motion.a
            key={a.title}
            href={a.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 transition hover:border-cyan-300/30 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-[11px] text-cyan-200">
                  {a.status}
                </span>
                <h3 className="font-medium group-hover:text-cyan-100">{a.title}</h3>
              </div>
              <p className="mt-1 text-sm text-white/50">{a.summary}</p>
            </div>
            <span className="text-sm text-white/35 transition group-hover:text-cyan-200">阅读 →</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
