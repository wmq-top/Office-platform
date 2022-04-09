/*
 * @Author: Geeker
 * @Date: 2022-03-23 18:59:41
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-01 19:22:56
 * @Description: 
 */
const publicState = {
    namespaced: true,
    state: {
        AuthState: {
            isLogin: false,
            isAdministrators: false,
            isPayment: false
        },
        Language: "SimpleChinese",
        skinMode: "darkMode",  // default darkMode 目前只支持两种我还没想好怎么支持自定义换肤
        SlogenTitle: [
            'Sometimes you Just have to be Confident at that Moment,\r and After that you are Confident all the Time',
            "it's always hard to start, but once you start it will get easy",
            "Don't sell anxiety. I despise it",
            "Life is Fucking Moive",
            "c'est la via",
            "randomness in life is the romantic of life"
        ],
        username: '', // 用户名
        userInfo: {}, // 用户所有的信息
    },
    mutations: {
        CHANGESKIN: (state) => {
            state.skinMode = state.skinMode !== 'default' ? 'default' : 'darkMode'
        },
        CHANGELANG: (state) => {
            state.Language = state.Language  === 'SimpleChinese' ? 'English': 'SimpleChinese'
        },
        setUsername: (state, data) => {
            state.username = data;
        },
        setIsLogin: (state, data) => {
            state.AuthState.isLogin = data;
        },
        setUserInfo: (state, data) => {
            state.userInfo = data;
        }
    },
    actions: {
        changeSkin: ({commit}) => {
            commit('CHANGESKIN');
        },
        changeLang: ({commit}) => {
            commit('CHANGELANG');
        },
        setUsername: ({commit}, data) => {
            commit('setUsername', data);
        },
        setIsLogin: ({commit}, data) => {
            commit('setIsLogin', data);
        },
        setUserInfo: ({commit}, data) => {
            commit('setUserInfo', data);
        }
    },
    getters: {
        hasLogin: (state) => {
            return state.AuthState.isLogin;
        },
        Language: (state) => {
            return state.Language;
        },
        skinMode: (state) => {
            return state.skinMode;
        },
        SlogenTitle: (state) => {
            return state.SlogenTitle;
        },
        username: (state) => {
            return state.username;
        }
    }
}

export default publicState;

