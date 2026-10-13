import { about, profile } from '../data/content'
import { BrandTag } from './BrandTag'
import { Reveal } from './Reveal'

export function About() {
  const byId = Object.fromEntries(about.companies.map((c) => [c.id, c]))
  const jd = byId.jd
  const ke = byId.ke
  const tf = byId.tf

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10 sm:px-5 sm:py-16">
      <Reveal tone="blur">
        <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">About</p>
        <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">关于我</h2>
        <p className="mt-2 text-sm text-slate-400">{about.role}</p>
      </Reveal>

      <Reveal tone="fade-up" delay={0.06} className="mt-6">
        <p className="max-w-3xl text-sm leading-8 text-slate-300 sm:text-[15px] sm:leading-8">
          {about.introLead}{' '}
          <BrandTag label={jd.name} logo={jd.logo} href={jd.href} />{' '}
          {about.introMid}{' '}
          <BrandTag label={ke.name} logo={ke.logo} href={ke.href} />{' '}
          {about.introAfterKe}{' '}
          <BrandTag label={tf.name} logo={tf.logo} href={tf.href} />
          {about.introEnd}
        </p>
      </Reveal>

      <Reveal tone="scale" delay={0.1} className="mt-8">
        <p className="text-xs tracking-[0.18em] text-slate-500 uppercase">工作技术</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {about.focus.map((f) => (
            <BrandTag key={f.label} label={f.label} logo={f.logo} />
          ))}
        </div>
      </Reveal>

      <Reveal tone="scale" delay={0.14} className="mt-8">
        <p className="text-xs tracking-[0.18em] text-slate-500 uppercase">工作之余</p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{about.hobbyBlurb}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {about.hobbies.map((h) => (
            <BrandTag key={h.label} label={h.label} emoji={h.emoji} />
          ))}
        </div>
        {profile.email ? (
          <a href={`mailto:${profile.email}`} className="mt-6 inline-block text-sm text-slate-500 transition hover:text-slate-300">
            {profile.email}
          </a>
        ) : null}
      </Reveal>
    </section>
  )
}
