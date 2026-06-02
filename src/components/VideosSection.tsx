import { useState } from 'react'
import { Play } from 'lucide-react'
import type { VideoItem } from '@/data/videos'
import { FadeIn } from '@/components/FadeIn'
import { Card, CardContent } from '@/components/ui/card'

interface VideosSectionProps {
  items: VideoItem[]
}

function getVideoId(embedUrl: string) {
  return embedUrl.split('/embed/')[1]?.split('?')[0] ?? ''
}

function VideoCard({ item }: { item: VideoItem }) {
  const [playing, setPlaying] = useState(false)
  const videoId = getVideoId(item.embedUrl)
  const thumbnail = item.posterUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <Card className="cursor-default overflow-hidden rounded-2xl border-zinc-100 p-0 transition-shadow hover:shadow-md">
      <div className={`relative w-full overflow-hidden bg-black ${item.short ? 'aspect-9/16' : 'aspect-video'}`}>
        {playing ? (
          <iframe
            src={`${item.embedUrl}?autoplay=1&rel=0&modestbranding=1`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group relative h-full w-full"
            aria-label={`Play ${item.title}`}
          >
            <img
              src={thumbnail}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <Play className="ml-1 h-5 w-5 fill-zinc-900 text-zinc-900" />
              </div>
            </div>
          </button>
        )}
      </div>
      <CardContent className="px-5 py-4">
        <h3 className="mb-1 text-sm font-semibold text-foreground">{item.title}</h3>
        <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  )
}

export function VideosSection({ items }: VideosSectionProps) {
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
            <VideoCard item={item} />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
