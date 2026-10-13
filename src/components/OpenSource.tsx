import { useLocale } from '../i18n/LocaleProvider'
import { BrandTag } from './BrandTag'
import { Reveal } from './Reveal'

export function OpenSource() {
  const { t } = useLocale()
  const os = t.openSource
  return (
    <section id="open" className="mx-auto max-w-6xl px-4 py-9 sm:px-5 sm:py-16">
      <Reveal tone="fade-left">
        <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">{os.eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">{os.title}</h2>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {os.items.map((item, i) => (
          <Reveal key={item.name} tone={i % 2 ? 'fade-right' : 'fade-left'} delay={0.06 * i}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-dashed border-white/15 bg-transparent p-5 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.03]"
            >
              <h3 className="text-lg font-medium text-white">{item.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <BrandTag key={tag.label} label={tag.label} logo={tag.logo} />
                ))}
              </div>
            </a>
          </Reveal>
        ))}
        <Reveal tone="scale" delay={0.1}>
          <div className="flex h-full items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-5 text-sm text-slate-400">
            {os.more}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
