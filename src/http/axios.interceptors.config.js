/*
 * @Author: Geeker
 * @Date: 2022-04-02 12:33:20
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-02 12:35:09
 * @Description: 
 */
export const setInterceptors = (axiosInstance) => {
    // 请求拦截
    axiosInstance.interceptors.request.use(request => {
        return request;
    }, error => Promise.reject(error));
 
    // 响应拦截
    axiosInstance.interceptors.response.use(response => {
        // 仅返回数据data，状态等未返回
        return response.data;
    }, error => {
        return Promise.reject(error.response);
    })
};

