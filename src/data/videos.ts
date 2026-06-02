export interface VideoItem {
  id: string
  title: string
  description: string
  embedUrl: string
  posterUrl: string
  short?: boolean
}

export const videosData: VideoItem[] = [
  {
    id: 'v1',
    title: 'Product Launch — Horizon App',
    description: '60-second commercial for a productivity mobile app.',
    embedUrl: 'https://www.youtube.com/embed/QEq1mo2r_lU',
    posterUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=338&fit=crop&auto=format',
  },
  {
    id: 'v2',
    title: 'Motion Graphics Reel 2024',
    description: 'Kinetic typography, transitions, and title card animations.',
    embedUrl: 'https://www.youtube.com/embed/qCGZuAG-vMg',
    posterUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=338&fit=crop&auto=format',
  },
  {
    id: 'v3',
    title: 'Documentary — Studio Sessions',
    description: 'Short-form documentary following a recording artist.',
    embedUrl: 'https://www.youtube.com/embed/iBEvGFmcd6c',
    posterUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=338&fit=crop&auto=format',
  },
  {
    id: 'v4',
    title: 'Brand Film — Solstice Skincare',
    description: 'Cinematic brand film shot in natural light across three locations.',
    embedUrl: 'https://www.youtube.com/embed/1caQ-tkgQ3A',
    posterUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=338&fit=crop&auto=format',
  },
]
