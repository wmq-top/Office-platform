/*
 * @Author: Geeker
 * @Date: 2022-04-07 22:48:42
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-07 23:26:50
 * @Description: 
 */
/*
 * @Author: Geeker
 * @Date: 2022-04-07 19:24:36
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-07 19:40:55
 * @Description: 
 */
const { join } = require('path');
const fs = require('fs');

const unloadoController = {
    async unloadFile(ctx) {
        try {
            ctx.request.body.forEach(item => {
                let filePath = join(__dirname, '../../static/') + `/${item}`;
                fs.unlink(filePath, () => {
                    console.log('删除成功');
                })
            });
            ctx.response.body = {
                result: true
            };
        } catch (e) {
            ctx.response.body = {
                ...e
            };
        }
    }
}
module.exports = unloadoController

