<!--
 * @Author: your name
 * @Date: 2022-03-19 17:11:50
 * @LastEditTime: 2022-03-19 18:41:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-vue3\src\view\Experience\MainContent\ExList.vue
-->
<template>
  <div class="fuck">
    
  </div>
</template>

<script>
export default {
    props: ['PageID'],
    created() {
        console.log(this.id);
        // 这里直接发协议请求对应id的详细数据
    },
    data() {
        return {
            id: this.PageID
        }
    }
}
</script>

<style>

</style>
