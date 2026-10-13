import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { siteCopy, type Locale, type SiteCopy } from './copy'

type Ctx = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: SiteCopy
}

const LocaleContext = createContext<Ctx | null>(null)
const STORAGE_KEY = 'portfolio-locale'

function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'zh' || saved === 'en') return saved
  } catch {
    /* ignore */
  }
  return 'zh'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window === 'undefined' ? 'zh' : detectLocale(),
  )

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    document.title = siteCopy[locale].meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', siteCopy[locale].meta.description)
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale, t: siteCopy[locale] }), [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
