import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
}

const container = (delay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: delay,
    },
  },
})

const wordVariant = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

export function SplitText({ text, className, delay = 0 }: SplitTextProps) {
  const words = text.split(' ')

  return (
    <motion.span
      variants={container(delay)}
      initial="hidden"
      animate="visible"
      className={cn('inline-flex flex-wrap gap-x-[0.25em]', className)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            variants={wordVariant}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
