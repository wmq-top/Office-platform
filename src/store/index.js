/*
 * @Author: Geeker
 * @Date: 2022-03-12 16:50:26
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-01 19:36:14
 * @Description: 
 */
import { createStore } from "vuex";
import login from './login';
import publicState from './publicState';
import TeamUrging from './TeamUrging'
import QandA from './QAndA'
 
export default createStore({
    modules: {
        login,
        QandA,
        TeamUrging,
        publicState
    }
});

