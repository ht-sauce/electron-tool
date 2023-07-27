import { defineConfig } from 'vite'
import viteCommon from './vite.common.js'

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    ...viteCommon.resolve,
  },
})
