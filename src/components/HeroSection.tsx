import { motion } from 'framer-motion'
import { SplitText } from '@/components/SplitText'
import { BlurText } from '@/components/BlurText'

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6 py-24 md:px-16 lg:px-24">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, oklch(0.82 0 0) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Vignette overlay — fades dots toward center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, white 30%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl md:mx-auto md:text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-sm font-medium tracking-widest text-zinc-400 uppercase"
        >
          Multidisciplinary Creator
        </motion.p>

        {/* Heading with split-text reveal */}
        <h1 className="mb-6 text-5xl font-semibold tracking-tight text-foreground md:text-7xl lg:text-8xl">
          <SplitText text="Design. Build." delay={0.2} />
          <br />
          <SplitText text="Create." delay={0.55} />
        </h1>

        {/* Tagline with blur-in */}
        <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
          <BlurText
            text="Crafting experiences at the intersection of design and technology."
            delay={0.95}
          />
        </p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1.6 }}
          className="max-w-md text-base leading-relaxed text-muted-foreground md:mx-auto"
        >
          I'm a multidisciplinary creator working across graphic design, video production,
          and software development. I turn ideas into polished, purposeful work.
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mt-16 flex items-center justify-center gap-2 text-xs text-zinc-400"
        >
          <span className="h-px w-8 bg-zinc-300" />
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  )
}
