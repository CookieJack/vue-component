<template>
  <div id="app">
    <mx-button type="primary">主要</mx-button>
    <mx-button type="success" round plain>成功</mx-button>
    <mx-button type="info" plain disabled @click="handleClick">提示</mx-button>
    <mx-button type="warning" circle>警告</mx-button>
    <mx-button type="danger" :loading="loading" @click="handleClick">危险</mx-button>
    <mx-transfer :left-side-data="leftSideData" :right-side-data="rightSideData" :value.sync="value" :titles="['未勾选', '已勾选']"></mx-transfer>
  </div>
</template>

<script>
import { TransferOptionsMixin } from '@/mixins/OptionsMixin'

export default {
  name: 'App',
  mixins: [TransferOptionsMixin],
  data() {
    return {
      loading: false,
      value: []
    }
  },
  methods: {
    handleClick(e) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3 * 1000)
    }
  }
}
</script>