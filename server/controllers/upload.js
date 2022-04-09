/*
 * @Author: Geeker
 * @Date: 2022-04-07 19:24:36
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-07 19:40:55
 * @Description: 
 */
const { join } = require('path');
const fs = require('fs');

const uploadoController = {
    async uploadFile(ctx) {
        try {
            // 上传单个文件
            const file = ctx.request.files.file; // 获取上传文件
            // 创建可读流
            const reader = fs.createReadStream(file.path);
            // 获取上传文件扩展名
            let filePath = join(__dirname, '../../static/') + `/${file.name}`;
            // 创建可写流
            const upStream = fs.createWriteStream(filePath);
            // 可读流通过管道写入可写流
            reader.pipe(upStream);
            ctx.response.body = {
                url: `/static/${file.name}`,
                result: true
            };
        } catch (e) {
            console.log(e);
            ctx.response.body = {
                ...e
            };
        }
    }
}
module.exports = uploadoController

