import { HeroSection } from '@/components/HeroSection'
import { GraphicsSection } from '@/components/GraphicsSection'
import { VideosSection } from '@/components/VideosSection'
import { SoftwareSection } from '@/components/SoftwareSection'
import { Separator } from '@/components/ui/separator'
import { graphicsData } from '@/data/graphics'
import { videosData } from '@/data/videos'
import { projectsData } from '@/data/projects'

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <Separator />
      <GraphicsSection items={graphicsData} />
      <Separator />
      <VideosSection items={videosData} />
      <Separator />
      <SoftwareSection items={projectsData} />

      {/* Footer */}
      <footer className="border-t border-zinc-100 px-6 py-10 text-center text-xs text-zinc-400 md:px-16 lg:px-24">
        © {new Date().getFullYear()} — All rights reserved
      </footer>
    </main>
  )
}
