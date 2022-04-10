<!--
 * @Author: Geeker
 * @Date: 2022-04-07 20:14:57
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-10 16:10:48
 * @Description: 
-->
<template>
  <div id="QuesDetial">
    <div class="QuesDetial" :class="skinMode">
      <div class="leftDetial" ref="left">
        <a-tabs v-model:activeKey="activeKey" type="card">
          <a-tab-pane key="1" tab="问题描述">
            <VMEditor ref="editor" :size="VMSize" :mode="'preview'" :propContent="content" />
          </a-tab-pane>
          <a-tab-pane key="2" tab="讨论专区">Content of Tab Pane 2</a-tab-pane>
          <a-tab-pane key="3" tab="问题解答">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>
      </div>
      <div class="rightDetial">
        <VMEditor :mode="'editable'" :size="{ height: 900}" />
        <a-button type="primary" :size="'large'" class="subbtn" @click="showRef">发布题解</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import VMEditor from "@component/VMEditor/VMEditor.vue";
import { computed, defineComponent, ref } from "vue";
import { useStore, mapGetters } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  setup(props) {
    const store = useStore();
    const Router = useRouter();
    store.dispatch("QandA/getDetial", Router.currentRoute.value.params);
    const skinMode = computed(() => {
      return store.getters["publicState/skinMode"];
    });
    const VMSize = {
      height: 900,
    };
    return {
      VMSize,
      skinMode,
      activeKey: ref("1"),
    };
  },
  components: {
    VMEditor,
  },
  computed: {
    ...mapGetters("QandA", ["getDetialQA"]),
    content() {
      const reg1 = /\<code\>/g
      const reg2 = /\<\/code\>/g
      if (this.getDetialQA.QuesData) {
        while (reg1.exec(this.getDetialQA.QuesData[0].content)) {
          this.getDetialQA.QuesData[0].content =
            this.getDetialQA.QuesData[0].content.replace("<code>", "```");
        }
        while (reg2.exec(this.getDetialQA.QuesData[0].content)) {
          this.getDetialQA.QuesData[0].content =
            this.getDetialQA.QuesData[0].content.replace("</code>", "```");
        }
        return this.getDetialQA.QuesData[0].content;
      } else {
        return "";
      }
    },
  },
  methods: {
    showRef() {
      alert(this.$refs['left'].clientHeight);
    }
  },  
});
</script>

<style lang="less">
#QuesDetial {
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  bottom: 0;
  overflow: hidden;
  .QuesDetial {
    width: 100%;
    height: 100%;
    display: flex;
    .leftDetial {
      width: 50%;
      height: 100%;
      border-right: 2px solid rgb(132, 165, 255);
      .ant-tabs {
        height: calc(100vh - 60px);
      }
      .ant-tabs-content-holder {
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
      }
      .ant-tabs-nav-list {
        width: 99.9%;
      }
      .ant-tabs-top > .ant-tabs-nav {
        margin-bottom: 0;
      }
      .ant-tabs-tab {
        flex: 1;
        text-align: center;
        .ant-tabs-tab-btn {
          width: 100%;
        }
      }
    }
    .rightDetial {
      width: 50%;
      height: 100%;
      position: relative;
      overflow-x: hidden;
      overflow-y: auto;
      .subbtn {
        position: absolute;
        bottom: 10px;
        color: white;
        right: 30px;
      }
    }
  }
  .default {
    .leftDetial {
      * {
        color: black;
      }
      background-color: rgb(241, 243, 244);
      .ant-tabs-tab {
        background-color: #fff;
      }
    }
  }
  .darkMode {
    .leftDetial {
      * {
        color: white;
      }
      background-color: rgb(39, 39, 39);
      .ant-tabs-content-holder {
        background-color: rgb(131, 131, 131);
        color: white;
      }
      .v-md-editor__preview-wrapper {
        background-color: rgb(131, 131, 131);
      }
      .ant-tabs-nav::before {
        border-bottom: 1px solid rgb(65, 65, 65);
      }
      .ant-tabs-tab {
        color: white;
        background-color: rgb(94, 94, 94);
        border: 1px solid rgb(94, 94, 94);
        border-bottom: 0;
      }
      .ant-tabs-tab-active {
        .ant-tabs-tab-btn {
          color: wheat;
        }
        background-color: rgb(131, 131, 131);
      }
    }
  }
}
</style>