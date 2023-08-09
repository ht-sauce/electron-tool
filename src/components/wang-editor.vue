<template>
  <div>
    <Toolbar class="toolbar" :editor="editorRef" :defaultConfig="toolbarConfig" mode="default" />
    <Editor
      style="height: 500px"
      class="editor"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      mode="default"
      @onCreated="handleCreated"
      @onChange="onChange"
    />
  </div>
</template>
<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

type Props = {
  modelValue?: string
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
})
const emits = defineEmits(['update:modelValue', 'change'])
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('')

watch(
  () => props.modelValue,
  (val, oldValue) => {
    if (val === oldValue) return
    valueHtml.value = val
  },
  { immediate: true },
)

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
function onChange(val: any) {
  // console.log(val)
  emits('update:modelValue', valueHtml.value)
  emits('change', val)
}
</script>

<style scoped lang="scss">
@use '@/theme/vars/function.scss' as *;
.toolbar {
  border-bottom: 1px solid GetVar('main-color5');
}
.editor {
  overflow-y: hidden;
  border: 1px solid GetVar('main-color5');
}
</style>
