<template>
  <pre>
  {{ newGame }}
</pre>
  <form @submit.prevent="saveGame">
    <input type="file" webkitdirectory directory multiple name="game" id="game" @change="handleDir">
    <input placeholder="Title" type="text" v-model="newGame.title">
    <input placeholder="Description" type="text" v-model="newGame.description">
    <input placeholder="Thumbnail URL" type="url" v-model="newGame.thumbnailURL">
    <button>Save</button>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useGameStore } from '@/stores/game.store'
import { gamesService } from '@/services/games.service'
import { httpService } from '@/services/http.service'
import type { ProccessedFile } from '@/models/game.model'
import axios from 'axios'
const store = useGameStore()
const newGame = ref(gamesService.getNewGame())

const saveGame = async () => {
  const game = await httpService.post('game', newGame.value)
  console.log(game)
}
// Type hack  because ts dosen't recognize that event.target.files exists
// TODO: Find a better way to type this parameter
const handleDir = async ({ target }: Event) => {
  const { files } = target as HTMLInputElement
  // TODO: Find out why ts is angry without this type hack
  newGame.value.files = await Promise.all(Array.from(files as Iterable<File>).map((file) => getFileData(file)))
}

const getFileData = (file: File): Promise<ProccessedFile> => {
  return new Promise((resolve, reject) => {
    try {
      const fileReader = new FileReader()
      fileReader.readAsText(file)
      // TODO: Find the correct event type
      fileReader.onload = ({ target: { result } }: any) => resolve({
        name: file.name,
        data: result,
        path: file.webkitRelativePath
      })

    } catch (err) {
      console.log('Couldnt get file data:', file, ' With error:', err)
      reject(err)
    }
  })
}
</script>
