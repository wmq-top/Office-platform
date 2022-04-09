<template>
  <div id="Loading">
    <div class="Loadingcontent">
      <div class="Loading">
        <div class="topHalf"></div>
        <div class="bottomHalf"></div>
      </div>
      <div class="inLoading">
        <div class="topHalf"></div>
        <div class="bottomHalf"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#Loading {
  .Loadingcontent {
    height: 200px;
    width: 200px;
    position: relative;
    margin: auto;
    transform: scale(0.3);
    .Loading {
      height: 200px;
      width: 200px;
      position: absolute;
      animation: Loading1 3s linear infinite;
      @keyframes Loading1 {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(-360deg);
        }
      }
      .topHalf {
        height: 100px;
        width: 200px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 100px 100px 0px 0;
        border-top: 15px solid rgba(61, 131, 102, 0);
        border-left: 15px solid rgb(12, 116, 236);
        border-right: 15px solid rgb(12, 116, 236);
      }
      .bottomHalf {
        height: 100px;
        width: 200px;
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 0px 0px 100px 100px;
        border-bottom: 15px solid rgba(61, 131, 102, 0);
        border-left: 15px solid rgb(12, 116, 236);
        border-right: 15px solid rgb(12, 116, 236);
      }
    }
    .inLoading {
      height: 120px;
      width: 120px;
      top: 50%;
      left: 50%;
      margin-top: -60px;
      margin-left: -60px;
      position: absolute;
      animation: Loading 3s linear infinite;
      @keyframes Loading {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .topHalf {
        height: 60px;
        width: 120px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 60px 60px 0px 0;
        border-top: 15px solid rgba(61, 131, 102, 0);
        border-left: 15px solid rgb(54, 98, 236);
        border-right: 15px solid rgb(54, 98, 236);
      }
      .bottomHalf {
        height: 60px;
        width: 120px;
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 0px 0px 60px 60px;
        border-bottom: 15px solid rgba(61, 131, 102, 0);
        border-left: 15px solid rgb(54, 98, 236);
        border-right: 15px solid rgb(54, 98, 236);
      }
    }
  }
}
</style>