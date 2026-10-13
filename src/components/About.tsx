import { about, profile } from '../data/content'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10 sm:px-5 sm:py-16">
      <Reveal tone="blur">
        <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">About</p>
        <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">关于我</h2>
        <p className="mt-2 text-sm text-slate-400">{about.role}</p>
      </Reveal>

      <Reveal tone="fade-up" delay={0.06} className="mt-6">
        <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-[15px]">{about.intro}</p>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {about.highlights.map((h, i) => (
          <Reveal key={h.title} tone={i === 1 ? 'fade-up' : i === 0 ? 'fade-left' : 'fade-right'} delay={0.05 * i}>
            <div className="h-full rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur">
              <h3 className="text-sm font-medium text-white">{h.title}</h3>
              <p className="mt-3 text-xs leading-6 text-slate-400">{h.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal tone="scale" delay={0.1} className="mt-6">
        <div className="flex flex-wrap gap-2">
          {about.focus.map((f) => (
            <span key={f} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-300 ring-1 ring-white/10">
              {f}
            </span>
          ))}
        </div>
        {profile.email ? (
          <a href={`mailto:${profile.email}`} className="mt-5 inline-block text-sm text-slate-500 transition hover:text-slate-300">
            {profile.email}
          </a>
        ) : null}
      </Reveal>
    </section>
  )
}
