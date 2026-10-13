import { profile } from '../data/content'
import { Reveal } from './Reveal'

export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-5 py-16">
      <Reveal tone="scale">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-10 backdrop-blur-xl sm:px-10">
          <h2 className="text-2xl font-semibold text-white">联系</h2>
          <p className="mt-2 max-w-lg text-sm text-slate-400">开源协作 / 面试可直接看仓库与演示。</p>
          <a href={profile.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-[#f4f4f5] px-4 py-2 text-sm font-semibold hover:bg-white" style={{ color: "#09090b" }}>
            github.com/GosuQuan
          </a>
          <p className="mt-8 text-xs text-slate-600">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </Reveal>
    </footer>
  )
}
