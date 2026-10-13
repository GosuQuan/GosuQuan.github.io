import { nav, profile } from '../data/content'

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07080d]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#about" className="text-sm font-medium text-white">{profile.name}</a>
        <nav className="hidden gap-6 text-sm text-slate-400 sm:flex">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-xs text-slate-400 hover:text-white">
          GitHub →
        </a>
      </div>
    </header>
  )
}
