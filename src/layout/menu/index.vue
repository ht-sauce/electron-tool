<template>
  <el-menu :default-active="activeIndex" class="layout-menu" mode="horizontal">
    <template v-for="item in menuList" :key="item.id">
      <SubMenu :menu-item="item" @select="handleSelect" />
    </template>
  </el-menu>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import SubMenu from './SubMenu.vue'
import type { MenuItem } from './types'
import { useRouter } from 'vue-router'
import { MenuItemType } from './types'

const router = useRouter()
// 为菜单添加id
const recursionId = (menuList: MenuItem[], indexs?: string) => {
  for (let i = 0; i < menuList.length; i++) {
    const itemMenu = menuList[i]
    const id = i.toString()
    itemMenu.id = (indexs ? indexs + '-' : '') + id
    if (itemMenu.children) {
      recursionId(itemMenu.children, itemMenu.id)
    }
  }
}
const menuList = computed(() => {
  const inMenu = [
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
      name: '知识库',
      children: [
        {
          name: '知识库首页',
          path: '/wiki/home',
        },
      ],
    },
  ]
  recursionId(inMenu)
  // console.log(inMenu)
  return inMenu
})
// console.log(router.options.routes)

const activeIndex = ref('1')
const handleSelect = (item: MenuItem) => {
  if (item.type === MenuItemType.fun) return
  if (item.path) {
    // window.open(item.path, '_blank')
    router.push(item.path)
  }
}
</script>
<style scoped lang="scss">
@use '@/theme/vars/function.scss' as *;
.layout-menu {
  --el-menu-item-height: 22px;
  border-top: 1px GetVar('main-color5') solid;
  border-bottom: 1px GetVar('main-color5') solid;
}
</style>
