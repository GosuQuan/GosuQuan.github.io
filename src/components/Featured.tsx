import { featuredProject } from '../data/content'
import { Reveal } from './Reveal'

export function Featured() {
  const p = featuredProject
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal tone="blur">
        <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">Featured open source</p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{p.name}</h2>
        <p className="mt-2 text-slate-400">{p.subtitle}</p>
      </Reveal>

      <Reveal tone="scale" delay={0.08} className="mt-8">
        <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8">
          <p className="max-w-3xl text-sm leading-7 text-slate-300">{p.description}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {p.talkingPoints.slice(0, 3).map((tp, i) => (
              <Reveal key={tp.title} tone={i === 1 ? 'fade-up' : i === 0 ? 'fade-left' : 'fade-right'} delay={0.05 * i}>
                <div className="h-full rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur">
                  <h3 className="text-sm font-medium text-white">{tp.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-400">{tp.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.highlights.map((h) => (
              <a key={h.label} href={h.href} target="_blank" rel="noreferrer" className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-300 ring-1 ring-white/10 hover:bg-white/10">
                {h.label}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={p.demo} target="_blank" rel="noreferrer" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950">
              打开演示
            </a>
            <a href={p.repo} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300">
              查看仓库
            </a>
          </div>
        </article>
      </Reveal>
    </section>
  )
}
