import { articles } from '../data/content'
import { Reveal } from './Reveal'

export function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-6xl px-4 py-9 sm:px-5 sm:py-16">
      <Reveal tone="fade-up">
        <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">Notes</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">笔记与实验</h2>
      </Reveal>
      <div className="mt-8 space-y-3">
        {articles.map((a, i) => (
          <Reveal key={a.title} tone="blur" delay={0.05 * i}>
            <a
              href={a.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/20 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm text-white">{a.title}</p>
                <p className="mt-1 text-xs text-slate-500">{a.summary}</p>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">{a.status}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
