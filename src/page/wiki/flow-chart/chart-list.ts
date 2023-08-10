import { baseColor, graph } from './useData'
import type { Graph } from '@antv/x6'

function getPort(position = '') {
  return {
    position,
    attrs: {
      circle: {
        r: 4,
        magnet: true,
        stroke: baseColor,
        strokeWidth: 1,
        fill: '#fff',
        style: {
          visibility: 'hidden',
        },
      },
    },
  }
}

const ports = {
  groups: {
    top: getPort('top'),
    right: getPort('right'),
    bottom: getPort('bottom'),
    left: getPort('left'),
  },
  items: [
    {
      group: 'top',
    },
    {
      group: 'right',
    },
    {
      group: 'bottom',
    },
    {
      group: 'left',
    },
  ],
}

export function getShape() {
  const graphVal = graph.value as Graph
  const commonAttrs = {
    body: {
      fill: '#fff',
      stroke: baseColor,
      strokeWidth: 1,
    },
  }
  const rectangle = graphVal.createNode({
    shape: 'rect', // 矩形。
    width: 100,
    height: 40,
    label: '矩形',
    attrs: commonAttrs,
    ports,
  })
  return [rectangle]
}
