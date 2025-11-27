import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// Absolute minimal config - default ES module format
export default defineConfig({
  plugins: [vue()]
})
