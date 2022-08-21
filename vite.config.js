import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/memento-mori/',
  plugins: [vue()],
  build: {
    outDir: 'docs',
  },
})
