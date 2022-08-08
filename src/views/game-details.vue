<template>

  <div class="game-details">
    <header class="game-header">
      <h1>{{ game }}</h1>
    </header>
    <!-- <p>{{ description }}</p> -->
    <main class="game-container">
      <iframe :src="`http://localhost:3031/game/${game}`" frameborder="0"></iframe>
    </main>
    <!-- <iframe :src="`localhost:${game}`" frameborder="0"></iframe> -->
  </div>
</template>

<script  lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'game-details',
  data() {
    return {
      game: ''
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