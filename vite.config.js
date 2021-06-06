import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vitePluginImport from 'vite-plugin-babel-import';
import path from 'path'
import { svgBuilder } from './src/plugins/svgBuilder'

const baseUrl = {
  development: './',
  beta: './',
  release: './'
}

// https://vitejs.dev/config/
export default ({ mode }) =>  defineConfig({
  plugins: [
    vue(),
    // vitePluginImport([
    //   {
    //     libraryName: 'element-plus',
    //     libraryDirectory: 'es',
    //     style(name) {
    //       return `element-plus/lib/theme-chalk/${name}.css`;
    //     },
    //   }
    // ])
  //  svgBuilder('./src/icons/svg/')
  ],
  base: baseUrl[mode],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: '8086'
  }
})
