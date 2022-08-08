<template>
  <ul>
    <li v-for="game in games">
      <router-link :to="`game/${game}`">
        {{ game }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const games = ref(['123', '321'])

</script>