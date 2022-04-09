<!--
 * @Author: Geeker
 * @Date: 2022-04-07 20:42:01
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-09 19:22:49
 * @Description: 
-->
# Vue 3 + Vite + Koa.js + MySql

## 描述
- Main: Vite + Vue2、Vue3 + vue-MD-Editor + AndD + koa.js + node.js 
- Extend: Self Components Design

## About
- Provide all technical and business solutions used in the project
- client framework
- web server framework
- SVGIcon
- static File Upload
- UTF8 file Pre analysis as Object

### Skins
- to make Sure support Skins change func please Create a new modular as Template
- Try to copy the Tempalate folder and put it in your Destination folder
- Remove The Tempalate folder before build
- DarkMode / default

### Language
- For basic String in every page, store as a translate doc
- SimpleChinese 
- English

# TODO

## Search
- node暴搜数据库的性能, 尝试以更优秀的结构和方式建表，以及整理数据结构
- 维护被频繁访问的信息为热点信息，针对热点信息，优化存储结构，将在后端架构及开发时实现

## loader
- 实现一种静态文件loader的能力, 将获取到的数据以生成文件形式写入并保存, 不使用插件
- 如果浏览器不具有这种能力，那可能会尝试借助electron实现

## 组件
- 保证组件的可复用性，保证组件作为独立的整体存在，降低组件之间的耦合性

## 路由守卫
- 带参数的路由,包括鉴权信息,用户信息等等

## 动态路由
- 我参考了一些现有的动态路由, 完整的路由信息由staticRoute 和 activeRoute 组成, 
- ActiveRoute由用户参数和能力来控制，我这里主要是想允许开发者以注入的形式将自定义的组件注入项目中
- 在不修改服务端源码的情况下，由独立的服务端内存空间存储标准结构的自定义组件，
- 并允许服务端Administrator只修改路由的情况下，使自定义组件以路由的形式访问，
- 类似iframe但不是iframe

## 内置代码编辑器
- 首选Monaco Editor 尝试实现

## 插件相关
- 提效的工具

## 体验相关
- 最大程度上优化操作体验，我认为这个是做前端最终极的目标，体验包括了，交互，性能，稳定性等很多方向

# 服务端架构
- koa.js

### last modify
- 2022-4-7 21:07