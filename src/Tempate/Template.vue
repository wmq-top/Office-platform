<template>
  <!-- 请保证Id唯一 -->
  <div id="Template">
    <!-- 最外层class同ID -->
    <div class="Template" :class="$store.state.skinMode">
      here is the template area
      <a-switch v-model:checked="simple" />
      <a-button type="primary" @click="updateObjDate">1111</a-button>
      <div>{{ ObjDate.name }}</div>
      <a-button type="primary" @click="updateStore"></a-button>
      <a-button type="primary" @click="addCount">{{ count }}</a-button>
      <a-input v-model:value="string" placeholder="Basic usage" @change="check"/>
      {{innerdata}}<br/>
      {{innerdata2}}
    </div>
  </div>
</template>

<script>
// 本页面对应的样式表}
import "./Template.less";

import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  // 可以选择使用组合式 这里无法使用this 类似于React-Hook
  setup(props, context) {
    //   这里在取props的时候不要使用结构，会丢失props的响应性
    const simple = ref(false);
    const string = ref("");
    const count = ref(1);
    const ObjDate = ref({ name: "geeker" });
    const store = useStore();
    return {
      simple,

      string,
      count,
      addCount() {
        count.value++;
      },

      ObjDate,
      updateObjDate() {
        //传参就在上面调用的时候传就可以了
        ObjDate.value.name = Math.random();
      },

      updateStore() {
        // 这里是更新vuex的方法, 触发方式有很多, 按官网建议来写
        store.commit("changeSkin", ObjDate);
      },
    };
  },
  created() {
    // 这里是可以取到setup中的值的，但是setup中取不到data中的值(setup取不到所有生命周期中的值)
    // setup相当于在beforeCreated的阶段被赋值
  },
  // 2.0写法也可以用
  data() {
    return {
        innerdata: '',
        innerdata2: '',
    };
  },
  computed() {},
  methods: {
      check(e) {
          this.innerdata = "通过method监听到"+e.target.value+"变换";
      }
  },
  watch: {
      string(value) {
          this.innerdata2 = "通过watch监听到"+ value+ "变化";
      }
  },
  destoryed() {},
});
</script>


<style lang="less">
// 你可以直接在这里调试你的样式，并将最终的样式表放到less文件中
</style>