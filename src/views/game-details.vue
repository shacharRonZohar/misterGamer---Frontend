<template>

  <div class="game-details">
    <header class="game-header">
      <h1>{{ game }}</h1>
    </header>
    <main class="game-container">
      <iframe :src="`${hostUrl}/game/${game}`" frameborder="0"></iframe>
    </main>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'game-details',
  data() {
    return {
      game: '',
      hostUrl: process.env.NODE_ENV === 'production' ? 'https://mister-gamer.herokuapp.com' : 'http://localhost:3031'
    }
  },
  watch: {
    'this.$route.params.gameId': {
      async handler() {
        this.game = this.$route.params.gameId as string || ''
      },
      immediate: true
    }
  }
})
</script>