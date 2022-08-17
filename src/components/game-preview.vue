<template>
  <li class="game-preview-container">
    <!-- {{ game._id }} -->
    <router-link :to="`/games/${game._id}`">
      <h2>{{ game.title }}</h2>
      <div class="img-container">
        <img :src="game.thumbnailURL" :alt="game.thumbnailURL">
      </div>
      <span>Added on: {{ game.createdAt }}</span>
      <span>Updated on: {{ game.updatedAt }}</span>
      <ul class="categories-container">
        <li v-for="category in game.categories">
          {{ category }}
        </li>
      </ul>
    </router-link>
  </li>
</template>

<script setup lang="ts">
import type { Game } from '@/models/game.model'
// TODO: Figure out why this dosen't work
// const { game: {
//   _id,
//   name,
//   description,
//   thumbnailURL,
//   createdAt,
//   updatedAt,
// } } = defineProps<{ game: Game }>()
const { game } = defineProps<{ game: Game }>()
</script>