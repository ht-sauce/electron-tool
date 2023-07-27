<template>
  <el-menu :default-active="activeIndex" class="layout-menu" mode="horizontal">
    <template v-for="item in menuList" :key="item.id">
      <SubMenu :menu-item="item" @select="handleSelect" />
    </template>
  </el-menu>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import SubMenu from './SubMenu.vue'
import type { MenuItem } from './types'
import { useRoute, useRouter } from 'vue-router'
import { MenuItemType } from './types'
import { recursionId } from './tool'
import { activeIndex, menuConfigList } from './menuData'

const router = useRouter()

const menuList = computed(() => {
  recursionId(menuConfigList.value)
  return menuConfigList.value
})

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
