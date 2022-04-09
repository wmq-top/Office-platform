<!--
 * @Author: your name
 * @Date: 2022-03-19 16:00:36
 * @LastEditTime: 2022-03-23 19:12:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\view\Experience\MiainContent\MainContent.vue
-->
<template>
  <div class="mainContent">
    <div class="experienceSearch">
      <input type="text" v-model="exSearchValue" />
    </div>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane v-for="(item, index) in TypeArr" :key="String(index + 1)">
        <template #tab>
          <span>
            {{ item.title }}
          </span>
        </template>
        <div class="ExListCard-content">
          <div
            class="ExListCard-item"
            v-for="(item, deep) in Mock_Data"
            :key="deep"
          >
            <div class="showDetial" @click="showPageDetial(item.id)">{{CheckAll}}</div>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>

    <div v-if="showDetial" class="readPage" @dblclick="closePageDetial">
      <ExList v-bind:PageID="detialPageID"/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import ExList from "./ExList.vue";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      activeKey: ref("1"),
    };
  },
  components: {
    AppleOutlined,
    AndroidOutlined,
    ExList,
  },
  data() {
    return {
      // 这边要优化可以参考一下主页的search,一样的逻辑不写第二遍了
      exSearchValue: "搜索",
      Mock_Data: [
        { id: 1, value: "" },
        { id: 2, value: "" },
        { id: 3, value: "" },
        { id: 4, value: "" },
        { id: 5, value: "" },
        { id: 6, value: "" },
        { id: 7, value: "" },
        { id: 8, value: "" },
        { id: 9, value: "" },
      ],
      showDetial: false,
      detialPageID: -1,
    };
  },
  methods: {
    showPageDetial(id) {
      this.detialPageID = id;
      this.showDetial = true;
    },
    closePageDetial() {
      this.showDetial = false;
    },
  },
  computed: {
    ...mapGetters('publicState', ['Language', 'skinMode','SlogenTitle']),


    TypeArr() {
      return [
        { title: this.$t("wds.All", this.Language), icon: "11" },
        { title: "React", icon: "11" },
        { title: "Vue", icon: "11" },
        { title: "Node", icon: "11" },
        { title: "webpack", icon: "11" },
      ];
    },
    CheckAll() {
      return this.$t("wds.CheckAll", this.Language);
    }
  },
});
</script>
<style Language="less">

</style>