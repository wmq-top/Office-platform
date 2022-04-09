/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:31:04
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-09 17:54:49
 * @Description: 
 */
const QandA = require('../models/QA')
// const {getToken} = require('../util/getToken');
const { decode, encode } = require('../util/jwt');

const QAController = {
    async getQAndA(ctx) {
        // let token = getToken(ctx.request.headers.cookie);
        let userId = 280571
        try {
            let res = await QandA.getQAndA({
                userId
            });
            ctx.response.body = {
                ...res
            };
        } catch (e) {
            ctx.response.body = {
                ...e
            };
        }
    },
    async getQuestionList(ctx) {
        let params = ctx.request.body;
        try {
            let res = await QandA.getQuestionList({
                params
            });
            ctx.response.body = {
                ...res
            }
        } catch (e) {
            ctx.response.body = {
                ...e
            }
        }
    },
    async addNewQues(ctx) {
        let params = ctx.request.body;
        try {
            let res = await QandA.addNewQues({
                ...params,
                heat: 0,
            })
            ctx.response.body = {
                ...res
            }
        } catch (e) {
            ctx.response.body = {
                ...e
            }
        }
    }
}

module.exports = QAController

