<template>
  <main class="home-page-container">
    <section class="hero-container">
      <!-- <div class="hero-img"></div> -->
      <router-link to="/games">
        Play our games!
      </router-link>
    </section>
  </main>
</template>

<script setup lang="ts">
import { httpService } from '../services/http.service'
const req = {
  collectionName: 'chess',
  aggregationPipeline: [
    {
      $addFields: {
        userObjId: { $toObjectId: '$userId' },
      },
    },
    {
      $lookup:
      {
        localField: 'userObjId',
        from: 'user',
        foreignField: '_id',
        as: 'user'
      }
    },
    {
      $unwind: '$user'
    },
    {
      $project: {
        _id: 1,
        user: 1,
        board: 1
      }
    }
  ]
}
// const data = await httpService.get('crud', req)
// console.log(data)
</script>