/*
 * @Author: your name
 * @Date: 2022-03-15 18:59:22
 * @LastEditTime: 2022-03-28 21:51:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\utils\translate.js
 */
import axios from 'axios';
// let Chmap;
// let Enmap;
// axios.get('http://localhost:3000/TranslateString').then((res) => {
//     Chmap = res.data.Chinese;
//     Enmap = res.data.English;
//     console.log(res);
// })
let Chmap = {
    "com.SearchInApp": "在项目中全局搜索",
    "com.SearchInSys": "在系统中搜索",
    "com.FuncIntroduc": "功能介绍",
    "com.ExperienceSharing": "经验分享",
    "com.NewEmployeeQ&A": "新员工Q&A",
    "com.TeamSpecificAutomaticUrging": "团队专项自动催办",
    "com.TechnicalExchangeForum": "技术交流论坛",
    "com.TeamMeeting": "团队会议",
    "com.OnlineCoding": "在线编码",
    "com.UpcomingSupport": "即将支持, 敬请期待",
    "com.SearchInSys": "在系统中搜索",
    "com.SearchInApp": "在应用中搜索",
    "tip.ExperienceSharing": "学习优秀的技术经验，分享你的智慧",
    "tip.NewEmployeeQ&A": "新同学入职必备，教学直通车，快速融入工作",
    "tip.TeamSpecificAutomaticUrging": "同步获取每日计划，有计划的工作会让你事半功倍",
    "tip.TechnicalExchangeForum": "技术交流论坛我们创造改变工作方式的软件",
    "tip.TeamMeeting": "团队公共专项，优秀的团队是成功不可或缺的助力",
    "tip.OnlineCoding": "我们不做码农,我们创造改变世界的价值",
    "wds.browsetdCount": "今日浏览",
    "wds.browseydCount": "昨日浏览",
    "wds.approvetdCount": "今日赞同",
    "wds.approveydCount": "昨日赞同",
    "wds.write": "写文章",
    "wds.shared": "已分享",
    "wds.draft": "草稿",
    "wds.Collection": "收藏",
    "wds.CreateCenter": "创作中心",
    "wds.ViewDetails": "查看详情",
    "wds.All": "全部",
    "wds.CheckAll": "查看全部",
    "wds.ChooseFile": "选择文件",
    "msg.ExceptTxt": "暂不支持非纯文本文件预解析",
    "wds.writeShare": "写分享",
    "wds.All": "全部",
    "wds.Fixed": "已完成",
    "wds.Failed": "失败",
    "wds.Delay": "延期",
    "wds.History":"历史记录",
    "wds.Plan":"计划",
    "wds.Func":"功能",
    "wds.Apply":"答复"
}

let Enmap = {
    "com.SearchInApp": "Search In App",
    "com.SearchInSys": "Search In System",
    "com.FuncIntroduc": "Func Introduct",
    "com.ExperienceSharing": "Experience Sharing",
    "com.NewEmployeeQ&A": "New Employee Q&A",
    "com.TeamSpecificAutomaticUrging": "Team Specific Auto Urging",
    "com.TechnicalExchangeForum": "Technical Exchange Forum",
    "com.TeamMeeting": "Team Meeting",
    "com.OnlineCoding": "Online Coding",
    "com.UpcomingSupport": "Upcoming support", // please looking forward to // over length
    "com.SearchInSys": "Search in System",
    "com.SearchInApp": "Search in App",
    "tip.ExperienceSharing": "Learn excellent technical experience and share your wisdom",
    "tip.NewEmployeeQ&A": "New students are required for entry, teaching through train, and quickly integrate into work",
    "tip.TeamSpecificAutomaticUrging": "Get your daily plan synchronously. Working with a plan will get you twice the result with half the effort",
    "tip.TechnicalExchangeForum": "We create software that changes the way we work",
    "tip.TeamMeeting": "The team is a public project, and an excellent team is an indispensable help to success",
    "tip.OnlineCoding": "We don't do yard farming. We create value that changes the world",
    "wds.browsetdCount": "Browse today",
    "wds.browseydCount": "Browse yesterday",
    "wds.approvetdCount": "Agree today",
    "wds.approveydCount": "Yesterday agreed",
    "wds.write": "write",
    "wds.shared": "shared",
    "wds.draft": "draft",
    "wds.Collection": "collect",
    "wds.CreateCenter": "CreateCenter",
    "wds.ViewDetails": "View Detials",
    "wds.All": "All",
    "wds.CheckAll": "Check All",
    "wds.ChooseFile": "Choose File",
    "msg.ExceptTxt": "Non plain text file pre parsing is not supported at present",
    "wds.writeShare": "Write Share",
    "wds.All": "All",
    "wds.Fixed": "Finish",
    "wds.Failed": "Failed",
    "wds.Delay": "Delay",
    "wds.History":"History",
    "wds.Plan":"Plan",
    "wds.Func":"Function",
    "wds.Apply":"Apply"
}
function $t(key, Language) {
    if (Language !== "English") return Chmap[key];
    else return Enmap[key];
}

export default $t




