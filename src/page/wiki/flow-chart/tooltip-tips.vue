<template>
  <el-tooltip placement="left" effect="light" trigger="hover">
    <template #content>
      <pre>
1、按住ctrl键，滚动鼠标滚轮，可以缩放画布
2、按住Alt键，可以拖动画布
3、按住鼠标左键，可以批量选中节点</pre
      >
    </template>
    <el-button class="tooltip-tips" :icon="QuestionFilled" link></el-button>
  </el-tooltip>
</template>
<script setup lang="ts">
import { QuestionFilled } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
@use '@/theme/vars/function.scss' as *;
.tooltip-tips {
  position: absolute;
  right: 0;
  z-index: 1;
  color: GetVar('info0');
  font-size: 24px;
  border-radius: 50%;
  padding: 0;
  width: 24px;
  height: 24px;
  &:hover {
    color: GetVar('main-color5');
    box-shadow: GetVar('shadow2');
  }
}
</style>
