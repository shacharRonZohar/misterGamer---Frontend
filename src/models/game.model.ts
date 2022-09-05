export interface Game {
  _id: string,
  title: string,
  description: string,
  thumbnailURL: string,
  createdAt: number,
  updatedAt: number,
  categories: string[]
}

export interface NewGame extends Omit<Game, '_id'> {
  files: Files
}

// TODO: Find a shorter name for this interface
export interface ProccessedFile {
  name: string
  data: string
  path: string
}

export type Files = ProccessedFile[]
