import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('../views/home-page.vue'),
    },
    {
      path: '/games',
      name: 'games-list',
      component: () => import('../views/games-list.vue'),
    },
    {
      path: '/games/:gameId',
      name: 'game-details',
      component: () => import('../views/game-details.vue')
    },
    {
      path: '/add',
      name: 'add-game',
      component: () => import('../views/add-game.vue')
    }
  ],
})

export default router
