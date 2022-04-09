/*
 * @Author: your name
 * @Date: 2022-03-15 22:48:48
 * @LastEditTime: 2022-04-07 21:45:34
 * @LastEditors: Geeker
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\router\staticRoute.js
 */
import DefaultPage from '@view/DefaultPage/DefaultPage.vue'

const routes = [
    {
        path: '/',
        name: '',
        component: DefaultPage
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@view/User/User.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@view/Login/Login.vue')
    },
    {
        path: '/experience',
        name: 'experience',
        component: () => import('@view/Experience/Experience.vue')
    },
    {
        path: '/Q\&A',
        component: () => import('@view/QandA/QandA.vue')
    },
    {
        path: '/Q\&A/:id',
        name: 'questiondetial',
        component: () => import('@view/QandA/QuesDetial/QuesDetial.vue')
    },
    {
        path: '/teamurging',
        component: () => import('@view/TeamUrging/TeamUrging.vue')
    },
    {
        path: '/forum',
        name: 'forum',
        component: () => import('@view/Forum/Forum.vue')
    },
    {
        path: '/meeting',
        name: 'meeting',
        component: () => import('@view/Meeting/Meeting.vue')
    },
    {
        path: '/onlinecoding',
        name: 'onlinecoding',
        component: () => import('@view/OnlineCoding/OnlineCoding.vue')
    },
    {
        path: '/template',
        name: 'template',
        component: () => import('../Tempate/Template.vue')
    },
    {
        path: '/laoding',
        name: 'loading',
        component: () => import('@component/Loading/Loading.vue')
    }
]

export default routes