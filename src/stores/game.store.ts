import { defineStore } from "pinia"
// import type { Game } from '@/models/game'
import type { Game } from '../models/game.model'
import { gamesService } from '../services/games.service'

export const useGameStore = defineStore({
  id: "game",
  state: () => ({
    games: [] as Game[],
  }),
  getters: {
    getGames: state => state.games,
    getGameById: state => (gameId: string) => {
      console.log(state.games.find(({ _id }) => _id === gameId))
      return state.games.find(({ _id }) => _id === gameId)
    }
  },
  actions: {
    async loadGames() {
      try {
        this.games = await gamesService.getGames()
      } catch (err) {
        console.log(err)
      }
    }
  }
}
)
// const store:Store = defineStore({
//   id: "game",
//   state: () => ({
//     games: [],
//   }),
//   getters: {
//     gameById: (state) => (gameId: string): Game => state.games.find(({ _id }) => _id === gameId)
//   }
// })
// export const useGameStore = store

// interface Store {
//   id:string
//   state: () => ({
//     games:Game[]
//   })
// }
