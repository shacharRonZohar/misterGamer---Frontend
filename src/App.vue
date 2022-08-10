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


</script>