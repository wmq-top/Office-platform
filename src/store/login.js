/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:23:08
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-01 19:41:48
 * @Description: 
 */
import api from '../api';
import { encode } from 'js-base64';
// import {setCookie} from '@utils';

const state = {
    username: '',
    password: '',
};

const getters = {
    username:state=>{
        return state.username
    },
    password:state=>{
        return state.password
    }
};

const mutations = {
    setAcountInfo: async (state, data) =>{
        if(data.type === 'password') {
            data.value = encode(data.value)
        }
        state[data.type] = data.value
    }
};

const actions = {
    updateAcountInfo({commit}, data){
        commit('setAcountInfo', data);
    },
    login({commit}) {
        return new Promise((resolve, reject) => {
            api.login({
                username: state.username,
                password: state.password
            }).then((json) => {
                if(json.result) {
                    resolve(json);
                    // setCookie('token', json.token, '');
                    commit('publicState/setUsername', json.username, {root: true});
                    commit('publicState/setIsLogin', true, {root: true});
                    commit('publicState/setUserInfo', {
                        userid: json.userid,
                        username: json.username,
                        email: json.email
                    }, {
                        root: true
                    });
                } else {
                    reject(json)
                }
            }).catch(err => {
                reject(err)
            });
        })
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}



