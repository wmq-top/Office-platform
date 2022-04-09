<!--
 * @Author: your name
 * @Date: 2022-03-14 20:08:32
 * @LastEditTime: 2022-03-26 20:48:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\view\TeamUrging\TeamUrging.vue
-->
<template>
  <div id="teamUrging">
    <div class="teamUrging" :class="skinMode">
      <!-- 整体布局分为两部分 -->
      <!-- 左侧的导航部分 -->
      <div class="teamUrgingContent">
        <div class="leftBar">
          <div class="urgingSearch">
            <a-input-search
              placeholder="input search text"
              class="urgingSearchInput"
              @search="onSearch"
            />
            <SvgIcon
              :name="`addDefault`"
              v-if="skinMode !== 'darkMode'"
              class="addFont"
            />
            <SvgIcon
              :name="`addDark`"
              v-if="skinMode === 'darkMode'"
              class="addFont"
            />
          </div>
          <div class="urgingListbar">
            <a-tabs v-model:activeKey="activeKey">
              <a-tab-pane v-for="(item, index) in tabList" :key="item.name">
                <template #tab slot="title">
                  <a-tooltip>
                    <template #title>{{ PageString[item.name] }}</template>
                    <div class="Tab-icon">
                      <SvgIcon
                        :name="item.name"
                        :color="
                          activeKey === item.name
                            ? '#1296db'
                            : skinMode === 'default'
                            ? '#515151'
                            : '#dbdbdb'
                        "
                      />
                    </div>
                  </a-tooltip>
                </template>
                <a-radio-group
                  v-if="index == 3"
                  v-model:value="filterMode"
                  name="radioGroup"
                  size="small"
                  style="margin-bottom: 10px"
                >
                  <a-radio value="1">{{ PageString.all }}</a-radio>
                  <a-radio value="2">{{ PageString.fixed }}</a-radio>
                  <a-radio value="3">{{ PageString.failed }}</a-radio>
                  <a-radio value="4">{{ PageString.delay }}</a-radio>
                </a-radio-group>
                <a-button
                  type="primary"
                  size="small"
                  v-if="index === 2"
                  class="addPlanbtn"
                  >new plan</a-button
                >
                <div class="MissionCard-content">
                  <missionCard
                    v-for="(item, index) in FilterData"
                    :key="index"
                    :active="currentCard"
                    @click="changeActive(item)"
                    :MissionData="item"
                  />
                </div>
              </a-tab-pane>
            </a-tabs>
          </div>
        </div>
        <!-- 右侧的内容部分 -->
        <div class="rightContent">
          <MissionDetial :id="currentCard" :type="activeKey" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SvgIcon from "@icons/index.vue";

import MissionCard from "./MisssionCard/MissionCard.vue";
import MissionDetial from "./MissionDetial/MissionDetial.vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const onSearch = () => {
      console.log(11);
    };
    const filterMode = ref("1");
    return {
      onSearch,
      filterMode,
      activeKey: ref("apply"),
    };
  },
  components: {
    SvgIcon,
    MissionCard,
    MissionDetial,
  },
  data() {
    return {
      tabList: [
        { name: "apply" },
        { name: "func" },
        { name: "plan" },
        { name: "history" },
      ],
      currentCard: 0,
    };
  },
  computed: {
    ...mapGetters("publicState", ["Language", "skinMode"]),
    ...mapGetters("TeamUrging", ["MissionData"]),
    FilterData() {
      switch (this.filterMode) {
        case "1":
          return this.MissionData;
        case "2":
          return this.MissionData.filter((item) => {
            return item.state == 0;
          });
        case "3":
          return this.MissionData.filter((item) => {
            return item.state == 1;
          });
        case "4":
          return this.MissionData.filter((item) => {
            return item.state == 2;
          });
      }
    },
    PageString() {
      return {
        all: this.$t("wds.All", this.Language),
        fixed: this.$t("wds.Fixed", this.Language),
        failed: this.$t("wds.Failed", this.Language),
        delay: this.$t("wds.Delay", this.Language),
        history: this.$t("wds.History", this.Language),
        plan: this.$t("wds.Plan", this.Language),
        func: this.$t("wds.Func", this.Language),
        apply: this.$t("wds.Apply", this.Language),
      };
    },
  },
  methods: {
    ...mapActions("TeamUrging", ["getMissionList"]),
    changeActive(data) {
      this.currentCard = data.id;
    },
    BackToTop() {
      const scrollbar = document.getElementsByClassName("MissionCard-content");
      for (let i = 0; i < scrollbar.length; i++) {
        scrollbar[i].scrollTop = 0;
      }
    },
  },
  watch: {
    activeKey(value) {
      this.BackToTop();
      this.currentCard = 0;
      // 这里监听一下tab切换来发协议？
      this.getMissionList(value);
      // 或者初始化的时候全请求下来，然后分开渲染
    },
    // 切换模式的时候选择每项的第一个值
    FilterData() {
      this.currentCard = this.FilterData[0].id;
    },
  },
});
</script>

<style lang="less">
#teamUrging {
  .teamUrging {
    width: 100%;
    height: 100vh;
    padding-top: 60px;
    margin: 0 auto;
    position: relative;
    .teamUrgingContent {
      width: 80%;
      height: 96%;
      margin: 10px auto;
      border-radius: 10px;
      overflow: hidden;
      .leftBar {
        width: 34%;
        height: 100%;
        float: left;
        .urgingSearch {
          height: 75px;
          margin: auto;
          .urgingSearchInput {
            width: 74%;
            height: 42px;
            float: left;
            margin: 18px 12px 10px 20px;
            border-radius: 25px;
          }
          .addFont {
            width: 40px;
            height: 40px;
            border-radius: 21px;
            font-size: 43px;
            float: left;
            margin-top: 18px;
            cursor: pointer;
          }
        }
        .urgingListbar {
          width: 100%;
          height: calc(100% - 80px);
          .Tab-icon {
            font-weight: 700;
            font-size: 20px;
          }
          .Tab-icon *:focus {
            outline: none;
          }
          .addPlanbtn {
            width: 88%;
            margin-bottom: 10px;
          }
          .MissionCard-content {
            width: 100%;
            height: 420px;
            overflow: auto;
          }
        }
      }
      .rightContent {
        width: 66%;
        height: 100%;
        float: right;
        overflow: auto;
        overflow-x: hidden;
      }
    }
  }
  .default {
    .teamUrgingContent {
      background-color: rgb(245, 245, 245);
      box-shadow: 0px 0px 15px rgb(116, 116, 116);
      .leftBar {
        border-right: 1px solid rgb(197, 197, 197);
        .urgingSearch {
          background-color: #fff;
          .addFont:hover {
            box-shadow: 0 0 3px black;
          }
        }
        .urgingListbar {
          background-color: #fff;
          .ant-tabs-nav-container {
            background-color: rgb(243, 243, 245);
          }
          .currentCard {
            background-color: red !important;
          }
        }
      }
    }
  }
  .darkMode {
    .teamUrgingContent {
      background-color: rgb(70, 70, 70);
      box-shadow: 0px 0px 15px rgb(116, 116, 116);
      .leftBar {
        background-color: rgb(68, 68, 68);
        border-right: 1px solid rgb(145, 145, 145);
        .urgingSearch {
          background-color: rgb(68, 68, 68);
          .addFont:hover {
            box-shadow: 0 0 3px black;
          }
          * {
            color: white;
            background-color: rgb(68, 68, 68);
          }
        }
        .urgingListbar {
          background-color: rgb(68, 68, 68);

          .ant-tabs-nav-container {
            background-color: rgb(49, 49, 49);
          }
          .ant-radio-wrapper {
            color: white;
          }
          .currentCard {
            background-color: red !important;
          }
        }
      }
    }
  }
  .failed {
    background-color: rgb(255, 127, 104);
  }
  .success {
    background-color: rgb(119, 255, 153);
  }
  .unknown {
    background-color: rgb(194, 194, 194);
  }
}
</style>