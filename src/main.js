/*
 * @Author: your name
 * @Date: 2022-03-12 16:38:38
 * @LastEditTime: 2022-04-07 19:21:54
 * @LastEditors: Geeker
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import axios from 'axios'
import svgIcon from './icons/index.vue'

import $t from '@utils/translate.js';
import 'ant-design-vue/dist/antd.css';

import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor';
import '@kangc/v-md-editor/lib/style/codemirror-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

// codemirror 编辑器的相关资源
import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/vue/vue';
// edit
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';

// style
import 'codemirror/lib/codemirror.css';

VMdEditor.Codemirror = Codemirror;
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App)

app.use(router);
app.use(store);
app.use(Antd);
app.use(VMdEditor);
// setup中使用··我还没想到把这个放到哪里去·ooo
window.$t = $t;

// 2.0模式写到原型链上去在所有组件中都可以通过this.$t使用
app.config.globalProperties.$t = $t
app.config.globalProperties.axios = axios
app.provide('axios', axios)
app.provide('$t', $t);
app.component('svg-icon', svgIcon)
app.mount('#app')