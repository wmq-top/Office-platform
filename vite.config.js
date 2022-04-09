/*
 * @Author: your name
 * @Date: 2022-03-12 16:38:38
 * @LastEditTime: 2022-04-07 19:27:07
 * @LastEditors: Geeker
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\vite.config.js
 */
import { createSvg } from './src/icons/index'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
// vite structure devDependencies vue plugins / alias
export default defineConfig({
  plugins: [
    vue(),
    createSvg('./src/icons/svg/')
  ],
  resolve: {
    alias: {
      "@api": resolve(__dirname, 'src/api'),
      "@icons": resolve(__dirname,'src/icons'),
      "@view": resolve(__dirname, "src/view"),
      "@component": resolve(__dirname, "src/components"),
      "@network": resolve(__dirname, "src/network"),
      "@utils": resolve(__dirname, "src/utils"),
      "@store": resolve(__dirname, "src/store"),
      "@assets": resolve(__dirname, "src/assets"),
      "@style": resolve(__dirname, "src/style"),
      "@": resolve(__dirname, "./")
    }
  },
  server: {
    host: '0.0.0.0', //必须配置，否则无法通过ip启动
    port: 8000, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    proxy: { // 代理配置
      '/api': {
        target: 'http://localhost:7001',//后端服务地址
        changeOrigin: true,
      }
    },
  },
})
