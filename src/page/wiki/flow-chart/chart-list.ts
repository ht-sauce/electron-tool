import { graph } from './useData'

export function getShape() {
  const commonAttrs = {
    body: {
      fill: '#fff',
      stroke: '#8f8f8f',
      strokeWidth: 1,
    },
  }
  const rectangle = graph.value.createNode({
    shape: 'rect', // 矩形。
    x: 200,
    y: 200,
    width: 80,
    height: 40,
    label: '矩形',
    attrs: commonAttrs,
  })
  return [rectangle]
}
