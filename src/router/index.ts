import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // electron只支持hash模式
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/page/home/index.vue')
    }
  ]
})

export default router
