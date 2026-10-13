import { profile } from '../data/content'

export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl border-t border-white/10 px-5 py-14">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">一起做点有意思的</h2>
          <p className="mt-2 max-w-md text-sm text-white/50">
            开源协作、SEO/GEO 电商交付，或动效/前端实验都可以聊。
          </p>
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-cyan-300/40 hover:text-cyan-100"
        >
          github.com/GosuQuan
        </a>
      </div>
      <p className="mt-10 text-xs text-white/30">© {new Date().getFullYear()} {profile.name}. Built for GitHub Pages.</p>
    </footer>
  )
}
