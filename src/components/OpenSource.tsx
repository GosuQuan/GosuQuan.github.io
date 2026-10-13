import { motion } from 'framer-motion'
import { openSource } from '../data/content'

export function OpenSource() {
  return (
    <section id="open" className="mx-auto max-w-6xl px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <p className="text-sm uppercase tracking-[0.24em] text-violet-300/80">Open Source</p>
        <h2 className="mt-2 text-3xl font-semibold">开源分享</h2>
      </motion.div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {openSource.map((item, i) => (
          <motion.a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-300/30 hover:bg-white/[0.05]"
          >
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="mt-2 text-sm text-white/55">{item.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span key={t} className="rounded-full bg-violet-400/10 px-2.5 py-1 text-xs text-violet-200">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center rounded-2xl border border-dashed border-white/15 p-6 text-sm text-white/45"
        >
          更多开源项目会陆续挂到这里。欢迎从 GitHub 关注更新。
        </motion.div>
      </div>
    </section>
  )
}
