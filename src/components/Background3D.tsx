import { lazy, Suspense, useEffect, useState } from 'react'

const HeroScene = lazy(() => import('./HeroScene'))

export function Background3D() {
  const [ready, setReady] = useState(false)
  const [allow, setAllow] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setAllow(mq.matches && !reduce.matches)
    update()
    mq.addEventListener('change', update)
    reduce.addEventListener('change', update)
    return () => {
      mq.removeEventListener('change', update)
      reduce.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!allow) return
    const t = window.setTimeout(() => setReady(true), 250)
    return () => window.clearTimeout(t)
  }, [allow])

  if (!allow) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_500px_at_75%_20%,rgba(148,163,184,0.12),transparent_55%),radial-gradient(700px_400px_at_15%_80%,rgba(165,180,252,0.08),transparent_50%),#07080d]"
      />
    )
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[#07080d]" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_420px_at_70%_25%,rgba(148,163,184,0.1),transparent_60%)]" />
      <div className="absolute inset-y-0 right-0 w-full max-w-3xl opacity-70">
        {ready ? (
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        ) : null}
      </div>
    </div>
  )
}
