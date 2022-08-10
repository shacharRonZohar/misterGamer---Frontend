<template>
  <div>
    I'm a home page
    <!-- {{data}} -->
  </div>
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
const data = await httpService.get('crud', req)
console.log(data)
</script>