/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:27:56
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-01 19:27:56
 * @Description: 
 */
const jwt = require('jwt-simple');
const secret = 'planckSecret';

function encode (data) {
    return jwt.encode(data, secret);
}

function decode (data) {
    return jwt.decode(data, secret);
}

module.exports = {
    encode,
    decode
};

