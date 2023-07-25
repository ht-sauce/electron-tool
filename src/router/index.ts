import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const modules = import.meta.glob('@/page/**/index.vue')

const routes: RouteRecordRaw[] = []
for (const key in modules) {
  const pathName = key.split('/')[3]
  routes.push({
    path: '/' + (pathName === 'home' ? '' : pathName),
    component: modules[key],
  })
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
