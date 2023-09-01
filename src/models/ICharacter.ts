export interface ICharacter {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: 'jpg' | 'png' | 'svg' | 'jpeg' | 'webp'
  }
}

export interface ICharacterComics {
  available: number
  items: {
    name: string
  }
}
