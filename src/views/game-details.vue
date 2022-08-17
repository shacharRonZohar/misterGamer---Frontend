<template>

  <div class="game-details">
    <header class="game-header">
      <h1>{{ game }}</h1>
    </header>
    <main class="game-container">
      <iframe :src="`${hostUrl}/game/${game?._id}`" frameborder="0"></iframe>
    </main>
  </div>
</template>

<script setup  lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useGameStore } from '@/stores/game.store'

const route = useRoute()
const store = useGameStore()
const hostUrl = process.env.NODE_ENV === 'production' ? 'https://mister-gamer.herokuapp.com' : 'http://localhost:3031'

// const gameId = route.params.id
console.log(route.params.gameId)
const game = computed(() => store.getGameById(route.params.gameId as string))

// watch( () => route.params.gameId, newId => {

// })
// const beforeRouteUpdate = (to,from) 
</script>