/*
 * @Author: your name
 * @Date: 2022-03-25 21:25:34
 * @LastEditTime: 2022-03-26 20:19:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\store\TeamUrging.js
 */
const TeamUrging = {
    namespaced: true,
    state: {
        MissionData: [],
        CurrentMission: {
            id: 0,    // 唯一标识
            type: 'apply', // 任务类型
            state: 1, // 当前状态
            creater: 'wmq', // 创建者
            title: "test for vuex and page process", // 标题
            date: "2022-3-24",  // 创建日期/截止日期
            team: [1, 2, 3, 4, 5],  // 团队成员
            LinkDoc: [{ filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' },
            { filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' },
            { filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' },
            { filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' }
            ],
            // ...等等
        },
        Loading: false
    },
    mutations: {
        GETLISTDATA: (state, data) => {
            state.MissionData = data;
        },
        GETMISSONDATA: (state, data) => {
            // 这边从MissionData取值是为了复用MockData
            state.CurrentMission = state.MissionData.filter(element => {
                return element.id === data.id;
            })[0];
            // 实际使用直接用协议返回值即可
            // state.CurrentMission = data;
        }
    },
    actions: {
        getMissionList: ({ commit }, type) => {
            // 这里发协议请求列表数据
            // 这边看下琛哥标准怎么写, 应该是引用api我这里只是示例
            // axios.post('./xxxx/xx', params: {type}).success((res) => {
            //     commit('GETLISTDATA', res.data);
            // })
            // 以下是mockData 实际这里不需要这么多项，我为了复用MockData写成这样的
            commit('GETLISTDATA', [
                {
                    id: 0,
                    state: 1,
                    title: "xxxmeeting",
                    date: "2022-3-24",
                    finish: 2,
                    total: 4,
                    number: 12,
                    creater: 'wmq', // 创建者                
                    team: [1, 2, 3, 4, 5],  // 团队成员
                    Link: 'http://baidu.com', // 附件链接
                    content: 'a test for content Position',
                    LinkDoc: [{ filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' },
                    { filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' },
                    { filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' },
                    { filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' }
                    ],
                },
                {
                    id: 1,
                    state: 2,
                    title: "xxxmeeting",
                    date: "2022-3-24",
                    finish: 2,
                    total: 4,
                    number: 12,
                    creater: 'wmq', // 创建者                
                    team: [1, 2, 3, 4, 5],  // 团队成员
                    Link: 'http://baidu.com', // 附件链接
                    content: 'a test for content Position',
                    LinkDoc: [{ filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' },
                    { filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' },
                    { filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' },
                    ],
                },
                {
                    id: 2,
                    state: 0,
                    title: "xxxmeeting",
                    date: "2022-3-24",
                    number: 12,
                    finish: 2,
                    total: 4,
                    creater: 'wmq', // 创建者                
                    team: [1, 2, 3, 4, 5],  // 团队成员
                    Link: 'http://baidu.com', // 附件链接
                    content: 'a test for content Position',
                    LinkDoc: [{ filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' },
                    ],
                },
                {
                    id: 3,
                    state: 0,
                    title: "xxxmeeting",
                    date: "2022-3-24",
                    finish: 2,
                    total: 4,
                    number: 12,
                    creater: 'wmq', // 创建者                
                    team: [1, 2, 3, 4, 5],  // 团队成员
                    Link: 'http://baidu.com', // 附件链接
                    content: 'a test for content Position',
                    LinkDoc: [{ filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' },
                    { filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' }
                    ],
                },
                {
                    id: 4,
                    state: 1,
                    title: "xxxmeeting111111111111",
                    date: "2022-3-24",
                    number: 12,
                    finish: 2,
                    total: 4,
                    creater: 'wmq', // 创建者                
                    team: [1, 2, 3, 4, 5],  // 团队成员
                    Link: 'http://baidu.com', // 附件链接
                    content: 'a test for content Position',
                    LinkDoc: [{ filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' },
                    { filename: '会议附件.doc', filesize: '11kb', fileLink: 'http://xxxx.com' },
                    ],
                },
            ]);
        },
        getMissionData: ({ commit }, params) => {
            // 同上请求数据
            // axios.post('./xxxx/xx', params).success((res) => {
            //     commit('GETMISSONDATA', res.data);
            // })
            // 以下是mockData
            commit('GETMISSONDATA', {
                id: params.id,    // 唯一标识
                type: params.type, // 任务类型
                state: 1, // 当前状态
                date: "2022-3-24",  // 创建日期/截止日期
                title: "test for vuex and page process", // 标题
                creater: 'wmq', // 创建者                
                team: [1, 2, 3, 4, 5],  // 团队成员
                Link: 'http://baidu.com', // 附件链接
                // ...等等
            })
        }
    },
    getters: {
        MissionData: (state) => {
            return state.MissionData;
        },
        CurrentMission: (state) => {
            return state.CurrentMission;
        },
        Loading: (state) => {
            return state.Loading;
        }
    }
}

export default TeamUrging;

