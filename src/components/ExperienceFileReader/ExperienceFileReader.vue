<template>
  <div id="FileReader">
    <div class="filereader">
      {{ ChooseFile }}
      <input type="file" @change="changeFile($event)" id="FileReaderBtn" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { message } from "ant-design-vue";

export default {
  methods: {
    changeFile(event) {
      const that = this;
      const filename = event.target.files[0].name;
      const fileType = filename.split(".")[filename.split(".").length - 1];
      if (fileType === "txt") {
        const reader = new FileReader();
        reader.readAsText(event.target.files[0], "utf8");
        reader.onload = function () {
          const ecnresult = reader.result;
          const emitDate = {};

          const fileArr = ecnresult.split("\n");
          for (let i = 0; i < fileArr.length; i++) {
            // 妈的这读上来的长度为1的空项到底是啥
            if (fileArr[i].length === 1) {
              fileArr.splice(i, 1);
            }
          }
          // 只取第一个: 这边必须要严格按照模板规则来，后续我会开发更复杂的根据关键字模板上传文件
          const emitObj = fileArr.map((item) => {
            const key = item.replace(/:/, "%^&").split("%^&")[0];
            const Value =
              item.replace(/:/, "%^&").split("%^&")[1] &&
              item.replace(/:/, "%^&").split("%^&")[1].trim();
            const res = {};
            res[key] = Value;
            return res;
          });
          that.$emit("FileData", emitObj);
        };
      } else {
        message.error(this.TypeError);
        return;
      }
    },
  },
  computed: {
    ...mapGetters("publicState", ["Language", "skinMode"]),

    TypeError() {
      return this.$t("msg.ExceptTxt", this.Language);
    },
    ChooseFile() {
      return this.$t("wds.ChooseFile", this.Language);
    },
  },
};
</script>

<style lang="less">
.filereader {
  position: absolute;
  display: inline-block;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
}
.filereader input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
}
.filereader:hover {
  background: #aadffd;
  text-decoration: none;
}

.default {
  .filereader {
    background: #d0eeff;
    border: 1px solid #99d3f5;
  }
  .filereader:hover {
    background: #aadffd;
    border-color: #78c3f3;
    color: #004974;
  }
}
.darkMode {
  .filereader {
    color: rgb(240, 240, 240);
    background: rgb(85, 85, 85);
    border: 1px solid rgb(61, 61, 61);
  }
  .filereader:hover {
    background: rgb(70, 70, 70);
    border-color: rgb(61, 61, 61);
    color: white;
  }
}
</style>

