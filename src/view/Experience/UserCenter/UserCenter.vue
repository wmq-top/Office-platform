<!--
 * @Author: your name
 * @Date: 2022-03-19 15:42:47
 * @LastEditTime: 2022-03-23 23:17:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\view\Experience\UserCenter\UserCenter.vue
-->
<template>
  <div class="user-center">
    <div class="user-center-title">
      <UserAddOutlined /> &nbsp{{ CreateCenter }} &nbsplv{{ userlevel }}
    </div>

    <div class="user-options">
      <li
        v-for="(item, index) in svgList"
        :key="index"
        class="svg-font"
        @click="ShowFuncPage(item)"
      >
        <svg-icon :name="item.name" />
        <span class="svg-tip">{{ $t(item.tip, Language) }}</span>
      </li>
    </div>

    <div class="daily-Statistics">
      <div class="browse-count">
        <span class="td-br"
          >{{ PageStr.browsetdCount }}<br />{{ QuantityObj.browsetdCount }}<br
        /></span>
        <span
          >{{ PageStr.browseydCount }}: {{ QuantityObj.browseydCount }}</span
        >
      </div>
      <div class="daily-split"></div>
      <div class="approve-count">
        <span class="td-br"
          >{{ PageStr.approvetdCount }}<br />{{ QuantityObj.browsetdCount }}<br
        /></span>
        <span
          >{{ PageStr.approveydCount }}: {{ QuantityObj.browseydCount }}</span
        >
      </div>
    </div>

    <div class="daily-detial">{{ Viewdetails }}</div>
  </div>
</template>

<script>
import { UserAddOutlined } from "@ant-design/icons-vue";
import SvgIcon from "@icons/index.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      userlevel: 1,
      QuantityObj: {
        browsetdCount: 0,
        browseydCount: 0,
      },
    };
  },
  components: {
    UserAddOutlined,
    SvgIcon,
  },
  computed: {
    ...mapGetters("publicState", ["Language", "skinMode", "SlogenTitle"]),
    // static
    PageStr() {
      return {
        browsetdCount: this.$t("wds.browsetdCount", this.Language),
        browseydCount: this.$t("wds.browseydCount", this.Language),
        approvetdCount: this.$t("wds.approvetdCount", this.Language),
        approveydCount: this.$t("wds.approveydCount", this.Language),
      };
    },
    svgList() {
      return [
        { name: "bianji", tip: "wds.write" },
        { name: "dangan", tip: "wds.shared" },
        { name: "zixun", tip: "wds.draft" },
        { name: "shoucang", tip: "wds.Collection" },
      ];
    },
    Viewdetails() {
      return this.$t("wds.ViewDetails", this.Language);
    },
    CreateCenter() {
      return this.$t("wds.CreateCenter", this.Language);
    },
  },
  methods: {
    ShowFuncPage(emitData) {
      this.$emit("UserEmit", emitData);
    },
  },
};
</script>



