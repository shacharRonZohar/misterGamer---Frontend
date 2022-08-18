<template>
  <input type="file" webkitdirectory directory multiple name="game" id="game" @change="handleDir">
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useGameStore } from '@/stores/game.store'
import { httpService } from '@/services/http.service'
import axios from 'axios'
const handleDir = async (e: any) => {
  const { files } = e.target
  const data = []
  await new Promise((resolve, reject) => {
    Array.from(files).forEach(async (file: any) => {
      const fileReader = new FileReader()
      fileReader.readAsText(file)
      // fileReader.readAsDataURL(file)
      fileReader.onload = async (e: any) => {
        data.push({
          name: file.name,
          data: e.target.result,
          path: file.webkitRelativePath
        })
        if (data.length === Array.from(files).length) {
          resolve('done')
        }
      }
    })
  })
  const dataToSend = {
    "title": "test",
    "thumbnailURL": "placeholder",
    "description": "Lorem ipsum",
    "categories": ["board", "thinking", "vue"],
    data
  }
  httpService.post('game', dataToSend)
}
</script>
