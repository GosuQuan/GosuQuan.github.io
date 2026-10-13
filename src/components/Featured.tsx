import { featuredProject } from '../data/content'
import { BrandTag } from './BrandTag'
import { Reveal } from './Reveal'

export function Featured() {
  const p = featuredProject
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-20">
      <Reveal tone="blur">
        <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">Open source</p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{p.name}</h2>
        <p className="mt-2 text-slate-400">{p.subtitle}</p>
      </Reveal>

      <Reveal tone="scale" delay={0.08} className="mt-8">
        <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8">
          <p className="max-w-3xl text-sm leading-7 text-slate-300">{p.description}</p>

          <div className="mt-10 space-y-10">
            {p.demos.map((demo, i) => {
              const reverse = i % 2 === 1
              return (
                <Reveal key={demo.src} tone={reverse ? 'fade-right' : 'fade-left'} delay={0.04 * i}>
                  <a
                    href={demo.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex flex-col gap-5 md:items-center md:gap-8 ${
                      reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_12px_40px_rgba(0,0,0,0.35)] md:w-[58%]">
                      <img
                        src={demo.src}
                        alt={demo.title}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="md:w-[42%]">
                      <p className="text-[11px] tracking-[0.18em] text-slate-500 uppercase">
                        Demo {String(i + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-2 text-lg font-medium text-white group-hover:text-zinc-100">
                        {demo.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-400">{demo.body}</p>
                      <span className="mt-4 inline-flex text-xs text-slate-500 transition group-hover:text-slate-300">
                        打开对应页面 →
                      </span>
                    </div>
                  </a>
                </Reveal>
              )
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {p.highlights.map((h) => (
              <BrandTag key={h.label} label={h.label} logo={h.logo} href={h.href} />
            ))}
          </div>
        </article>
      </Reveal>
    </section>
  )
}
