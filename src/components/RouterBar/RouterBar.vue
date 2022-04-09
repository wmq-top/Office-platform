<template>
  <!-- 快捷导航路由条快速的跳转到你需要的路由 -->
  <div
    id="drapingbar"
    @click.ctrl="changeBar"
    @mouseup="resetpos"
    @mousemove="movepos"
    :class="activeClass"
  >
    <!-- 三个控制按钮的content -->
    <div
      class="drapingbar"
      :style="'left:' + left + 'px' + ';' + 'top:' + top + 'px' + ';'"
      :class="!menuShow ? 'hidenMode' : null"
    >
      <div class="btn">
        <div class="btn-item red" @click="closeMenu"></div>
        <div class="btn-item yellow" @mousedown="enablechangepos"></div>
        <div class="btn-item green" @click="showMenu"></div>
      </div>
      <div v-if="menuShow">
        <router-link :to="!isLogin ? '/login' : '/user'">
          <div class="portrait">
            <div class="icon"></div>
            <div class="discrib">
              <span>Geeker</span>
              <br />
              <span>Good Day</span>
            </div>
          </div>
        </router-link>
        <div class="split-line"></div>

        <div class="serverlist">
          <div class="sever-icon-list" @mouseleave="changeCurr(-1)">
            <li
              v-for="(item, index) in fixlistarr"
              :key="index"
              @mouseover="changeCurr(index)"
              :class="currNode === index ? 'focus' : null"
            >
              <div
                class="tip"
                :class="currNode === index ? 'showTip' : 'dis'"
              ></div>
              <div class="icon-item">
                <StarOutlined :style="{ fontSize: '16px' }" />
              </div>
              <div class="list-text">
                {{ item }}
              </div>
            </li>
          </div>
        </div>
        <div class="split-line"></div>

        <div class="project-list">
          <div class="project-icon-list">
            <li v-for="(item, index) in projectlist" :key="index">
              <div class="project-item">
                <StarOutlined :style="{ fontSize: '16px' }" class="icon-item" />
              </div>
              <div class="proejct-text">
                {{ item }}
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import "./RouterBar.less";
import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons-vue";
export default {
  name: "drapingbar",
  components: {
    StarOutlined,
  },
  created() {},
  data() {
    return {
      isLogin: false, // 这里先这样写，是否登录状态的列表要放到vuex里管理
      menuShow: false, // 是否全部展示，FALSE为缩略图，true为全部展示
      fixlistarr: ["Dash board", "products", "Campaigns", "Sales"],
      projectlist: [
        "Sofe Ware",
        "Chat",
        "InterCom",
        "Setting",
        "changs",
        "adadw",
      ],
      currNode: -1,
      left: 0, // 位置信息x
      top: 0, // 位置信息y
      enablechangePos: false, // 黄色原点按住触发拖拽使能
    };
  },
  computed: {
    ...mapGetters("publicState", ["Language", "skinMode"]),
    activeClass() {
      if (this.skinMode === "default" && this.enablechangePos) {
        return "TopContent defaultSkin";
      } else if (this.skinMode === "default" && !this.enablechangePos) {
        return "defaultSkin";
      } else if (this.skinMode === "darkMode" && this.enablechangePos) {
        return "TopContent darkMode";
      } else if (this.skinMode === "darkMode" && !this.enablechangePos) {
        return "darkMode";
      }
    },
  },
  methods: {
    changeCurr(index) {
      this.currNode = index;
    },
    closeMenu() {
      this.menuShow = false;
    },
    showMenu() {
      this.menuShow = true;
    },
    changeBar() {
      this.menuShow = true;
    },
    enablechangepos(e) {
      this.enablechangePos = true;
    },
    movepos(e) {
      if (this.enablechangePos) {
        this.left = e.x - 41;
        this.top = e.y - 24;
      }
    },
    resetpos() {
      this.enablechangePos = false;
    },
  },
};
</script>

