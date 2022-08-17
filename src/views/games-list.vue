<template>
  <ul>
    <game-preview v-for="game in games" :key="game._id" :game="game" />
  </ul>
</template>


<script setup lang="ts">
import { computed, ref } from 'vue'
import { useGameStore } from '@/stores/game.store'
import gamePreview from '@/components/game-preview.vue'
const store = useGameStore()
const games = computed(() => store.games)
</script>