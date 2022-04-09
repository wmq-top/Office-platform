/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:27:44
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-01 19:27:44
 * @Description: 
 */
function getToken (cookie) {
    return /(?<=(token=))([^;]*)/ig.exec(cookie)[0];
}

module.exports = {
    getToken
};

