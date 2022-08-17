<template>

  <div v-if="game" class="game-details">
    <header class="game-header">
      <h1>{{ game.title }}</h1>
    </header>
    <main class="game-container">
      <iframe :src="`${hostUrl}/play/${game?._id}`" frameborder="0"></iframe>
    </main>
    <aside class="aside-bar">
      <h2>Description</h2>
      <p>{{ game.description }}</p>
    </aside>
  </div>
</template>

<script setup  lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useGameStore } from '@/stores/game.store'

const route = useRoute()
const store = useGameStore()
// ts-ignore because it dosen't know what proccess is without node types
// @ts-ignore
const hostUrl = process.env.NODE_ENV === 'production' ? 'https://mister-gamer.herokuapp.com' : 'http://localhost:3031'
const game = computed(() => store.getGameById(route.params.gameId as string) || null)
</script>