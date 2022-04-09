<template>
  <div id="BTNList">
    <div class="BTNList" :class="skinMode">
      <a-button type="default" shape="round" size="large" class="btnListItem" @click="onCancel">
        <!-- <template #icon>
          <DownloadOutlined />
        </template> -->
        {{BtnString.cnlText}}
      </a-button>
      <a-button type="primary" shape="round" size="large" class="btnListItem" @click="onConfirm">
        <!-- <template #icon>
          <DownloadOutlined />
        </template> -->
        {{BtnString.cfmText}}
      </a-button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props: {
        BtnStaticConfig: Object,
    },
    computed: {
        ...mapGetters('publicState', ['Language', 'skinMode']),
        BtnString() {
            return {
                cfmText: this.$t(this.BtnStaticConfig.cfmText, this.Language),
                cnlText: this.$t(this.BtnStaticConfig.cnlText, this.Language),
            }
        }
    },
    methods: {
      onCancel() {
        this.$emit('onCancel');
      },
      onConfirm() {
        this.$emit('onConfirm');
      }
    }
    
}
</script>

<style lang="less">
#BTNList {
  .BTNList {
    .btnListItem {
      letter-spacing: 2px;
      margin-left: 20px;
    }
  }
  .default {
    background-color: rgba(235, 235, 235, 0) !important;
  }
  .darkMode {
    background-color: rgba(88, 88, 88, 0) !important;
    .ant-btn-default {
      background-color: rgb(105, 105, 105);
      color: white;
      border: 1px solid rgb(88, 88, 88);
    }
    .ant-btn-default:hover {
      background-color: rgb(139, 139, 139);
    }
  }
}
</style>

