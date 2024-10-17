import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    //路由初始指向
    path: '/',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
  },
  {
    path: '/games',
    name: 'games',
    component: () => import('@/views/games/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router