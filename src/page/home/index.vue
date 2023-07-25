<template>
  <div class="home">
    <template v-for="item in routerList" :key="item.path">
      <router-link :to="item.path" class="item-page" :title="item.meta?.title">
        <el-button type="primary">
          {{ item.meta?.title ?? item.path }}
        </el-button>
      </router-link>
    </template>
    <el-button @click="insert(new Date().getTime())">测试插入数据</el-button>
    <el-button @click="getBackData">获取数据{{ test }}</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { get, insert } from '@/database/knowledgeBase'
import { onMounted, ref } from 'vue'
const router = useRouter()

const routerList = router.options.routes
const test = ref<any>()
onMounted(() => {
  getBackData()
})

async function getBackData() {
  const data = await get()
  console.log(data)
  test.value = data
}
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
