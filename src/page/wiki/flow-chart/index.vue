<template>
  <div class="chart">
    <TooltipTips />
    <div class="stencil-fef" ref="stencilRef"></div>
    <div class="flow-chart" ref="flowChartRef">流程图表</div>
  </div>
</template>

<script lang="ts" setup>
import TooltipTips from './tooltip-tips.vue'
import { onMounted, ref } from 'vue'
import { Graph } from '@antv/x6'
import { Snapline } from '@antv/x6-plugin-snapline' // 对齐线
import { Keyboard } from '@antv/x6-plugin-keyboard' // 快捷键
import { Selection } from '@antv/x6-plugin-selection' // 框选
import { Stencil } from '@antv/x6-plugin-stencil'
import { graph as graphVal } from './useData'
import { getShape } from './chart-list' // 面板

const flowChartRef = ref<HTMLDivElement>(null)
const stencilRef = ref<HTMLDivElement>(null)

onMounted(() => {
  initGraph()
})

function initGraph() {
  const div = flowChartRef.value as HTMLDivElement

  // 基本配置
  const graph = new Graph({
    container: div,
    autoResize: true,
    // 缩放与平移
    panning: {
      enabled: true,
      modifiers: 'alt',
    },
    // 缩放
    mousewheel: {
      enabled: true,
      modifiers: ['ctrl', 'meta'],
    },
    grid: {
      visible: true,
      type: 'doubleMesh',
      args: [
        {
          color: '#eee', // 主网格线颜色
          thickness: 1, // 主网格线宽度
        },
        {
          color: '#ddd', // 次网格线颜色
          thickness: 1, // 次网格线宽度
          factor: 4, // 主次网格线间隔
        },
      ],
    },
  })
  graphVal.value = graph
  // 加载插件
  graph.use(new Snapline({ enabled: true }))
  graph.use(new Keyboard({ enabled: true }))
  graph.use(
    new Selection({ enabled: true, multiple: true, rubberband: true, movable: true, showNodeSelectionBox: true }),
  )

  // 绑定删除快捷键
  graph.bindKey(['delete', 'backspace'], () => {
    const cells = graph.getSelectedCells()
    if (cells.length) {
      graph.removeCells(cells)
    }
  })

  // 左侧面板
  const stencil = new Stencil({
    target: graph,
    title: '模块面板',
    search: true,
    placeholder: '搜索',
    groups: [],
  })
  stencil.load(getShape())
  stencilRef.value.appendChild(stencil.container)
}
</script>
<style lang="scss">
@use '@/theme/vars/function.scss' as *;
.x6-widget-stencil-title {
  color: GetVar('white0');
  background: GetVar('main-color9');
}
.x6-widget-stencil::after {
  display: none;
}
</style>
<style scoped lang="scss">
@use '@/theme/vars/function.scss' as *;
.chart {
  display: flex;
  width: 100%;
  height: 100%;
}
.flow-chart {
  width: 100%;
  height: 100%;
}
.stencil-fef {
  position: relative;
  width: 200px;
  height: 100%;
  border: 1px GetVar('main-color5') solid;
}
</style>
