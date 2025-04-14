import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  base: '/vue-projects/',
  plugins: [vue(), vuetify({ autoImport: true })],
})
