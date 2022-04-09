/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:24:28
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-09 17:28:10
 * @Description: 
 */
import request from '../http/axios';

const getQandA = (params) => request.post('/getQandA',params);
const getQuesList = (params) => request.post('/getQuesList', params);
const addNewQues = (params) => request.post('/addNewQues', params);

export default {
    getQandA,
    getQuesList,
    addNewQues
}

