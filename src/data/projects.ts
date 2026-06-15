export interface ProjectItem {
  id: string
  title: string
  description: string
  screenshotUrl: string
  siteUrl: string
  tags: string[]
}

const base = import.meta.env.BASE_URL

export const projectsData: ProjectItem[] = [
  {
    id: 'p1',
    title: 'The Next Dress',
    description: 'Buy & Sell Modest Dresses',
    screenshotUrl: `${base}images/projects/the-next-dress-website-cover.png`,
    siteUrl: 'thenextdress.com',
    tags: ['Front-end', 'Back-end'],
  },
  {
    id: 'p2',
    title: 'Yid Career',
    description: 'Helping People Find Jobs',
    screenshotUrl: `${base}images/projects/yid-career-website-cover.png`,
    siteUrl: 'yidcareer.org',
    tags: ['Front-end', 'Back-end'],
  },
  {
    id: 'p3',
    title: 'Apple Grid',
    description: 'EV Chargers - Powering the Future',
    screenshotUrl: `${base}images/projects/apple-grid-website-cover.png`,
    siteUrl: 'applegrid.com',
    tags: ['Front-end'],
  },
]
