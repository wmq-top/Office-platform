<template>
  <div id="MyCard">
    <div
      class="specialcard"
      :class="ThemeColor"
      :style="`transform: scale(${size});`"
    >
      <div class="card-cycleBG1"></div>
      <div class="card-cycleBG2"></div>
      <div class="card-cycleBG3"></div>
      <div class="card-cycleBG4"></div>
      <div class="card-title">{{ dataProps.title }}</div>
      <div class="card-button" @click="ChangeOpen">
        {{ dataProps.btnString }}
      </div>
      <div class="card-content">
        <div
          v-for="(item, index) in dataList"
          class="listTitle"
          @click="openQuesDetial(item)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    theme: String, // only Green || Blue || orange  && Must rquire
    size: Number,
    dataProps: Object,
    dataList: Array,
  },
  computed: {
    ThemeColor() {
      return this.theme;
    },
    Size() {
      return this.size;
    },
  },
  methods: {
    ChangeOpen() {
      this.$emit("openList", this.dataProps.ids);
    },
    openQuesDetial(item) {
      this.$router.push({ name: "questiondetial", params: { Qid: item.Qid }});
    },
  },
};
</script>

<style lang="less">
#MyCard {
  .specialcard {
    width: 340px;
    height: 220px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 12px;
    .card-cycleBG1 {
      position: absolute;
      width: 220px;
      height: 220px;
      border-radius: 50%;
      left: 180px;
      top: -45px;
      z-index: -1;
    }
    .card-cycleBG2 {
      position: absolute;
      width: 220px;
      height: 220px;
      border-radius: 50%;
      left: 240px;
      top: 120px;
      z-index: -1;
    }
    .card-cycleBG3 {
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      left: 147px;
      top: 520px;
      z-index: -1;
    }
    .card-cycleBG4 {
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      left: -120px;
      top: 260px;
      z-index: -1;
    }
    .card-title {
      float: left;
      height: 50px;
      text-align: left;
      line-height: 50px;
      font-size: 16px;
      padding-left: 30px;
      color: white;
      letter-spacing: 2px;
      width: 68%;
      cursor: pointer;
    }
    .card-button {
      float: right;
      height: 50px;
      width: 31%;
      text-align: center;
      line-height: 50px;
      font-size: 14px;
      color: white;
      letter-spacing: 2px;

      cursor: pointer;
    }
    .card-content {
      margin-top: 3px;
      height: 196px;
      width: 100%;
      float: left;
      .listTitle {
        height: 50px;
        padding-left: 20px;
        text-align: left;
        font-weight: 540;
        text-align: left;
        line-height: 50px;
        font-size: 16px;
        cursor: pointer;
      }
      .listTitle:hover {
        font-size: 16.1px;
        box-shadow: 4px 0 5px rgba(233, 252, 245, 0.1);
        background-color: rgba(233, 252, 245, 0.2);
      }
    }
  }
  .blue {
    background-image: linear-gradient(
      to right,
      rgb(0, 162, 255),
      rgb(51, 99, 255)
    );
    .card-cycleBG1 {
      background-color: rgba(162, 229, 255, 0.1);
    }
    .card-cycleBG2 {
      background-color: rgba(162, 229, 255, 0.2);
    }
    .card-cycleBG3 {
      background-color: rgba(162, 229, 255, 0.2);
    }
    .card-cycleBG4 {
      background-color: rgba(162, 229, 255, 0.1);
    }
    .card-title {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.5);
    }
    .card-button {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
    }
    .card-content {
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      .listTitle {
        color: rgb(255, 255, 255);
      }
    }
  }
  .green {
    background-image: linear-gradient(
      to left,
      rgb(105, 11, 255),
      rgb(0, 110, 255)
    );
    // box-shadow: 0 0 10px rgb(221, 221, 221);
    .card-cycleBG1 {
      background-color: rgba(148, 253, 99, 0.2);
    }
    .card-cycleBG2 {
      background-color: rgba(59, 252, 33, 0.2);
    }
    .card-cycleBG3 {
      background-color: rgba(59, 252, 33, 0.2);
    }
    .card-cycleBG4 {
      background-color: rgba(148, 253, 99, 0.2);
    }
    .card-title {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.5);
    }
    .card-button {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
    }
    .card-content {
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      .listTitle {
        color: rgb(252, 252, 252);
      }
    }
  }
  .orange {
    background-image: linear-gradient(
      to right,
      rgb(255, 60, 60),
      rgb(242, 255, 58)
    );
    // box-shadow: 0 0 10px rgb(221, 221, 221);
    .card-cycleBG1 {
      background-color: rgba(250, 56, 56, 0.2);
    }
    .card-cycleBG2 {
      background-color: rgba(255, 28, 28, 0.2);
    }
    .card-cycleBG3 {
      background-color: rgba(255, 28, 28, 0.2);
    }
    .card-cycleBG4 {
      background-color: rgba(250, 56, 56, 0.2);
    }
    .card-title {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.5);
    }
    .card-button {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
    }
    .card-content {
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      .listTitle {
        color: rgb(233, 252, 245);
      }
    }
  }
}
</style>

