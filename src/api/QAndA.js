/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:24:28
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-09 23:47:25
 * @Description: 
 */
import request from '../http/axios';

const getQandA = (params) => request.post('/getQandA',params);
const getQuesList = (params) => request.post('/getQuesList', params);
const addNewQues = (params) => request.post('/addNewQues', params);
const getDetial = (params) => request.post('/getDetail', params);

export default {
    getQandA,
    getQuesList,
    addNewQues,
    getDetial
}

