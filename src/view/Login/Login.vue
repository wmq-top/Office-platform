<template>
  <div id="login" v-if="isShow">
    <div class="mask">
      <div class="Logincontent" @dblclick.stop="" v-if="mode === 'phone-ol'">
        <div class="top-content">
          <span>欢迎回来</span>
          <!-- <div class="closeicon" @click="changeRoute">
            <CloseOutlined />
          </div> -->
        </div>

        <div class="loginMode-choice">
          <div class="saoma" @click="changeMode('QRcode')">
            <span class="icon-span"><WechatOutlined /></span>&nbsp 扫码登录
          </div>
          <div class="user-pass">
            <UserOutlined />
          </div>
        </div>

        <div class="split-line-group">
          <div class="split-item left"></div>
          <div class="split-or">或</div>
          <div class="split-item right"></div>
        </div>

        <div class="phone-login">
          <div class="input-content">
            <input
              type="text"
              v-model="defaultVlaue"
              @focus="cleardefaultValue"
              @blur="checkInput"
            />
          </div>
          <div class="input-content olinput">
            <input
              type="text"
              v-model="olcode"
              @focus="clearolcode"
              @blur="checkolput"
            />
          </div>
          <div class="get-ol">获取验证码</div>
        </div>

        <div class="cfm-btn" @click="basicLogin">开始使用</div>

        <div class="password-log" @click="changeMode('user-pass')">
          密码登录
        </div>

        <div class="registry">
          还没有账号？ <span class="registry-item">前往注册</span>
        </div>
      </div>

      <div
        class="Login-user-pass"
        @dblclick.stop=""
        v-if="mode === 'user-pass'"
      >
        <div class="top-content">
          <div class="backModeicon" @click="backTodefaultMode">
            <LeftOutlined />
          </div>
          <span>密码登录</span>
          <!-- <div class="closeicon" @click="changeRoute">
            <CloseOutlined />
          </div> -->
        </div>

        <div class="phone-login">
          <div class="input-content">
            <input type="text" @change="onChangeAcount($event,'username')"/>
          </div>
        </div>
        <div class="phone-login">
          <div class="input-content">
            <input type="password" @change="onChangeAcount($event,'password')"/>
          </div>
        </div>
        <div class="cfm-btn" @click="basicLogin">登录</div>

        <div class="password-log">忘记密码</div>
      </div>

      <div class="Login-QRcode" @dblclick.stop="" v-if="mode === 'QRcode'">
        <div class="top-content">
          <div class="backModeicon" @click="backTodefaultMode">
            <LeftOutlined />
          </div>
          <span>扫码登录</span>
          <div class="closeicon" @click="changeRoute">
            <CloseOutlined />
          </div>
        </div>
        <div class="QR-border">
          <div class="QR-item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./Login.less";
import {
  CloseOutlined,
  WechatOutlined,
  UserOutlined,
  LeftOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    CloseOutlined,
    WechatOutlined,
    UserOutlined,
    LeftOutlined,
  },
  data() {
    return {
      isShow: true,
      defaultVlaue: "手机号/邮箱",
      olcode: "验证码",
      mode: "user-pass",
    };
  },
  methods: {
    changeRoute() {
      this.isShow = false;
      this.$router.go(-1);
    },
    cleardefaultValue() {
      this.defaultVlaue = "";
    },
    checkInput(e) {
      if (e.target.value === "") {
        this.defaultVlaue = "手机号/邮箱";
      }
    },
    clearolcode() {
      this.olcode = "";
    },
    checkolput(e) {
      if (e.target.value === "") {
        this.olcode = "验证码";
      }
    },
    basicLogin() {
      this.$store.dispatch('login').then(() => {
        this.$router.push('/');
      }).catch(() => {
        this.$message.error('登录失败');
      });
    },
    changeMode(value) {
      this.mode = value;
    },
    backTodefaultMode() {
      this.mode = "phone-ol";
    },
    /**
     * @description: 用户名或密码输入框改变触发函数
     * @param {object} e 输入框事件对象
     * @param {string} type 用户名或密码
     */    
    onChangeAcount(e, type) {
      this.$store.dispatch('updateAcountInfo', {value: e.target.value, type})
    }
  },
};
</script>

<style lang="less">
#login {
  .Logincontent {
    height: 430px;
    width: 360px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -215px;
    margin-left: -180px;
    border-radius: 30px;
    padding-left: 28px;
    padding-right: 28px;
    .loginMode-choice {
      width: 100%;
      height: 46px;
      margin-top: 20px;
      font-size: 16px;
      line-height: 46px;
      font-weight: 600;
      .saoma {
        width: 78%;
        height: 46px;
        border-radius: 10px;
        border: 1px solid rgb(173, 173, 173);
        float: left;
        cursor: pointer;
        .icon-span {
          color: rgb(32, 215, 110);
        }
      }
      .user-pass {
        width: 46px;
        height: 46px;
        float: right;
        border-radius: 10px;
        border: 1px solid rgb(173, 173, 173);
        cursor: pointer;
      }
      .saoma:hover {
        border: 1px solid rgb(145, 145, 145);
        box-shadow: 0px 0px 1px 1px rgb(228, 228, 228) inset;
      }
      .user-pass:hover {
        border: 1px solid rgb(145, 145, 145);
        box-shadow: 0px 0px 1px 1px rgb(228, 228, 228) inset;
      }
    }
    .split-line-group {
      width: 100%;
      height: 2px;
      margin-top: 20px;
      .split-item {
        width: 46%;
        height: 0.5px;
        background-color: rgba(177, 172, 172, 0.5);
      }
      .split-or {
        width: 8%;
        float: left;
        margin-top: -10px;
        font-size: 10px;
        color: rgba(177, 172, 172, 0.5);
      }
      .left {
        float: left;
      }
      .right {
        float: right;
      }
    }
    .registry {
      width: 185px;
      height: 30px;
      margin: 15px auto 0;
      line-height: 30px;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
      color: rgb(127, 127, 127);
      .registry-item {
        display: inline-block;
        color: rgb(80, 122, 252);
        cursor: pointer;
        border-radius: 5px;
        height: 100%;
        width: 70px;
      }
      .registry-item:hover {
        background-color: rgb(243, 240, 240);
        color: rgb(80, 122, 252);
      }
    }
  }
  .Login-user-pass {
    height: 280px;
    width: 360px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -180px;
    border-radius: 30px;
    padding-left: 28px;
    padding-right: 28px;
    .cfm-btn {
      margin-top: 15px;
    }
  }
  .top-content {
    width: 100%;
    height: 20px;
    text-align: left;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 3px;
    line-height: 20px;
    .closeicon {
      float: right;
      color: gray;
      margin-right: 2px;
      cursor: pointer;
    }
    .backModeicon {
      float: left;
      margin-right: 2px;
      cursor: pointer;
    }
  }
  .input-content {
    width: 100%;
    height: 46px;
    input {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      border: none;
      outline: none;
      font-size: 16px;
      padding-left: 20px;
      letter-spacing: 1px;
      background-color: rgb(243, 240, 240);
    }
    input:focus {
      outline: 1.5px solid rgb(54, 98, 236);
      background-color: rgb(223, 222, 222);
      border: none;
    }
  }
  .phone-login {
    width: 100%;
    height: 46px;
    margin-top: 15px;
    border-radius: 10px;
    .olinput {
      width: 55%;
      margin-top: 15px;
      float: left;
    }
    .get-ol {
      width: 40%;
      height: 100%;
      float: right;
      margin-top: 15px;
      border-radius: 10px;
      font-size: 16px;
      line-height: 46px;
      font-weight: 600;
      border: 1px solid rgb(173, 173, 173);
      cursor: pointer;
    }
    .get-ol:hover {
      border: 1px solid rgb(145, 145, 145);
      box-shadow: 0px 0px 1px 1px rgb(228, 228, 228) inset;
    }
  }
  .cfm-btn {
    width: 100%;
    height: 46px;
    background-color: rgb(54, 98, 236);
    border-radius: 10px;
    margin-top: 74px;
    color: white;
    text-align: center;
    line-height: 46px;
    font-size: 16px;
    letter-spacing: 10px;
    cursor: pointer;
  }
  .cfm-btn:hover {
    background-color: rgb(80, 122, 252);
  }
  .password-log {
    width: 85px;
    height: 30px;
    margin: 15px auto 0;
    line-height: 30px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(54, 98, 236);
    cursor: pointer;
  }
  .password-log:hover {
    background-color: rgb(243, 240, 240);
    color: rgb(80, 122, 252);
  }
  .Login-QRcode {
    height: 400px;
    width: 360px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -180px;
    border-radius: 30px;
    padding-left: 28px;
    padding-right: 28px;
    .QR-border {
      width: 100%;
      height: 320px;
      padding: 10px;
      border-radius: 20px;
      border: 1px solid rgb(236, 236, 236);
      margin-top: 15px;
    }
    .QR-item {
      width: 100%;
      height: 300px;
      margin-left: -6.5px;
      background: url("@assets/image/QR.png") no-repeat;
      background-size: cover;
    }
  }
}
</style>

