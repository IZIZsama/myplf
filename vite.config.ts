import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pagesでサブパス配下でも壊れないように相対パスにする
  base: './',
})
