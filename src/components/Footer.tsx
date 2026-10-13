import { profile } from '../data/content'

export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl border-t border-white/10 px-5 py-12">
      <h2 className="text-xl font-semibold text-white">联系</h2>
      <p className="mt-2 text-sm text-slate-400">开源协作 / 面试可直接看仓库与演示。</p>
      <a href={profile.github} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-slate-300 hover:text-white">
        github.com/GosuQuan →
      </a>
      <p className="mt-8 text-xs text-slate-600">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  )
}
