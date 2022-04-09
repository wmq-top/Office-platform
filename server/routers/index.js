/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:28:42
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-01 19:28:43
 * @Description: 
 */
const router = require('koa-router')()
const api = require('./api')

router.use('/api', api.routes(), api.allowedMethods())

module.exports = router

