<!--
 * @Author: your name
 * @Date: 2022-03-24 20:22:14
 * @LastEditTime: 2022-03-26 19:54:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\view\TeamUrging\MisssionCard\MissionCard.vue
-->
<template>
  <div id="MissionCard">
    <div class="MIssoionCard" :class="skinMode">
      <div
        class="Card-item"
        :class="MissionData.id === active ? 'activeCard' : ''"
      >
        <div class="StateTip" :class="TipState"></div>
        <div class="MissionTitle">
          {{ MissionData.title }}
        </div>
        <div class="MissionDate">
          {{ MissionData.date }}
        </div>
        <div class="MissionDetial">
          <ul>
            <li>
              <SvgIcon
                :name="`layers`"
                class="MissionCardIcon"
                :color="skinMode !== 'default' ? '#eeeeee' : '#111111'"
              />
              {{ MissionData.finish }} / {{ MissionData.total }}
            </li>
            <li>
              <SvgIcon
                :name="`user`"
                class="MissionCardIcon"
                :color="skinMode !== 'default' ? '#eeeeee' : '#111111'"
              />
              {{ MissionData.number }}
            </li>
            <li>
              <SvgIcon
                :name="`attachment`"
                class="MissionCardIcon"
                :color="skinMode !== 'default' ? '#eeeeee' : '#111111'"
              />
              {{ MissionData.LinkDoc.length }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@icons/index.vue";
import { mapGetters } from "vuex";
export default {
  props: {
    MissionData: Object,
    active: Number,
  },
  components: {
    SvgIcon,
  },
  computed: {
    ...mapGetters("publicState", ["Language", "skinMode", "SlogenTitle"]),
    TipState() {
      switch (this.MissionData.state) {
        case 0:
          return "success";
        case 1:
          return "failed";
        case 2:
          return "unknown";
      }
    },
  },
};
</script>

<style lang="less">
#MissionCard {
  .MIssoionCard {
    width: 90%;
    height: 140px;
    border-radius: 10px;
    margin: 10px auto 10px;
    cursor: pointer;
    .Card-item {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      padding-top: 15px;
      position: relative;
      .StateTip {
        width: 16px;
        height: 4px;
        margin-left: 20px;
        border-radius: 2px;
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
      .MissionTitle {
        width: 80%;
        height: 30px;
        font-size: 20px;
        margin-top: 10px;
        padding-left: 20px;
        text-align: left;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .MissionDate {
        width: 80%;
        height: 30px;
        font-size: 14px;
        margin-top: 10px;
        padding-left: 20px;
        text-align: left;
        color: rgb(173, 173, 173);
      }
      .MissionCardIcon {
        font-size: 20px;
        margin-bottom: 3px;
      }
      .MissionDetial ul {
        margin-left: 20px;
        width: 60%;
        height: 40px;
        display: flex;
        text-align: left;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  .default {
    border: 1px solid rgb(233, 233, 233);
    background-color: rgb(249, 250, 250);
    .activeCard {
      background-color: rgb(234, 246, 255);
    }
    .Card-item {
      // .failed {
      //   background-color: rgb(255, 127, 104);
      // }
      // .success {
      //   background-color: rgb(119, 255, 153);
      // }
      // .unknown {
      //   background-color: rgb(194, 194, 194);
      // }
      .MissionDate {
        color: rgb(173, 173, 173);
      }
    }
  }
  .darkMode {
    border: 1px solid rgb(75, 75, 75);
    background-color: rgb(78, 78, 78);
    .activeCard {
      background-color: rgb(100, 100, 100);
    }
    .Card-item {
      color: white;
      .MissionDate {
        color: rgb(190, 190, 190);
      }
    }
  }
}
</style>