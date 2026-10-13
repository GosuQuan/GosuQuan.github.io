/** Shared pill with optional local logo — companies, tech, hobbies pattern. */
export type BrandTagItem = {
  label: string
  logo?: string
  emoji?: string
  href?: string
}

export function BrandTag({ label, logo, emoji, href }: BrandTagItem) {
  const inner = (
    <>
      {logo ? (
        <img src={logo} alt="" width={14} height={14} className="h-3.5 w-3.5 shrink-0 object-contain" />
      ) : emoji ? (
        <span aria-hidden="true" className="text-[12px] leading-none">
          {emoji}
        </span>
      ) : null}
      <span>{label}</span>
    </>
  )

  const className =
    'inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs text-slate-300 align-middle'

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${className} transition hover:border-white/25 hover:bg-white/[0.1] hover:text-white`}
      >
        {inner}
      </a>
    )
  }
  return <span className={className}>{inner}</span>
}
