/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:23:28
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-09 23:55:15
 * @Description:
 */
import { async } from '@kangc/v-md-editor/lib/codemirror-editor';
import api from '../api';

const state = {
    ProtocolData: [],
    QuestionList: [],
    DetialQA: []
};

const mutations = {
    GETQADATA: async (state, data) => {
        state.ProtocolData = data;
    },
    GETQUESLIST: async (state, data) => {
        state.QuestionList = data;
    },
    GETDETIALQA: async (state, data) => {
        state.DetialQA = data;
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
    getDetial({commit}, params) {
        api.getDetial(params).then((json) => {
            if (json.result) {
                commit('GETDETIALQA', json.data);
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
    },
    getDetialQA: (state) => {
        return state.DetialQA
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



