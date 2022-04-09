<!--
 * @Author: your name
 * @Date: 2022-03-25 21:06:38
 * @LastEditTime: 2022-03-26 20:49:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\view\TeamUrging\MainContent\MissionDetial.vue
-->
<template>
  <div id="MissionDetial">
    <div class="MissionDetial" :class="skinMode">
      <div class="MissionStateContent">
        <div class="MissionState" :class="TipState"></div>
        <div>{{ TextState }}</div>
      </div>
      <div class="MissionDtitle">
        {{ CurrentMission.title }}
      </div>
      <div class="MissionCreater">
        Mission was create by &nbsp
        <span>{{ CurrentMission.creater }}</span>
      </div>
      <div class="MissionContent">
        {{ CurrentMission.content }}
      </div>
      <div class="MissionDownLoad" v-if="CurrentMission.LinkDoc.length !== 0">
        <div
          v-for="(item, index) in CurrentMission.LinkDoc"
          class="DownLoadItem"
        >
          <div class="fileIcon">
            <FileTextFilled />
          </div>
          <div class="fileMsg">
            <div class="fileName">
              {{ item.filename }}
            </div>
            <div class="fileSize">
              {{ item.filesize }}
            </div>
          </div>
          <div class="downIcon" @click="downloadDoc(item)">
            <svg-icon :name="'download'" :color="skinMode === 'default' ? '#707070' : '#eeeeee'" />
          </div>
        </div>
      </div>
      <div class="Missiontask">
        
      </div>
    </div>
  </div>
</template>

<script>
import { FileTextFilled } from "@ant-design/icons-vue";
import { mapGetters, mapActions } from "vuex";
export default {
  // id 用来确定唯一的数据
  // type 可以区分大数据量的不同种类的专项
  // 以上是条件查询的两个条件
  // just for suggestion
  props: {
    id: Number,
    type: String,
  },
  created() {},
  components: {
    FileTextFilled,
  },
  computed: {
    ...mapGetters("publicState", ["Language", "skinMode"]),
    ...mapGetters("TeamUrging", ["CurrentMission"]),
    TipState() {
      switch (this.CurrentMission.state) {
        case 0:
          return "success";
        case 1:
          return "failed";
        case 2:
          return "unknown";
      }
    },
    TextState() {
      switch (this.CurrentMission.state) {
        case 0:
          return this.$t("wds.Fixed", this.Language);
        case 1:
          return this.$t("wds.Failed", this.Language);
        case 2:
          return this.$t("wds.Delay", this.Language);
      }
    },
  },
  methods: {
    ...mapActions("TeamUrging", ["getMissionData"]),
    downloadDoc(data) {
      console.log(data.fileLink);
    }
  },
  watch: {
    // 这边可以在这里写watch来监听props的变化,
    // 也可以选择在其父组件监听传值的变化, 把这个组件当做纯UI组件使用
    // 都可以吧反正就是不同的写法~
    id() {
      this.getMissionData({
        id: this.id,
        type: this.type,
      });
    },
    type() {
      this.getMissionData({
        id: this.id,
        type: this.type,
      });
    },
  },
};
</script>

<style lang="less">
#MissionDetial {
  .MissionDetial {
    padding-left: 20px;
    padding-right: 20px;
    .MissionStateContent {
      margin-top: 20px;
      width: 130px;
      height: 30px;
      line-height: 30px;
      .MissionState {
        float: left;
        width: 30px;
        height: 3px;
        margin-top: 14px;
        border-radius: 1.5px;
      }
    }
    .MissionDtitle {
      width: 60%;
      height: 55px;
      font-size: 24px;
      text-align: left;
      word-wrap: break-word;
    }
    .MissionCreater {
      width: 50%;
      height: 30px;
      text-align: left;
      color: rgb(153, 153, 153);
    }
    .MissionCreater span {
      color: rgb(0, 178, 248);
      cursor: pointer;
    }
    .MissionContent {
      text-align: left;
    }
    .MissionDownLoad {
      width: 100%;
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      .DownLoadItem {
        width: 42%;
        margin-right: 20px;
        margin-bottom: 20px;
        height: 54px;
        line-height: 54px;
        border: 2px solid rgb(130, 199, 255);
        border-radius: 10px;
      }
      .fileIcon {
        float: left;
        margin-left: 20px;
        font-size: 28px;
        color: rgb(72, 115, 247);
      }
      .fileMsg {
        float: left;
        width: 100px;
        height: 100%;
        line-height: 27px;
        text-align: left;
        margin-left: 10px;
        .fileName {
          font-size: 14px;
          line-height: 38px;
          color: rgb(0, 178, 248);
        }
        .fileSize {
          font-size: 13px;
          line-height: 0px;
        }
      }
      .downIcon {
        width: 40px;
        height: 40px;
        background-color: rgb(230, 230, 230); 
        border-radius: 20px;
        float: right;
        line-height: 37px;
        text-align: center;
        font-size: 24px;
        margin-top: 5px;
        margin-right: 16px;
        cursor: pointer;
      }
    }
  }
  .default {
    .MissionCreater {
      color: rgb(153, 153, 153);
    }
    .MissionCreater span {
      color: rgb(0, 178, 248);
    }
    .MissionDownLoad {
      .DownLoadItem {
        border: 2px solid rgb(130, 199, 255);
      }
      .fileIcon {
        color: rgb(72, 115, 247);
      }
      .fileMsg {
        .fileName {
          color: rgb(0, 178, 248);
        }
      }
      .downIcon {
        background-color: rgb(230, 230, 230); 
      }
    }
  }
  .darkMode {
    color: white;
    .MissionCreater {
      color: rgb(153, 153, 153);
    }
    .MissionCreater span {
      color: rgb(0, 178, 248);
    }
    .MissionDownLoad {
      .DownLoadItem {
        border: 2px solid rgb(130, 199, 255);
      }
      .fileIcon {
        color: rgb(72, 115, 247);
      }
      .fileMsg {
        .fileName {
          color: rgb(0, 178, 248);
        }
      }
      .downIcon {
        background-color: rgb(117, 117, 117); 
      }
    }
  }
}
</style>