<!--
 * @Author: your name
 * @Date: 2022-03-15 20:34:23
 * @LastEditTime: 2022-04-07 00:23:34
 * @LastEditors: Geeker
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\view\DefaultPage\WindowSearch\WindowSearch.vue
-->
<template>
  <div id="windowSearch">
    <!-- 我想模拟实现一个搜索功能，看一下node暴搜数据库的性能 -->
    <div class="windowSearch" :class="skinMode" @keydown.enter="doSearch">
      <!-- <div
        class="Search-title"
        @click="changeTitle"
        :style="`font-size:${fontSizeOfTitle}px`"
      >{{title}}</div> -->
      <div class="Search-input">
        <div class="searchicon" @click="doSearch">
          <SearchOutlined />
        </div>
        <input
          type="text"
          v-model="curvalue"
          :class="curvalue === defaultValue ? 'lightfont' : ''"
          @focus="clearValue"
          @blur="inputcheck"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import "./WindowSearch.less";
import { SearchOutlined } from "@ant-design/icons-vue";
import { defineComponent, inject, ref, reactive } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  data() {
    return {
      curvalue: this.$t("com.SearchInSys", this.Language),
      title: this.$t("com.SearchInApp"),
      fontSizeOfTitle: 80,
      currIndex: 0
    };
  },
  components: {
    SearchOutlined
  },
  methods: {
    fontSizeCalc(length) {
      if (length < 100) {
        this.fontSizeOfTitle = -0.625 * length + 90;
      } else if (length > 100 && length < 150) {
        this.fontSizeOfTitle = -0.625 * length + 100;
      } else {
        this.fontSizeOfTitle = 20;
      }
    },
    clearValue(e) {
      if (this.curvalue === this.defaultValue) {
        this.curvalue = "";
      } else {
        e.target.selectionStart = 0;
      }
    },
    inputcheck() {
      this.curvalue === "" ? (this.curvalue = this.defaultValue) : void 0;
    },
    changeTitle() {
      if (this.currIndex < this.SlogenTitle.length - 1) {
        this.currIndex += 1;
      } else {
        this.currIndex = 0;
      }
      this.title = this.SlogenTitle[this.currIndex];
      this.fontSizeCalc(this.title.length);
    }
  },
  computed: {
    ...mapGetters("publicState", ["Language", "skinMode", "SlogenTitle"]),

    defaultValue() {
      this.curvalue = this.$t("com.SearchInSys", this.Language);
      return this.$t("com.SearchInSys", this.Language);
    },
    
  },
  destory() {
    console.log(111);
  }
});

</script>

