import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
// 一级路由
const oneRouter = import.meta.glob('@/page/*/index.vue')
// 嵌套路由情况处理
const childrenRouter = import.meta.glob('@/page/*/*/index.vue')
const routes: RouteRecordRaw[] = []
// 常规一级路由，无嵌套情况
for (const key in oneRouter) {
  const pathName = key.split('/')[3]
  routes.push({
    path: '/' + (pathName === 'home' ? '' : pathName),
    component: oneRouter[key],
  })
}
// 嵌套路由生成

// 嵌套路由的基础根配置生成
const childrenRouterLayout = () => {
  for (const key in childrenRouter) {
    const pathArr = key.split('/')
    const pathName = '/' + pathArr[3] + '/' + pathArr[4]
    if (pathArr[4] === 'layout') {
      return {
        path: pathName,
        component: childrenRouter[key],
        children: [] as RouteRecordRaw[],
        redirect: '/' + pathArr[3] + '/home', // 写死规则，嵌套路由默认跳转到home页面
      }
    }
  }
}
const childrenRouterLayoutConfig = childrenRouterLayout()
// 嵌套路由的子路由配置生成
for (const key in childrenRouter) {
  const pathArr = key.split('/')
  // layout文件为路由根目录,不需要再次处理
  if (pathArr[4] !== 'layout') {
    const pathName = '/' + pathArr[3] + '/' + pathArr[4]
    // layout文件为路由根目录
    // home文件是默认跳转到的嵌套路由根页面
    const routerConfig = {
      path: pathName,
      component: childrenRouter[key],
    }
    if (childrenRouterLayoutConfig) childrenRouterLayoutConfig.children.push(routerConfig)
  }
}
if (childrenRouterLayoutConfig) routes.push(childrenRouterLayoutConfig)

// console.log(routes)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
