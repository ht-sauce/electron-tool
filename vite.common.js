import { fileURLToPath, URL } from 'node:url'

export default {
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./services', import.meta.url)),
    },
  },
}
