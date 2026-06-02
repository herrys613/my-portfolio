import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
}

const container = (delay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: delay,
    },
  },
})

const wordVariant = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 4 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export function BlurText({ text, className, delay = 0.5 }: BlurTextProps) {
  const words = text.split(' ')

  return (
    <motion.span
      variants={container(delay)}
      initial="hidden"
      animate="visible"
      className={cn('inline-flex flex-wrap gap-x-[0.3em]', className)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariant} style={{ display: 'inline-block' }}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
