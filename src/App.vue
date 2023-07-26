<template>
  <el-config-provider size="small">
    <LayoutMenu />
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import LayoutMenu from './layout/menu/index.vue'
</script>
<style scoped lang="scss"></style>
