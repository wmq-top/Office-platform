<!--
 * @Author: your name
 * @Date: 2022-03-23 18:56:23
 * @LastEditTime: 2022-04-01 19:56:47
 * @LastEditors: Geeker
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\view\Experience\ExTemplate\ExTemplate.vue
-->
<template>
  <div id="writeex">
    <div class="writeex-cover" :class="skinMode">
      <div class="writeEx-content" :class="isclose ? 'close' : 'show'">
        <div class="animation-vif" v-if="!isclose">
          <div class="EXtitleBox">
            <span>{{ Translateprops }}</span>
            <div class="closeIcon">
              <svg-icon
                :name="skinMode === 'darkMode' ? 'closeWhite' : 'closeBlack'"
                @click="closeTemplatePage"
              />
            </div>
          </div>
          <div class="basicMsg">
            <a-input
              v-model:value="ExSharedObj.title"
              :addon-before="PageSting.title"
              class="inputStyle"
              size="large"
            />
            <a-input
              v-model:value="ExSharedObj.topic"
              :addon-before="PageSting.topic"
              class="inputStyle"
              size="large"
            />
            <a-input
              v-model:value="ExSharedObj.classification"
              :addon-before="PageSting.classification"
              class="inputStyle"
              size="large"
            />
            <ExperienceFileReader @FileData="returnFileData" v-if="!isclose" />
          </div>
          <div class="ExSharedContent">
            <a-textarea
              v-model:value="ExSharedObj.value"
              placeholder="input your shared"
              :auto-size="{ minRows: 18, maxRows: 18 }"
              class="ExTextArea"
            />
          </div>
          <BtnList
            class="ButtonList"
            :BtnStaticConfig="BtnListProps"
            @onConfirm="onConfirm"
            @onCancel="closeTemplatePage"
          />
        </div>
      </div>
    </div>
    <!-- 这里新增文件 -->
    <!-- {{uploadData}} -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BtnList from '@component/BTNList/BTNList.vue'
import ExperienceFileReader from "@component/ExperienceFileReader/EXperienceFileReader.vue";
export default {
  props: {
    propsdata: Object,
  },
  data() {
    return {
      uploadData: {},
      isclose: false,
      ExSharedObj: {
        title: '',
        topic: '',
        classification: '',
        value: ''
      },
      BtnListProps: {
        cfmText: 'wds.Confirm',
        cnlText: 'wds.Cancel',
        size: 16,
      }
    };

  },
  components: {
    ExperienceFileReader,
    BtnList
  },
  methods: {
    returnFileData(data) {
      this.uploadData = data;
      this.ExSharedObj.title = data[0].titile;
      this.ExSharedObj.topic = data[1].topic;
      this.ExSharedObj.classification = data[2].classification;
      this.ExSharedObj.value = data[3].content;
      // console.log(data);
    },
    onConfirm() {
      console.log(this.ExSharedObj);
    },
    closeTemplatePage() {
      this.isclose = true;
      this.$emit("closeTempPage", false);
    }
  },
  computed: {
    ...mapGetters("publicState", ["Language", "skinMode"]),
    Translateprops() {
      return this.$t(this.propsdata.tip, this.Language);
    },
    PageSting() {
      return {
        title: this.$t('wds.title', this.Language),
        topic: this.$t('wds.topic', this.Language),
        classification: this.$t('wds.classification', this.Language)
      }
    }
  },
};
</script>

<style lang="less">
#writeex {
  .writeex-cover {
    width: 100%;
    height: calc(100vh - 60px);
    position: relative;
    z-index: 1;
    padding-top: 10vh;
    .close {
      animation: myClose 0.3s 1;
    }
    @keyframes myClose {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(0);
      }
    }
    .show {
      animation: myShow 0.5s forwards;
    }
    @keyframes myShow {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }
    .writeEx-content {
      position: relative;
      margin: auto;
      border-radius: 20px;
      padding: 0 20px 0 20px;
      width: 60%;
      height: 70vh;
      .animation-vif {
        width: 100%;
        height: 100%;
      }
      .EXtitleBox {
        font-size: 18px;
        position: absolute;
        width: calc(100% - 40px);
        height: 54px;
        line-height: 54px;
        text-align: left;
        letter-spacing: 3px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
          Geneva, Verdana, sans-serif;
        .closeIcon {
          font-size: 22px;
          line-height: 45px;
          float: right;
          cursor: pointer;
        }
      }
      .basicMsg {
        position: absolute;
        width: 43%;
        height: 80%;
        bottom: 70px;
        .inputStyle {
          width: 90%;
          margin: 30px auto 30px;
        }
      }
      .ExSharedContent {
        position: absolute;
        width: 50%;
        height: 80%;
        bottom: 70px;
        right: 20px;
        .ExTextArea {
          border-radius: 10px;
          padding: 10px;
        }
      }
      .ButtonList {
        position: absolute;
        bottom: 20px;
        right: 30px;
      }
    }
  }
  .darkMode {
    background-color: rgba(53, 53, 53, 0.7);
    .writeEx-content {
      color: rgb(255, 255, 255);
      background-color: rgb(88, 88, 88);
      box-shadow: 0px 0px 8px rgb(155, 155, 155);
    }
    .ExTextArea {
      background-color: rgb(105, 105, 105);
    }
    .ant-input-group-addon {
      color: white;
      border: 1px solid rgb(141, 141, 141);
      background-color: rgb(105, 105, 105);
    }
    .ant-input {
      color: white;
      border: 1px solid rgb(141, 141, 141);
      background-color: rgb(105, 105, 105);
    }
  }
  .default {
    background-color: rgba(194, 194, 194, 0.7);
    .writeEx-content {
      color: rgb(0, 0, 0);
      background-color: rgb(235, 235, 235);
      box-shadow: 0px 0px 8px rgb(155, 155, 155);
    }
  }
}
</style>

