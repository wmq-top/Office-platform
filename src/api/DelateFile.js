/*
 * @Author: Geeker
 * @Date: 2022-04-07 22:47:18
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-07 22:47:18
 * @Description: 
 */
import request from '../http/axios';

// 请求接口封装
const DelateFile = (params) => request.post('/delateFile',params);

export default {
    DelateFile
}
