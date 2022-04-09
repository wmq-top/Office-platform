<!--
 * @Author: your name
 * @Date: 2022-03-14 19:04:53
 * @LastEditTime: 2022-03-23 19:09:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\view\DefaultPage\DefaultPage.vue
-->
<template>
  <div id="defaultPage">
    <div :class="skinMode">
      <WindowSearch />
      <FunctionIn />
    </div>
  </div>
</template>

<script>
import FunctionIn from "./FunctionIn/FunctionIn.vue";
import WindowSearch from "./WindowSearch/WindowSearch.vue";
import { mapGetters } from "vuex";

import "./DefaultPage.less";
export default {
  components: {
    FunctionIn,
    WindowSearch,
  },
  computed: {
    ...mapGetters("publicState", ["Language", "skinMode", "SlogenTitle"]),
  },
};
</script>
