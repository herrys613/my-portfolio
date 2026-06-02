export interface GraphicItem {
  id: string
  title: string
  imageUrl: string
}

const base = import.meta.env.BASE_URL

export const graphicsData: GraphicItem[] = [
  { id: 'g1',  title: '150 Days',       imageUrl: `${base}images/graphics/150-days.png` },
  { id: 'g2',  title: 'Apple Grid',     imageUrl: `${base}images/graphics/apple-grid.png` },
  { id: 'g3',  title: 'The Next Dress', imageUrl: `${base}images/graphics/the-next-dress.png` },
  { id: 'g4',  title: 'Hues',           imageUrl: `${base}images/graphics/hues.png` },
  { id: 'g5',  title: 'Five Star',      imageUrl: `${base}images/graphics/fivestar.png` },
  { id: 'g6',  title: 'Excelsior',      imageUrl: `${base}images/graphics/excelsior.png` },
  { id: 'g7',  title: 'Caribou',        imageUrl: `${base}images/graphics/caribou.png` },
  { id: 'g8',  title: 'Clearstream',    imageUrl: `${base}images/graphics/clearstream Full Page .png` },
  { id: 'g9',  title: 'Wheels',         imageUrl: `${base}images/graphics/wheels.png` },
  { id: 'g10', title: 'Morocco',        imageUrl: `${base}images/graphics/morocco.png` },
  { id: 'g11', title: 'In Order',       imageUrl: `${base}images/graphics/inorder.png` },
]
