<template>
  <el-sub-menu v-if="menuItem.children" :index="menuItem.id" popper-class="sub-menu">
    <template #title>
      {{ menuItem.name }}
    </template>
    <template v-for="item in menuItem.children" :key="item.id">
      <template v-if="item.children">
        <SubMenu :menu-item="item" @select="handleSelect" />
      </template>
      <el-menu-item v-else :index="item.id" @click="handleSelect(item)">{{ item.name }}</el-menu-item>
    </template>
  </el-sub-menu>
  <el-menu-item v-else :index="menuItem.id" @click="handleSelect(menuItem)">{{ menuItem.name }}</el-menu-item>
</template>
<script setup lang="ts">
import type { MenuItem } from './types'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { activeIndex } from './menuData'
defineOptions({
  name: 'SubMenu',
})
type Props = {
  menuItem: MenuItem
}
const props = withDefaults(defineProps<Props>(), {})

const emits = defineEmits(['select'])
const route = useRoute()
watch(
  () => route.path,
  (path: string) => {
    if (path === props.menuItem.path) {
      activeIndex.value = props.menuItem.id
    }
  },
  {
    immediate: true,
  },
)

function handleSelect(item: MenuItem) {
  emits('select', item)
}
</script>

<style lang="scss">
//.sub-menu {
//}
.el-menu--popup {
  min-width: 100px;
}
</style>
