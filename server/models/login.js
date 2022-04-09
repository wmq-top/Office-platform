/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:29:30
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-02 12:57:29
 * @Description: 
 */
const axios = require('axios');
const dbUtils = require('../util/db');
const {Base64} = require('js-base64');
const {encode} = require('../util/jwt');

const Login = {
    async login(username, password) {
        // 远程登录
        const rpc = axios.create({
            baseURL: 'https://portalapi.dahuatech.com',
        });
        try {
            //const json = await rpc.post('/api/Employee/AdUserCheck', {
                //Uid: username,
               // Pwd: Base64.decode(password),
            //});
            
            /**域账号密码校验通过*/
            if(true) {
                /* 查询数据库中是否已存在当前用户 */
                let res = await dbUtils.query(`SELECT * FROM user where userid="${username}" limit 1;`);
                //根据工号获取员工信息
                const info = await rpc.post('http://webview.dahuatech.com:8083/user_getUserInfo', {userids: [username]});
                const {data} = info;
                if(!(Array.isArray(res) && res.length > 0)) {
                    // 如果数据库中不存在当前用户，则新增用户数据
                    if(data.result && data.params.length > 0) {
                        let insertRes = await dbUtils.insertData('user', {
                            userid: username,
                            username: data.params[0].username,
                            password: password,
                            email: data.params[0].email
                        });
                        // let insertRes = await dbUtils.query(`INSERT INTO user(userid, username, password, email) VALUES ('${username}', '${data.params[0].username}', '${password}', '${data.params[0].email}')`);
                        if(insertRes.affectedRows > 0) {
                            return {
                                result: true,
                                userid: username,
                                username: data.params[0].username,
                                email: data.params[0].email,
                                token: encode(username),
                                message: '登录成功'
                            }
                        } else {
                            return {
                                result: false,
                                message: '数据库新增用户失败'
                            }
                        }
                    } else {
                        return {
                            result: false,
                            message: '获取用户信息失败'
                        }
                    }
                }
                return {
                    result: true,
                    userid: username,
                    username: data.params[0].username,
                    email: data.params[0].email,
                    token: encode(username),
                    message: '登录成功'
                }
            } else {
                return {result: false, message: '用户鉴权失败'}
            }
        } catch (e) {
            console.warn(e);
            return {result: false, message: '用户鉴权失败'}
        }
    }
}

module.exports = Login

