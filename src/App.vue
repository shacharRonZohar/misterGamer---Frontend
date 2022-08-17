<template>
  <div class="main-layout">
    <app-header />
    <Suspense>
      <router-view />
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import appHeader from './components/app-header.vue'
import { useGameStore } from '@/stores/game.store'
const store = useGameStore()
store.loadGames()
</script>