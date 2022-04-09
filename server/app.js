/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:25:17
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-09 15:47:28
 * @Description: 
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaBody = require('koa-body');
const routers = require('./routers/index');
const cors = require('koa-cors');
const koaStatic = require('koa-static');
const mount = require('koa-mount');
const db = require('./util/db');
const { join } = require('path');

const app = new Koa();
//连接数据库
db.connect();
// response
app.use(
  cors({
    methods: ['GET', 'POST', 'DELETE', 'PATCH']
  })
);
const root = join(__dirname, '../dist');
app.use(mount('/dist', require('koa-static')(root)));
app.use(koaStatic(root));
app.use(koaBody({
  multipart: true, // 支持文件上传
  formidable: {
    maxFieldsSize: 2 * 1024 * 1024, // 最大文件为2兆
    multipart: true // 是否支持 multipart-formdate 的表单
  }
}));
app.use(bodyParser());

//初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());
app.listen(7001);

