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
import { Stencil } from '@antv/x6-plugin-stencil' // 面板

const flowChartRef = ref<HTMLDivElement>(null)
const stencilRef = ref<HTMLDivElement>(null)

let graph: Graph

onMounted(() => {
  initGraph()
})

function initGraph() {
  const div = flowChartRef.value as HTMLDivElement

  graph = new Graph({
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

  const commonAttrs = {
    body: {
      fill: '#fff',
      stroke: '#8f8f8f',
      strokeWidth: 1,
    },
  }
  const n1 = graph.createNode({
    shape: 'rect',
    x: 40,
    y: 40,
    width: 80,
    height: 40,
    label: 'rect',
    attrs: commonAttrs,
  })

  const n2 = graph.createNode({
    shape: 'circle',
    x: 180,
    y: 40,
    width: 40,
    height: 40,
    label: 'circle',
    attrs: commonAttrs,
  })

  const n3 = graph.createNode({
    shape: 'ellipse',
    x: 280,
    y: 40,
    width: 80,
    height: 40,

    label: 'ellipse',
    attrs: commonAttrs,
  })

  const n4 = graph.createNode({
    shape: 'path',
    x: 420,
    y: 40,
    width: 40,
    height: 40,
    // https://www.svgrepo.com/svg/13653/like
    path: 'M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z',
    attrs: commonAttrs,
    label: 'path',
  })

  const stencil = new Stencil({
    target: graph,
    title: '模块面板',
    search: true,
    placeholder: '搜索',
    groups: [],
  })
  stencil.load([n1, n2, n3, n4])
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
