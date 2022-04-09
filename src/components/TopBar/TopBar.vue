<!--
 * @Author: your name
 * @Date: 2022-03-12 17:46:54
 * @LastEditTime: 2022-03-25 21:23:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\components\TopBar\TopBar.vue
-->
<template>
  <div id="topbar">
    <div class="topbar-content" :class="skinMode">
      <div class="topbar-item">
        <router-link to="/"><div class="logo-content">Geeker</div></router-link>
        <div class="Lang-content">
          <a-switch
            :checked="Language == 'English'"
            @change="changeLang"
            unCheckedChildren="EN"
            checkedChildren="CH"
          />
        </div>
        <div class="Skin-content">
          <a-switch
            :checked="skinMode == 'darkMode'"
            @change="changeSkin"
            unCheckedChildren="dark"
            checkedChildren="light"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import './TopBar.less';
import { mapGetters,mapActions } from 'vuex';

export default defineComponent({
  // setup() {
  //   const store = useStore();
  //   const skinBtn = ref(store.state.skinMode);
  //   const LangBtn = ref(false);    
  //   return {
  //     skinBtn,
  //     // changeSkin() {
  //     //   store.commit("changeSkin", skinBtn.value);
  //     // },

  //     LangBtn,
  //     // changeLang() {
  //     //   store.commit("changeLang", LangBtn.value);
  //     // },
  //   };
  // },
  methods: {
    ...mapActions('publicState',['changeSkin','changeLang'])
  },
  computed: {
        ...mapGetters('publicState', ['Language', 'skinMode','SlogenTitle']),
  }
});
</script>





