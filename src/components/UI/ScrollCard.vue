<template>
  <div id="scrollCard">
    <div
      class="scrollCard"
      @mouseenter="showBtn(true)"
      @mouseleave="showBtn(false)"
      :class="skinMode"
    >
      <div class="leftbtn" :class="btnshow ? '' :'hiddedbtn'">
        <div class="leftIcon" @click="Goleft">
          <left-outlined />
        </div>
      </div>
      <div class="scrollContent">
        <div class="scrollList" :style="`width:${Listdata.length * 180}px`">
          <div class="scrollListItem" v-for="(item,index) in Listdata">{{item}}</div>
        </div>
      </div>
      <div class="rightbtn" :class="btnshow ? '' :'hiddedbtn'">
        <div class="rightIcon" @click="Goright">
          <right-outlined />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { LeftOutlined, RightOutlined } from "@ant-design/icons-vue";
export default {
    props: {
        ListObj: Object
    },
    data() {
        return {
            Listdata: [1,2,3,4, 5, 6, 7, 8, 9],
            btnshow: false
        }
    },
    components: {
        LeftOutlined, RightOutlined
    },
    computed: {
        ...mapGetters("publicState", ["Language", "skinMode"]),
    },
    methods: {
        showBtn(flag) {
            this.btnshow = flag;
        },
        Goleft() {
            clearInterval(this.leftTimer);
            clearInterval(this.rightTimer);
            let step = 0;
            const that = this;
            const maxLength = this.Listdata.length >= 8 ? 360 : 180;
            const scrollPos = document.getElementsByClassName('scrollContent')[0];
            this.leftTimer = setInterval(() => {
                scrollPos.scrollLeft += 5
                step += 5;
                if(step >= maxLength) {
                    scrollPos.scrollLeft += 5
                    clearInterval(that.leftTimer);
                }
            }, 5);            
        },
        Goright() {
            clearInterval(this.leftTimer);
            clearInterval(this.rightTimer);
            let step = 0;
            const that = this;
            const maxLength = this.Listdata.length >= 8 ? 360 : 180;
            const scrollPos = document.getElementsByClassName('scrollContent')[0];
            this.rightTimer = setInterval(() => {
                scrollPos.scrollLeft -= 5
                step += 5;
                if(step >= maxLength) {
                    scrollPos.scrollLeft -= 5
                    clearInterval(that.rightTimer);
                }
            }, 5);            
        }
    }
}
</script>

<style lang="less">
#scrollCard {
  .scrollCard {
    width: 100%;
    height: 140px;
    padding-left: 10px;
    padding-right: 10px;
    //   background-color: pink;
    position: relative;
    .hiddedbtn {
      display: none;
    }
    .leftbtn {
      position: absolute;
      width: 30px;
      height: 100%;
      z-index: 9;
    }
    .rightbtn {
      position: absolute;
      right: 10px;
      width: 30px;
      height: 100%;
      z-index: 9;
    }
    .leftIcon {
      position: absolute;
      top: 50%;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-top: -18px;
      line-height: 36px;
    }
    .rightIcon {
      position: absolute;
      right: 0;
      top: 50%;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-top: -18px;
      line-height: 36px;
    }
    .scrollContent {
      position: absolute;
      width: calc(100% - 80px);
      left: 40px;
      height: 100%;
      overflow: hidden;
      .scrollList {
        height: 120px;
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
      }
      .scrollListItem {
        height: 100%;
        width: 160px;
        background-color: #fff;
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }
  .default {
    background-color: #fff !important;
    .leftbtn {
      box-shadow: 10px 0 10px white;
    }
    .rightbtn {
      box-shadow: -10px 0 10px white;
    }
    .leftIcon {
      color: rgb(163, 163, 163);
      box-shadow: 0 0 5px rgb(163, 163, 163);
    }
    .rightIcon {
      color: rgb(163, 163, 163);
      box-shadow: 0 0 5px rgb(163, 163, 163);
    }
    .leftIcon:hover {
      color: white;
      background-color: rgb(0, 122, 255);
    }
    .rightIcon:hover {
      color: white;
      background-color: rgb(0, 122, 255);
    }
    .scrollContent {
      .scrollListItem {
        box-shadow: 0px 2px 8px rgb(199, 199, 199);
      }
      .scrollListItem:hover {
        box-shadow: 0px 0px 4px rgb(64, 192, 252);
      }
    }
  }
  .darkMode {
    color: white;
    background-color: rgb(68, 68, 68) !important;
    .leftIcon {
      background-color: rgb(99, 99, 99);
      color: rgb(255, 255, 255);
      box-shadow: 0 0 5px rgb(255, 255, 255);
    }
    .rightIcon {
      background-color: rgb(99, 99, 99);
      color: rgb(255, 255, 255);
      box-shadow: 0 0 5px rgb(255, 255, 255);
    }
    .leftIcon:hover {
      color: white;
      background-color: rgb(0, 122, 255);
    }
    .rightIcon:hover {
      color: white;
      background-color: rgb(0, 122, 255);
    }
    .scrollContent {
      .scrollListItem {
        background-color: rgb(102, 102, 102);
        box-shadow: 0px 0px 5px rgb(199, 199, 199);
      }
      .scrollListItem:hover {
        box-shadow: 0px 0px 5px rgb(255, 142, 37);
      }
    }
  }
}
</style>

