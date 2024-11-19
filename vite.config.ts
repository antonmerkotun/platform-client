import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
  server: {
    port: 5000,
  },
  plugins: [
    vue(),
    pages({
      extensions: ['vue'],
      dirs: 'src/pages',
    }),
    layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/scss/main.scss";',
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
