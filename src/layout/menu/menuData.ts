import type { MenuItem } from './types'
import { ref } from 'vue'
export const menuConfigList = ref<MenuItem[]>([
  // {
  //   name: '工具',
  //   // 操作函数情况下，path为传入的函数
  //   type: MenuItemType.fun,
  //   children: [
  //     {
  //       name: '刷新页面',
  //       path: '/',
  //       type: MenuItemType.fun,
  //     },
  //     {
  //       name: '开发工具',
  //       path: '/',
  //       type: MenuItemType.fun,
  //     },
  //   ],
  // },
  {
    name: '首页',
    path: '/',
  },
  {
    name: '关系图',
    path: '/wiki/flow-chart',
  },
  {
    name: '知识库',
    path: '/wiki/home',
  },
  // {
  //   name: '知识库',
  //   children: [
  //     {
  //       name: '知识库首页',
  //       path: '/wiki/home',
  //     },
  //   ],
  // },
])
export const activeIndex = ref('0')
