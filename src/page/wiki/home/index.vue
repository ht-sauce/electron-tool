<template>
  <div class="wiki-home">
    <div class="wiki-list">
      <template v-for="item in wikiList" :key="item.id">
        <div class="wiki-item">{{ item.name }}</div>
      </template>
      <div class="wiki-item add-wiki" @click="addWiki">
        <el-icon class="plus">
          <Plus />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'
import { ref } from 'vue'
import router from '@/router'

const wikiList = ref([])

function addWiki() {
  // router.push('/wiki/article-writing')
  router.push('/wiki/flow-chart')
}
</script>
<style scoped lang="scss">
@use '@/theme/vars/function.scss' as *;
.wiki-home {
  padding: GetVar('padding0');
}
.wiki-list {
  display: flex;
  flex-flow: wrap;
}
.wiki-item {
  background: GetVar('white0');
  width: 150px;
  height: 200px;
  margin-right: GetVar('margin0');
  border: 1px GetVar('border') solid;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 1px GetVar('main-color5') solid;
    box-shadow: GetVar('shadow2');
  }
}
.add-wiki {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .plus {
    font-size: 32px;
    color: GetVar('main-color5');
  }
}
</style>
