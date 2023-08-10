import type { Graph } from '@antv/x6'
import { shallowRef } from 'vue'

export const baseColor = '#613400'
// 创建的图表实例
export let graph = shallowRef<Graph>()
