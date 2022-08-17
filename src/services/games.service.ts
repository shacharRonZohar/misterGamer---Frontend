export const gamesService = {
  getGames,
}

function getGames() {
  return Promise.resolve(_getDemoGames())
}

function _getDemoGames() {
  return [
    {
      _id: '123',
      title: 'Chess - Vue',
      thumbnailURL: 'placeholder',
      description: 'A chess game built with Vue.js',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      categories: ['board', 'thinking', 'vue']
    },
    {
      _id: '321',
      title: 'Checkers - Vanilla TS',
      thumbnailURL: 'placeholder',
      description: 'A checkers game built with TypeScript',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      categories: ['board', 'thinking', 'vanilla']
    },
    {
      _id: '567',
      title: 'Wordle - React',
      thumbnailURL: 'placeholder',
      description: 'A wordle game built with React',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      categories: ['puzzle', 'thinking', 'react']
    }
  ]
}