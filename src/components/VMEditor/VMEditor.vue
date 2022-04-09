<!--
 * @Author: Geeker
 * @Date: 2022-04-07 19:07:22
 * @LastEditors: Geeker
 * @LastEditTime: 2022-04-09 23:14:25
 * @Description: 
-->
<template>
  <div class="vmeditor">
    <v-md-editor
      :mode="mode"
      v-model="content"
      :height="`${size.height}px`"
      :width="`${size.width}px`"
      left-toolbar="undo redo clear|h bold italic strikethrough quote tip emoji|ul ol todo-list table horizontal|link image code|save"
      :disabled-menus="[]"
      @change="handleChange"
      @save="saveChange"
      @upload-image="handleUploadImage"
      @image-click="clickImage"
    >
    </v-md-editor>
  </div>
</template>

<script>
import api from "@api";
import { reactive } from "vue";

export default {
  props: {
    size: Object,
    propContent: String,
    mode: String
  },
  data() {
    return {
      content: this.propContent,
      html: "",
    };
  },
  setup() {},
  methods: {
    handleChange(text, html) {
      this.content = text;
      this.html = html;
    },
    saveChange(text, html) {
      console.log("save text:", text);
    },
    async handleUploadImage(event, insertImage, files) {
      // 本地上传图片，通过调用接口上传到服务端，服务端返回可访问的url
      let formData = new FormData();
      formData.append("file", files[0]);
      const res = await api.uploadFile(formData);
      if (res.result) {
        insertImage({
          url: res.url,
          width: "auto",
          height: "auto",
        });
      }
      this.$emit("addpicture", files[0].name);
    },
    clickImage(images, currentIndex) {
      console.log(1, images);
      console.log(2, currentIndex);
    },
    getContent() {
      return {
        text: this.content,
        html: this.html,
      };
    },
  },
  watch: {
    content() {
      this.$emit("modifyVM", this.content);
    },
    propContent() {
      this.content = this.propContent;
    }
  },
};
</script>

<style scope lang='less'>
.vmeditor {
  position: relative;
  color: black;
  text-align: left;
}
</style>

