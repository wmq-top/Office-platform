/*
 * @Author: your name
 * @Date: 2022-03-12 16:48:22
 * @LastEditTime: 2022-03-23 19:24:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\router\index.js
 */
// here is the basic entrance route for the Project
import { createRouter, createWebHistory } from 'vue-router'
import routes from './staticRoute'
import guard from './guard'

const routerHistory = createWebHistory()

// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由

const router = createRouter({
  history: routerHistory,
  routes
})

// router.beforeEach(guard);
 
export default router