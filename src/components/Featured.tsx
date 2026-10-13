import { featuredProject } from '../data/content'

export function Featured() {
  const p = featuredProject
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">Featured open source</p>
      <h2 className="mt-2 text-3xl font-semibold text-white">{p.name}</h2>
      <p className="mt-2 text-slate-400">{p.subtitle}</p>

      <article className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <p className="max-w-3xl text-sm leading-7 text-slate-300">{p.description}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {p.talkingPoints.slice(0, 3).map((tp) => (
            <div key={tp.title} className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <h3 className="text-sm font-medium text-white">{tp.title}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-400">{tp.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
              {s}
            </span>
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
    </section>
  )
}
