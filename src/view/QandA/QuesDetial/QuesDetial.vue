<template>
  <div id="QuesDetial">
    <div class="QuesDetial" :class="skinMode">
      <div class="leftDetial">
        <a-tabs v-model:activeKey="activeKey" type="card">
          <a-tab-pane key="1" tab="问题描述">
            <VMEditor :height="900" :mode="'preview'" :propContent="content" />
          </a-tab-pane>
          <a-tab-pane key="2" tab="讨论专区">讨论专区</a-tab-pane>
          <a-tab-pane key="3" tab="问题解答">问题解答</a-tab-pane>
        </a-tabs>
        <div class="BackTop">
          <FuncListShow :funcList="funcListArr" @backTop="backToTop" @support="support" @using="using" @yes="yes"
            @no="no" @close="close">
            <template #backTop>
              <svg-icon :name="'backTop'" />
            </template>
            <template #support>
              <svg-icon :name="'support'" />
            </template>
            <template #using>
              <svg-icon :name="'lover'" />
            </template>
            <template #yes>
              <svg-icon :name="'goDown'" />
            </template>
            <template #no>
              <svg-icon :name="'disSupport'" />
            </template>
            <template #close>
              <svg-icon :name="'funcShare'" />
            </template>
          </FuncListShow>
        </div>
      </div>
      <div class="rightDetial">
        <VMEditor :mode="'editable'" :height="961" />
        <div class="subbtn">
          <BTNList :BtnStaticConfig="BtnListProps" />
        </div>
      </div>

    </div>  </div>
</template>

<script>
import FuncListShow from "@component/UI/FuncListShow.vue";
import VMEditor from "@component/VMEditor/VMEditor.vue";
import BTNList from "@component/BTNList/BTNList.vue"
// import { message } from 'ant-design-vue';
import { computed, defineComponent, ref } from "vue";
import { useStore, mapGetters, mapActions } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup(props) {
    const store = useStore();
    const Router = useRouter();
    const BtnListProps = {
      cfmText: 'wds.PublishAns',
      cnlText: 'wds.PublishComment',
      size: 16,
    }
    store.dispatch("QandA/getDetial", Router.currentRoute.value.params).then(() => {
      // message.success({ content: 'Loaded!', key, duration: 2 });
    })
    const skinMode = computed(() => {
      return store.getters["publicState/skinMode"];
    });
    return {
      skinMode,
      BtnListProps,
      activeKey: ref("1"),
    };
  },
  created() {

  },
  components: {
    VMEditor,
    FuncListShow,
    BTNList
  },
  data() {
    return {
      funcListArr: [
        { name: "backTop" },
        { name: "support" },
        { name: "using" },
        { name: "no" },
        { name: "yes" },
        { name: "close" },
      ],
    }
  },
  computed: {
    ...mapGetters("QandA", ["getDetialQA"]),
    content() {
      const reg1 = /\<code\>/g
      const reg2 = /\<\/code\>/g
      if (this.getDetialQA && this.getDetialQA.QuesData && this.getDetialQA.QuesData[0]) {
        while (reg1.exec(this.getDetialQA.QuesData[0].content)) {
          this.getDetialQA.QuesData[0].content =
            this.getDetialQA.QuesData[0].content.replace("<code>", "```");
        }
        while (reg2.exec(this.getDetialQA.QuesData[0].content)) {
          this.getDetialQA.QuesData[0].content =
            this.getDetialQA.QuesData[0].content.replace("</code>", "```");
        }
        return `### ${this.getDetialQA.QuesData[0].title}\n#### ${this.getDetialQA.QuesData[0].summary}\n` + this.getDetialQA.QuesData[0].content;
      } else {
        return "111111111";
      }
    },
  },
  methods: {
    ...mapActions("QandA", ["getQAData"]),
    backToTop() {
      const content = document.getElementsByClassName('scrollbar__wrap')[0];
      console.log(content);
      content.scrollTop = 0;
    },
    support() {
      console.log(this.$route.params);
    },
    using() {
      console.log("using");
    },
    yes() {
      console.log("yes");
    },
    no() {
      console.log("no");
    },
    close() {
      console.log("close");
    },
    showRef() {
      alert(this.$refs['left'].clientHeight);
    }
  }
}
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
      position: relative;

      .ant-tabs {
        height: calc(100vh - 60px);
      }

      .ant-tabs-content-holder {
        height: 100%;
        overflow: hidden;
      }

      .ant-tabs-nav-list {
        width: 99.9%;
      }

      .ant-tabs-top>.ant-tabs-nav {
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
        position: fixed;
        z-index: 999;
        bottom: 10px;
        color: white;
        right: 30px;
      }
    }
  }

  .default {
    .leftDetial {
      .ant-tabs-content-holder {
        background-color: rgb(255, 255, 255);
      }

      background-color: rgb(241, 243, 244);

      .ant-tabs-tab {
        background-color: #fff;
      }
    }
  }

  .darkMode {
    .leftDetial {
      background-color: rgb(39, 39, 39);

      .ant-tabs-content-holder {
        background-color: rgb(217, 217, 217);
        color: white;
      }

      .vuepress-markdown-body {
        background-color: rgb(217, 217, 217);
      }

      .v-md-editor__preview-wrapper {
        background-color: rgb(217, 217, 217);
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
          color: rgb(0, 81, 255);
        }

        background-color: rgb(217, 217, 217);
      }
    }
  }
}

.BackTop {
  right: 0px;
  bottom: 0px;
  position: absolute;
  z-index: 999;
}
</style>

