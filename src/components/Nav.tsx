import { useLocale } from '../i18n/LocaleProvider'
import type { Locale } from '../i18n/copy'

export function Nav() {
  const { locale, setLocale, t } = useLocale()
  const { profile, nav } = t

  const toggle = (l: Locale) => {
    if (l !== locale) setLocale(l)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07080d]/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4">
        <a href="#top" className="shrink-0 text-sm font-medium text-white/90">
          {profile.displayName}
        </a>
        <nav className="flex max-w-[50%] gap-3 overflow-x-auto text-[12px] text-slate-400 [-ms-overflow-style:none] [scrollbar-width:none] sm:max-w-none sm:gap-6 sm:text-sm [&::-webkit-scrollbar]:hidden">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="shrink-0 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div
            className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5 text-[11px] sm:text-xs"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => toggle('zh')}
              className={`rounded-full px-2 py-1 transition sm:px-2.5 ${
                locale === 'zh' ? 'bg-white/15 text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
              aria-pressed={locale === 'zh'}
            >
              中
            </button>
            <button
              type="button"
              onClick={() => toggle('en')}
              className={`rounded-full px-2 py-1 transition sm:px-2.5 ${
                locale === 'en' ? 'bg-white/15 text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
              aria-pressed={locale === 'en'}
            >
              EN
            </button>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden text-[11px] text-slate-400 hover:text-white sm:inline sm:text-xs"
          >
            GitHub →
          </a>
        </div>
      </div>
    </header>
  )
}
