/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:27:26
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-01 19:27:26
 * @Description: 
 */
const mysql = require('mysql')
const db_config = require('./db.config')

const pool = mysql.createPool(db_config)

class DataBase {
    constructor () {
        this.conn = null;
    }
    /**
     * @description: 数据库建立连接
     */    
    connect () {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if(err) {
                    reject(err);
                    console.log('连接数据库失败');
                } else {
                    resolve();
                    this.conn = connection;
                    console.log('数据库已连接');
                }
            })
        })
    }
    /**
     * @description: 封装的sql语句执行函数
     * @param {*} sql语句
     * @return {*} values sql参数（选传）
     */
    query(sql, values) {
        return new Promise((resolve, reject) => {
            this.conn.query(sql, values, (err, rows) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    }
    /**
     * @description: 插入单条数据函数
     * @param {string} table 表名
     * @return {object} data 要插入的数据，以对象的形式传入，键值要一一对应
     */
    insertData(table, data) {
        if(Object.prototype.toString.call(data) === '[object Object]' && typeof table === 'string') {
            let sql = 'INSERT INTO ' + table;
            // 插入数据的键
            const keys = Object.keys(data);
            // 插入数据的值，包裹''，用来拼接插入语句
            const values = Object.values(data).map(item => {
                return `'${item}'`
            });
            sql += `(${keys.join(',')})  VALUES (${values.join(',')})`

            return new Promise((resolve, reject) => {
                this.conn.query(sql, (err, rows) => {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                })
            })
        }
    }
}

const db = new DataBase();
module.exports = exports = db;

