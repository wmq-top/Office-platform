/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:30:47
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-01 19:30:47
 * @Description: 
 */
const Login = require('../models/login')
const loginController = {
    async login(ctx) {
        const {body} = ctx.request;
        try {
            let res = await Login.login(body.username, body.password);
            ctx.response.body = {
                ...res
            };
        } catch(e) {
            ctx.response.body = {
                ...e
            };
        }
    }
}

module.exports = loginController

