import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteElectronDev } from './plugins/vite.electron.dev'
import { viteElectronBuild } from './plugins/vite.electron.build'

const port = 3000
export default defineConfig({
  plugins: [vue(), vueJsx(), viteElectronDev(), viteElectronBuild()],
  server: {
    port,
    proxy: {}
  },
  base: './', //默认绝对路径改为相对路径 否则打包白屏
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
