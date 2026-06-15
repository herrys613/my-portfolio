import { useEffect, useState } from 'react'
import { X, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { VideoItem } from '@/data/videos'
import { FadeIn } from '@/components/FadeIn'
import { Card } from '@/components/ui/card'

interface VideosSectionProps {
  items: VideoItem[]
}

function VideoModal({ item, onClose }: { item: VideoItem; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-transform hover:scale-110"
          aria-label="Close"
        >
          <X className="h-4 w-4 text-zinc-900" />
        </button>

        <div className={`overflow-hidden rounded-3xl border border-white/20 bg-black shadow-2xl ${
          item.short
            ? 'h-[min(85vh,calc((100vw-4rem)*16/9))] aspect-9/16'
            : 'w-[min(calc(100vw-2rem),56rem,calc(85vh*16/9))] aspect-video'
        }`}>
          <video
            src={item.videoUrl}
            autoPlay
            controls
            playsInline
            className="h-full w-full"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

function VideoCard({ item, onPlay }: { item: VideoItem; onPlay: () => void }) {
  const thumbnail = item.posterUrl

  return (
    <Card className="cursor-default overflow-hidden rounded-2xl border-zinc-100 p-0 transition-shadow hover:shadow-md">
      <button
        onClick={onPlay}
        className="group relative block w-full p-0 border-0"
        aria-label={`Play ${item.title}`}
      >
        <div className="relative w-full overflow-hidden bg-zinc-900 aspect-video">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-zinc-900" />
          )}
          <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-5 w-5 fill-zinc-900 text-zinc-900" />
            </div>
          </div>
        </div>
      </button>
      {item.title && (
        <div className="px-4 pb-5 mt-0">
          <h3 className="text-sm font-semibold text-foreground leading-none">{item.title}</h3>
        </div>
      )}
    </Card>
  )
}

export function VideosSection({ items }: VideosSectionProps) {
  const [activeItem, setActiveItem] = useState<VideoItem | null>(null)

  if (items.length === 0) return null

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-16 lg:px-24">
      <FadeIn>
        <p className="mb-2 text-sm font-medium tracking-widest text-zinc-400 uppercase">
          02 — Video
        </p>
        <h2 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">
          Video Production
        </h2>
        <p className="mb-14 max-w-lg text-base text-muted-foreground">
          Brand films, motion graphics, documentaries, and social content — built
          to move people and move product.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.08}>
            <VideoCard item={item} onPlay={() => setActiveItem(item)} />
          </FadeIn>
        ))}
      </div>

      <AnimatePresence>
        {activeItem && (
          <VideoModal item={activeItem} onClose={() => setActiveItem(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
