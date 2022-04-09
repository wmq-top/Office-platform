/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:23:28
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-09 18:16:43
 * @Description:
 */
import api from '../api';

const state = {
    ProtocolData: [],
    QuestionList: []
};

const mutations = {
    GETQADATA: async (state, data) => {
        state.ProtocolData = data;
    },
    GETQUESLIST: async (state, data) => {
        state.QuestionList = data;
    }
};

const actions = {
    getQAData({ commit }) {
        api.getQandA().then((json) => {
            if (json.result) {
                commit('GETQADATA', json.data);
            }
        });
    },
    getQuesList({ commit }) {
        api.getQuesList().then((json) => {
            if (json.result) {
                json.data.sort((a, b) => {
                    return b.heat - a.heat;
                });
                commit('GETQUESLIST', json.data);
            }
        })
    },
    addNewQues({ commit }, params) {
        return api.addNewQues(params)
    },
    delateStaticFiles({ commit }, FileArr) {
        return api.DelateFile(FileArr)
    }
};

const getters = {
    getProtocolData: (state) => {
        return state.ProtocolData;
    },
    getQuestionList: (state) => {
        return state.QuestionList;
    }
}
const QandA = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
export default QandA



