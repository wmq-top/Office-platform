<!--
 * @Author: your name
 * @Date: 2022-03-12 17:49:12
 * @LastEditTime: 2022-03-23 19:16:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\view\HomePage.vue
-->
<template>
  <div id="HomePage">
    <div :class="skinMode + 'HomePage'">
      <RouterBar />
      <TopBar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import RouterBar from "@component/RouterBar/RouterBar.vue";
import TopBar from "@component/TopBar/TopBar.vue";
import "@style/index.less";

export default {
  setup() {},
  created() {
  },
  data() {
    return {
      isAdShow: true,
    };
  },
  components: {
    RouterBar,
    TopBar,
  },
  methods: {
    closeAd() {
      this.isAdShow = false;
    },
  },
  computed: {
    ...mapGetters("publicState", ["Language", "skinMode", "SlogenTitle"]),
    
  }
};
</script>