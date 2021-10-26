<template>
  <div id="app">
    <mx-button type="primary">主要</mx-button>
    <mx-button type="success" round plain>成功</mx-button>
    <mx-button type="info" plain disabled @click="handleClick">提示</mx-button>
    <mx-button type="warning" circle>警告</mx-button>
    <mx-button type="danger" :loading="loading" @click="handleClick">危险hrdcghjdyjdyjdydty</mx-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    handleClick(e) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3*1000);
    }
  }
}
</script>

<style lang="scss" scoped>
#app{
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
}
</style>
