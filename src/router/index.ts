import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/game/:gameId',
      name: 'game-details',
      component: () => import('../views/game-details.vue')
    }
  ],
})

export default router
