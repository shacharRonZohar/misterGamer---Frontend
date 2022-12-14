import { httpService } from './http.service'
import type { NewGame } from '@/models/game.model'
export const gamesService = {
  getGames,
  getNewGame
}

function getGames() {
  return httpService.get('game')
}

function getNewGame(): NewGame {
  return {
    title: '',
    thumbnailURL: '',
    description: '',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    categories: [],
    files: []
  }
}

function _getDemoGames() {
  return [
    {
      _id: '123',
      title: 'Chess - Vue',
      thumbnailURL: 'placeholder',
      description: 'A chess game built with Vue.js. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque voluptatem laboriosam fugiat excepturi dicta corporis veniam iste quaerat recusandae, quis dolorem non quibusdam repellat vel nemo voluptatibus dolorum ipsum?',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      categories: ['board', 'thinking', 'vue']
    },
    {
      _id: '321',
      title: 'Checkers - Vanilla TS',
      thumbnailURL: 'placeholder',
      description: 'A checkers game built with TypeScript. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque voluptatem laboriosam fugiat excepturi dicta corporis veniam iste quaerat recusandae, quis dolorem non quibusdam repellat vel nemo voluptatibus dolorum ipsum?',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      categories: ['board', 'thinking', 'vanilla']
    },
    {
      _id: '567',
      title: 'Wordle - React',
      thumbnailURL: 'placeholder',
      description: 'A wordle game built with React. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque voluptatem laboriosam fugiat excepturi dicta corporis veniam iste quaerat recusandae, quis dolorem non quibusdam repellat vel nemo voluptatibus dolorum ipsum?',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      categories: ['puzzle', 'thinking', 'react']
    }
  ]
}