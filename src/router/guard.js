/*
 * @Author: your name
 * @Date: 2022-03-15 22:47:39
 * @LastEditTime: 2022-03-18 22:31:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
 * @FilePath: \Vite-vue3\src\router\guard.js
 */
// 开发中···

import store from '@store'
const guard = (to, from, next) => {
    if (to.name === '') {
        next()
    } else if (to.name !== "login" && !store.getters.hasLogin) {
        next({ name: 'login' });
    } else {
        // 这边还需要一个管理员的专属配置，想通过动态路由实现，不加在守卫里了
        next();
    }
}

export default guard