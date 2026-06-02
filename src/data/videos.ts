export interface VideoItem {
  id: string
  title: string
  videoUrl: string
  posterUrl: string
  short?: boolean
}

export const videosData: VideoItem[] = [
  {
    id: 'v1',
    title: '29 Days',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/project-2145d.firebasestorage.app/o/my-portfolio-videos%2F29-Days.mp4?alt=media&token=ea2fcffa-6742-4291-91a4-06453cb8ae47',
    posterUrl: 'https://firebasestorage.googleapis.com/v0/b/project-2145d.firebasestorage.app/o/my-portfolio-videos%2Fvlcsnap-2026-06-02-15h34m55s022.png?alt=media&token=3e64028b-f400-495d-aed9-102a30c4c067',
    short: true,
  },
  {
    id: 'v2',
    title: 'Central Travel',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/project-2145d.firebasestorage.app/o/my-portfolio-videos%2Fcentral-travel.mp4?alt=media&token=88966722-03c0-431a-9962-4358e5bbc950',
    posterUrl: 'https://firebasestorage.googleapis.com/v0/b/project-2145d.firebasestorage.app/o/my-portfolio-videos%2Fvlcsnap-2026-06-02-15h35m28s255.png?alt=media&token=4cfe508d-3a79-476b-931e-ba52c2afd6cf',
    short: true,
  },
  {
    id: 'v3',
    title: 'Four Season Decks',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/project-2145d.firebasestorage.app/o/my-portfolio-videos%2Ffour-season-decks.mp4?alt=media&token=8d1eed1d-1056-4502-8ebc-baa3bc1b14cf',
    posterUrl: 'https://firebasestorage.googleapis.com/v0/b/project-2145d.firebasestorage.app/o/my-portfolio-videos%2Fvlcsnap-2026-06-02-15h32m44s367.png?alt=media&token=16104309-f42e-4b1d-a77a-0089325d2c6d',
    short: false,
  },
  {
    id: 'v4',
    title: 'Hues',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/project-2145d.firebasestorage.app/o/my-portfolio-videos%2Fhues.mp4?alt=media&token=88906310-c714-4537-998b-e8ff8df00d6c',
    posterUrl: 'https://firebasestorage.googleapis.com/v0/b/project-2145d.firebasestorage.app/o/my-portfolio-videos%2Fvlcsnap-2026-06-02-15h34m35s079.png?alt=media&token=66171431-4d5a-4ad2-b8d7-830c72c9b5d2',
    short: true,
  },
]
