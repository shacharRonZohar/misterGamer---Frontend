export interface Game {
  _id: string,
  title: string,
  description: string,
  thumbnailURL: string,
  createdAt: number,
  updatedAt: number,
  categories: string[]
}