<template>
  <div id="qanda">
    <div class="qanda" :class="skinMode" ref="QAMainContent">
      <div class="content">
        <div class="QAleftContent">
          <div>
            <a-button type="primary" @click="showModal">我要提问</a-button>
            <a-modal
              v-model:visible="visible"
              title="我要提问"
              :confirm-loading="confirmLoading"
              @ok="handleOk"
              @cancel="cancelModify"
              width="1200px"
            >
              <div class="QAVMContent">
                <a-row>
                  <a-col :span="2">题目</a-col>
                  <a-col :span="22">
                    <a-input
                      v-model:value="quesTitle"
                      placeholder="请输入题目"
                    />
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="2">摘要</a-col>
                  <a-col :span="22">
                    <a-input
                      v-model:value="quesSummary"
                      placeholder="请输入摘要"
                    />
                  </a-col>
                </a-row>
              </div>
              <a-row>
                <a-col :span="2">内容</a-col>
                <a-col :span="22">
                  <VMEditor
                    :mode="'editable'"
                    :size="VMSize"
                    @addpicture="addpicIntoStack"
                    @modifyVM="getResultData"
                    :propContent="propsForVm"
                  />
                </a-col>
              </a-row>
            </a-modal>
          </div>
          <div class="QALeftTop">
            <div class="QAtitle">
              <span>专项列表</span>
            </div>
            <ScrollList />
          </div>
          <div v-for="(item, index) in getQuestionList" :key="index">
            <QuesList :propsData="item" />
          </div>
        </div>
        <div class="QArightContent">
          <div
            v-for="(item, index) in cardProps"
            :key="index"
            :class="openList === index ? 'openListCard' : ''"
          >
            <my-card
              :theme="item.theme"
              :size="1"
              :dataProps="item.data"
              @openList="getOpenDetial"
              :dataList="commonQues[index]"
            />
          </div>
        </div>
      </div>
      <div class="BackTop">
        <FuncListShow
          :funcList="funcListArr"
          @backTop="backToTop"
          @support="support"
          @using="using"
          @yes="yes"
          @no="no"
          @close="close"
        >
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
      <div></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, ref, createVNode } from "vue";
import MyCard from "@component/UI/MyCard.vue";
import ScrollList from "@component/UI/ScrollCard.vue";
import FuncListShow from "@component/UI/FuncListShow.vue";
import QuesList from "./QuesList/QuesList.vue";
import SvgIcon from "@icons/index.vue";
import VMEditor from "@component/VMEditor/VMEditor.vue";

import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { message, Modal } from "ant-design-vue";

import { mapState, mapGetters, mapActions, useStore } from "vuex";

export default defineComponent({
  setup() {
    const modalText = ref("Content of the modal");
    const visible = ref(false);
    const confirmLoading = ref(false);
    const picArr = ref([]);
    const propsForVm = ref("null");
    const store = useStore();
    const resultValue = ref("");
    const quesTitle = ref("");
    const quesSummary = ref("");
    const regOfPic = /\!\[Description\]\(\/static\/(?<filename>.*)?\)/g;
    const regofCode = /\`\`\`/g;
    const temp = ref(0);
    const showModal = () => {
      propsForVm.value = "";
      picArr.value = [];
      visible.value = true;
    };

    const addpicIntoStack = (data) => {
      picArr.value.push(data);
    };

    const handleOk = () => {
      if (
        quesTitle.value === "" ||
        quesSummary.value === "" ||
        resultValue.value.length < 30
      ) {
        message.warning("You should fixed the inputbox");
        return;
      }
      modalText.value = "The modal will be closed after two seconds";
      confirmLoading.value = true;
      // 为了节省静态资源空间, 需要回收所有的临时资源
      // 因为VMEditor那边写死了图片上传走协议，所以需要复杂地维护临时资源
      // 用户可以无限上传文件，然后在MD中删除，那这临时资源就无法释放了，所以维护一下这个
      // 有个问题是同名文件覆盖和误删除，后续需要解决
      setTimeout(() => {
        const res = resultValue.value.matchAll(regOfPic);
        for (let item of res) {
          let position = picArr.value.indexOf(item.groups.filename);
          picArr.value.splice(position, 1);
        }
        while (regofCode.exec(resultValue.value)) {
          temp.value % 2 === 0
            ? (resultValue.value = resultValue.value.replace("```", "<code>"))
            : (resultValue.value = resultValue.value.replace("```", "</code>"));
          temp.value ++ 
        }
        store.dispatch("QandA/delateStaticFiles", picArr.value);
        store
          .dispatch("QandA/addNewQues", {
            title: quesTitle.value,
            summary: quesSummary.value,
            content: resultValue.value,
          })
          .then((res) => {
            store.dispatch("QandA/getQuesList");
          });
        propsForVm.value = "waiting...";
        quesTitle.value = "";
        quesSummary.value = "";
        picArr.value = [];
        confirmLoading.value = false;
        visible.value = false;
      }, 1000);
    };

    const getResultData = (data) => {
      resultValue.value = data;
    };

    const cancelModify = () => {
      regOfPic.lastIndex = 0;
      if (!regOfPic.test(resultValue.value) && resultValue.value.length < 30) {
        visible.value = false;
        propsForVm.value = "null";
        return;
      }
      visible.value = true;
      // 这里是取消操作的逻辑给出风险提示用户操作将不会被保留
      Modal.confirm({
        title: "确认  ",
        icon: createVNode(ExclamationCircleOutlined),
        content: "执行取消操作, 已上传的文件和当前记录会被清除请确认操作",
        okText: "确认",
        cancelText: "取消",
        onOk: () => {
          // 在这里清空已上传的静态文件
          store.dispatch("QandA/delateStaticFiles", picArr.value);
          propsForVm.value = "null";
          quesTitle.value = "";
          quesSummary.value = "";
          picArr.value = [];
          visible.value = false;
        },
      });
    };

    return {
      modalText,
      visible,
      confirmLoading,
      propsForVm,
      quesTitle,
      quesSummary,
      showModal,
      handleOk,
      getResultData,
      addpicIntoStack,
      cancelModify,
    };
  },

  created() {
    this.getQAData();
    this.getQuesList();
  },
  data() {
    return {
      aa: "backTop",
      cardProps: [
        {
          theme: "blue",
          size: 1,
          data: {
            ids: 0,
            title: "常见问题",
            btnString: "展开",
          },
        },
        {
          theme: "orange",
          size: 1,
          data: {
            ids: 1,
            title: "近日热点",
            btnString: "展开",
          },
        },
        {
          theme: "green",
          size: 1,
          data: {
            ids: 2,
            title: "优质解答",
            btnString: "展开",
          },
        },
      ],
      openList: -1,
      funcListArr: [
        { name: "backTop" },
        { name: "support" },
        { name: "using" },
        { name: "no" },
        { name: "yes" },
        { name: "close" },
      ],
      VMSize: {
        height: 600,
      },
    };
  },
  components: {
    MyCard,
    ScrollList,
    FuncListShow,
    VMEditor,
    QuesList,
    SvgIcon,
  },
  computed: {
    ...mapGetters("publicState", ["Language", "skinMode"]),
    ...mapGetters("QandA", ["getProtocolData", "getQuestionList"]),
    commonQues() {
      const common = this.getProtocolData.filter((item) => {
        return item.browse <= 200 && item.state === 0;
      });
      const hot = this.getProtocolData.filter((item) => {
        return item.browse >= 200 && item.state === 0;
      });
      const solute = this.getProtocolData.filter((item) => {
        return item.state === 1;
      });
      return [common, hot, solute];
    },
  },
  methods: {
    ...mapActions("QandA", ["getQAData", "getQuesList"]),
    getOpenDetial(value) {
      if (this.openList === value) {
        this.openList = -1;
      } else {
        this.openList = value;
      }
    },
    backToTop() {
      this.$refs.QAMainContent.scrollTop = 0;
    },
    support() {
      console.log(this.openList);
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
    // addpicIntoStack(data) {
    //   console.log(data);
    // }
  },
});
</script>

<style lang="less">
#qanda {
  min-width: 1280px;
  .qanda {
    padding-top: 60px;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    overflow-y: auto;
    .content {
      width: 69.5%;
      height: 80vh;
      margin: auto;
      margin-top: 4px;
      border-radius: 50px;
    }
    .GoQues {
      width: 30%;
      height: 120px;
      // background-color: red;
      border-radius: 15px;
      float: left;
    }
    .underDiscussion {
      width: 30%;
      height: 120px;
      // background-color: red;
      border-radius: 15px;
      float: left;
    }
    .QAleftContent {
      position: relative;
      width: calc(100% - 355px);
      margin-top: 14px;
      margin-bottom: 14px;
      float: left;
      border-radius: 10px;
      overflow: hidden;
      .QALeftTop {
        height: 200px;
        width: 100%;
        margin-top: 130px;
        .QAtitle {
          height: 50px;
          width: 140px;
          text-align: center;
          line-height: 50px;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }

    .QArightContent {
      float: right;
      width: 340px;
      position: relative;
      .openListCard {
        position: absolute;
        z-index: 9;
        top: 0;
        .specialcard {
          height: 810px;
        }
        .card-content {
          height: calc(900px - 64px) !important;
        }
      }
    }
    .BackTop {
      right: 36%;
      bottom: 20px;
      position: fixed;
    }
  }
  .default {
    background-color: rgb(230, 230, 230);
    .QAleftContent {
      background-color: white;
      .QALeftTop {
        border-bottom: 1px solid rgb(206, 206, 206);
      }
    }
  }
  .darkMode {
    color: white;
    background-color: rgb(39, 39, 39);
    .QAleftContent {
      background-color: rgb(68, 68, 68);
      .QALeftTop {
        border-bottom: 1px solid rgb(54, 54, 54);
      }
    }
  }
}
.QAVMContent {
  .ant-row {
    margin-bottom: 15px;
  }
}
</style>

