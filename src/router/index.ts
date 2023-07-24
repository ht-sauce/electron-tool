import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/page/home/home.vue'),
      meta: {
        title: '首页',
      },
    },
  ],
})

export default router
