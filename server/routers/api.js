/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:29:06
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-09 17:28:56
 * @Description: 
 */
const router = require('koa-router')()
const login = require('../controllers/login')
const QandA = require('../controllers/QA')
const upload = require('../controllers/upload')
const unload = require('../controllers/unload');

const routers = router
    .post('/uploadFile', upload.uploadFile)
    .post('/delateFile', unload.unloadFile)
    .post('/login', login.login)
    .post('/getQandA', QandA.getQAndA)
    .post('/getQuesList', QandA.getQuestionList)
    .post('/addNewQues', QandA.addNewQues)
    .get('/', async (ctx) => {
        ctx.body = 'Hello World'
    })
module.exports = routers

