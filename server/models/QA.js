/*
 * @Author: Geeker
 * @Date: 2022-04-01 19:30:19
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-09 23:45:18
 * @Description: 
 */
const dbUtils = require('../util/db')

const QAndA = {
    async getQAndA() {
        try {
            let data = await dbUtils.query('SELECT * from questionbrowsetimes');
            return { result: true, data };
        } catch (e) {
            console.warn(e);
            return { result: false };
        }
    },
    async getQuestionList() {
        try {
            let data = await dbUtils.query('SELECT Qid,title,summary,heat,time from questionList');
            return { result: true, data };
        } catch (e) {
            console.warn(e);
            return { result: false }
        }
    },
    async addNewQues(params) {
        try {
            await dbUtils.insertData('questionList', params);
            return { result: true };
        } catch (e) {
            console.log(e)
            return false
        }
    },
    async getDetailQA(params) {
        try {
            let QuesData = await dbUtils.query(`SELECT * from questionList where Qid=${params.Qid}`);
            // let AnsData = await dbUtils.query('')
            return { result: true, data: { QuesData } };
        } catch (e) {
            console.warn(e);
            return { result: false }
        }
    },
}

module.exports = QAndA

