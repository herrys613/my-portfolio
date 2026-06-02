import { ArrowUpRight } from 'lucide-react'
import type { ProjectItem } from '@/data/projects'
import { FadeIn } from '@/components/FadeIn'
import { BrowserMockup } from '@/components/BrowserMockup'
import { Badge } from '@/components/ui/badge'

interface SoftwareSectionProps {
  items: ProjectItem[]
}

export function SoftwareSection({ items }: SoftwareSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-16 lg:px-24">
      <FadeIn>
        <p className="mb-2 text-sm font-medium tracking-widest text-zinc-400 uppercase">
          03 — Software
        </p>
        <h2 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">
          Built Things
        </h2>
        <p className="mb-14 max-w-lg text-base text-muted-foreground">
          Full-stack applications, developer tools, and interactive experiences —
          shipped and used in the real world.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {items.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.1}>
            <div className="group space-y-4">
              <BrowserMockup
                url={item.siteUrl}
                imageUrl={item.screenshotUrl}
                imageAlt={item.title}
                className="transition-shadow duration-300 group-hover:shadow-lg"
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full text-[11px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <a
                  href={`https://${item.siteUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition-colors hover:border-zinc-900 hover:text-zinc-900"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
