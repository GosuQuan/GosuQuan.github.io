import { nav, profile } from '../data/content'

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07080d]/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4">
        <a href="#top" className="shrink-0 text-sm font-medium text-white/90">{profile.displayName ?? profile.name}</a>
        <nav className="flex max-w-[58%] gap-3 overflow-x-auto text-[12px] text-slate-400 [-ms-overflow-style:none] [scrollbar-width:none] sm:max-w-none sm:gap-6 sm:text-sm [&::-webkit-scrollbar]:hidden">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="shrink-0 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <a href={profile.github} target="_blank" rel="noreferrer" className="shrink-0 text-[11px] text-slate-400 hover:text-white sm:text-xs">
          GitHub →
        </a>
      </div>
    </header>
  )
}
