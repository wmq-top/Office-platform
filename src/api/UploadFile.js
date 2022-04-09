/*
 * @Author: Geeker
 * @Date: 2022-04-07 19:23:42
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-07 19:23:43
 * @Description: 
 */
import request from '../http/axios';

// 请求接口封装
const uploadFile = (params) => request.post('/uploadFile',params);

export default {
    uploadFile
}
