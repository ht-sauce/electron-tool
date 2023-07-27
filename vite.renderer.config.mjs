import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCommon from './vite.common.js'
// https://vitejs.dev/config
export default defineConfig({
  envDir: '/env',
  server: {
    port: 9000,
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    ...viteCommon.resolve,
  },
})
