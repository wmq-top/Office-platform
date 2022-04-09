<!--
 * @Author: Geeker
 * @Date: 2022-04-05 20:59:53
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-10 00:22:58
 * @Description: 
-->
<template>
  <div>
    <div id="queslist">
      <div class="QuesList">
        <div class="quesTitle" @click="goDetialPage">{{ propsData.title }}</div>
        <div class="latesttime">{{ propsData.time }}</div>
        <div class="questextContent">{{ propsData.summary }}</div>
        <div class="quesFunc">
          <div>
            <svg-icon :name="`browse`" :color="'#000000'" />
            <span>快速浏览</span>
          </div>
          <div>
            <svg-icon :name="`email`" :color="'#000000'" />
            <span>进入讨论</span>
          </div>
          <div>
            <svg-icon :name="`pin`" :color="'#000000'" />
            <span>插眼</span>
          </div>
          <div>
            <svg-icon :name="`increase`" :color="'#000000'" />
            <span>提升热度</span>
          </div>
          <!-- <svg-icon :name="`solute`" :color="'#000000'" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@icons/index.vue";
import { useRouter } from "vue-router";
export default {
  props: {
    propsData: Object
  },
  setup(props) {
    const router = useRouter();
    const goDetialPage = () => {
      router.push({ name: 'questiondetial', params: { Qid: props.propsData.Qid } })
    }
    return {
      goDetialPage
    }
  },
  components: {
    SvgIcon,
  },
};
</script>

<style lang="less">
#queslist {
  .QuesList {
    width: 100%;
    height: 150px;
    border-bottom: 1px solid rgb(206, 206, 206);
    margin-bottom: 10px;
    .quesTitle {
      width: 59%;
      height: 50px;
      line-height: 50px;
      text-align: left;
      float: left;
      font-size: 16px;
      margin-left: 30px;
      cursor: pointer;
    }
    .latesttime {
      height: 50px;
      line-height: 50px;
      float: right;
      margin-right: 30px;
      color: gray;
    }
    .questextContent {
      width: 80%;
      height: 60px;
      line-height: 30px;
      padding: 0px 30px;
      color: gray;
      word-wrap: break-word;
      text-align: left;
      float: left;
    }
    .quesFunc {
      width: 50%;
      height: 40px;
      line-height: 40px;
      float: left;
      text-align: left;
      padding-left: 30px;
      font-size: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        cursor: pointer;
      }
      span {
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
      }
    }
  }
}
</style>