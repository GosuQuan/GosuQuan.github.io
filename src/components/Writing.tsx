import { articles } from '../data/content'

export function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">Talk tracks</p>
      <h2 className="mt-2 text-2xl font-semibold text-white">面试可讲点</h2>
      <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10">
        {articles.map((a) => (
          <a key={a.title} href={a.href} target="_blank" rel="noreferrer" className="flex flex-col gap-1 px-5 py-4 hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-white">{a.title}</p>
              <p className="mt-1 text-xs text-slate-500">{a.summary}</p>
            </div>
            <span className="text-xs text-slate-500">{a.status}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
