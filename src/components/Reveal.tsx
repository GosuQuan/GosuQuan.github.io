import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Tone = 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'blur'

const variants: Record<Tone, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -32 },
    show: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 32 },
    show: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(8px)', y: 14 },
    show: { opacity: 1, filter: 'blur(0px)', y: 0 },
  },
}

export function Reveal({
  children,
  tone = 'fade-up',
  className = '',
  delay = 0,
}: {
  children: ReactNode
  tone?: Tone
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      variants={variants[tone]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.22, margin: '-8% 0px -8% 0px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
