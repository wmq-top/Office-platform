<template>
  <div id="FuncListShow">
    <div class="FuncListShow">
      <div class="contnetcss" @mouseleave="changeFocus(false)">
        <div class="cssShowOff" :class="isfocus ? 'transFormIn': 'tranFormOut'">
          <div
            v-for="(item,index) in funcList"
            :key="index"
            class="centers"
            :class="`func${index+1}`"
            @click="emitfunc(index)"
          >
            <slot :name="`${item.name}`"></slot>
          </div>
        </div>
        <div class="center" @mouseenter="changeFocus(true)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 接收一个方法数组, 最大六项最少没有
  // 后续可能会加自定义样式相关的props
  // 后续一定会写开插槽接收自定义图标iconfont的功能
  props: {
    funcList: Array
  },
  data() {
    return {
      isfocus: false
    }
  },
  methods: {
    changeFocus(value) {
      this.isfocus = value  
    },
    emitfunc(index) {
      if(this.funcList[index]) {
        this.$emit(this.funcList[index].name);
      }      
    },
  }
}
</script>

<style lang="less">
.default {
  .contnetcss {
    .center {
      background-color: rgb(109, 167, 255);
    }
    .center:hover {
      background-color: rgb(0, 122, 255);
    }
    .centers {
      background-color: rgb(109, 167, 255);
    }
    .centers:hover {
      background-color: rgb(0, 122, 255);
    }
  }
}
.darkMode {
  .contnetcss {
    .center {
      background-color: rgb(206, 206, 206);
    }
    .center:hover {
      background-color: rgb(139, 139, 139);
    }
    .centers {
      background-color: rgb(206, 206, 206);
    }
    .centers:hover {
      background-color: rgb(139, 139, 139);
    }
  }
}
.contnetcss {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  top: 200px;
  left: 90px;
  transform: scale(0.6);
  .center {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -30px;
    margin-left: -30px;
    background-color: rgb(235, 235, 235);
    border-radius: 50%;
    cursor: pointer;
  }
  .center:hover {
    background-color: rgb(0, 122, 255);
  }
  .centers {
    width: 60px;
    height: 60px;
    font-size: 40px;
    line-height: 55px;
    position: absolute;
    border-radius: 50%;
    background-color: rgb(253, 253, 253);
    cursor: pointer;
  }
  .cssShowOff {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -90px;
    margin-left: -90px;
    .func2 {
      top: 15px;
      left: -15px;
    }
    .func3 {
      top: 105px;
      left: -15px;
    }
    .func4 {
      top: 105px;
      left: 135px;
    }
    .func5 {
      top: 150px;
      left: 60px;
    }
    .func6 {
      top: 15px;
      left: 135px;
    }
    .func1 {
      top: -30px;
      left: 50%;
      margin-left: -30px;
    }
  }
  .transFormIn {
    animation: startshow 0.5s forwards;
    @keyframes startshow {
      from {
        opacity: 0;
        transform: scale(0) rotate(-180deg);
      }
      to {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }
    }
  }
  .tranFormOut {
    animation: endshow 0.5s forwards;
    @keyframes endshow {
      to {
        transform: scale(0) rotate(-180deg);
        opacity: 0;
      }
    }
  }
}
</style>

