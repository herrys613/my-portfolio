export interface ProjectItem {
  id: string
  title: string
  description: string
  screenshotUrl: string
  siteUrl: string
  tags: string[]
}

export const projectsData: ProjectItem[] = [
  {
    id: 'p1',
    title: 'The Next Dress',
    description: 'Buy & Sell Modest Dresses',
    screenshotUrl: '/images/projects/the-next-dress-website-cover.png',
    siteUrl: 'thenextdress.com',
    tags: ['Front-end', 'Back-end'],
  },
  {
    id: 'p2',
    title: 'Yid Career',
    description: 'Helping People Find Jobs',
    screenshotUrl: '/images/projects/yid-career-website-cover.png',
    siteUrl: 'yidcareer.org',
    tags: ['Front-end', 'Back-end'],
  },
]
