/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:24:47
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-07 22:48:05
 * @Description: 
 */
import login from './login';
import QAndA from './QAndA';
import UploadFile from './UploadFile';
import DelateFile from './DelateFile';

const api = {
    ...login,
    ...QAndA,
    ...UploadFile,
    ...DelateFile
}

export default api

