<template>
  <div class="home">这是跳转过来的子路由</div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style scoped lang="scss">
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
.item-page {
  margin-bottom: 10px;
}
</style>
