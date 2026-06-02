import { motion } from 'framer-motion'
import type { GraphicItem } from '@/data/graphics'
import { FadeIn } from '@/components/FadeIn'

interface GraphicsSectionProps {
  items: GraphicItem[]
}

function splitIntoColumns(items: GraphicItem[], count: number) {
  const cols: GraphicItem[][] = Array.from({ length: count }, () => [])
  items.forEach((item, i) => cols[i % count].push(item))
  return cols
}

export function GraphicsSection({ items }: GraphicsSectionProps) {
  const cols2 = splitIntoColumns(items, 2)
  const cols3 = splitIntoColumns(items, 3)

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-16 lg:px-24">
      <FadeIn>
        <p className="mb-2 text-sm font-medium tracking-widest text-zinc-400 uppercase">
          01 — Graphics
        </p>
        <h2 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">
          Visual Design
        </h2>
        <p className="mb-14 max-w-lg text-base text-muted-foreground">
          Branding, editorial, print, and digital design work spanning identity systems,
          packaging, and visual storytelling.
        </p>
      </FadeIn>

      {/* Mobile: 2 columns */}
      <div className="flex gap-3 md:hidden">
        {cols2.map((col, ci) => (
          <div key={ci} className="flex flex-1 flex-col gap-3">
            {col.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.07}>
                <div className="overflow-hidden rounded-xl border border-zinc-100 bg-card transition-shadow duration-300 hover:shadow-md">
                  <motion.img
                    src={item.imageUrl}
                    alt={item.title}
                    className="block w-full"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        ))}
      </div>

      {/* Desktop: 3 columns */}
      <div className="hidden gap-4 md:flex">
        {cols3.map((col, ci) => (
          <div key={ci} className="flex flex-1 flex-col gap-4">
            {col.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.07}>
                <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-card transition-shadow duration-300 hover:shadow-md">
                  <motion.img
                    src={item.imageUrl}
                    alt={item.title}
                    className="block w-full"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
