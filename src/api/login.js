/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:24:03
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-01 19:24:03
 * @Description: 
 */
import request from '../http/axios';

// 请求接口封装
const login = (params) => request.post('/login',params);

export default {
    login
}

