/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:38:12
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-02 12:30:57
 * @Description: 
 */
import axios from "axios";
import config from './axios.config'
import {setInterceptors} from './axios.interceptors.config'

const request = axios.create(config);

setInterceptors(request);
export default request;