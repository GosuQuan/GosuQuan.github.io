import { openSource } from '../data/content'

export function OpenSource() {
  return (
    <section id="open" className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">Open source</p>
      <h2 className="mt-2 text-2xl font-semibold text-white">开源项目</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {openSource.map((item) => (
          <a key={item.name} href={item.url} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04]">
            <h3 className="text-lg font-medium text-white">{item.name}</h3>
            <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
            <div className="mt-4 flex gap-2">
              {item.tags.map((t) => (
                <span key={t} className="text-xs text-slate-500">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
