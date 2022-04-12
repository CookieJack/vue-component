<template>
  <div class="t-container">
    <side-list :title="titles[0]" :data="leftSideData"></side-list>
    <button class="t-center-btn" @click.stop.prevent="handleClick('pull')">⇠</button>
    <button class="t-center-btn" @click.stop.prevent="handleClick('push')">⇢</button>
    <side-list :title="titles[1]" :data="rightSideData"></side-list>
  </div>
</template>

<script>
import SideList from './components/SideList'

export default {
  name: 'MxTransfer',
  components: {
    SideList
  },
  props: {
    value: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    },
    leftSideData: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    },
    rightSideData: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    },
    titles: {
      type: Array,
      required: false,
      default: function () {
        return ['列表1', '列表2']
      }
    }
  },
  methods: {
    handleClick(type, event) {
      switch (type) {
        case 'pull':
          this.rightSideData
            .filter(item => item.checked)
            .forEach(item => {
              this.leftSideData.push(item)
              this.rightSideData.splice(this.rightSideData.indexOf(item), 1)
            })
          break
        case 'push':
          this.leftSideData
            .filter(item => item.checked)
            .forEach(item => {
              this.rightSideData.push(item)
              this.leftSideData.splice(this.leftSideData.indexOf(item), 1)
            })
          break
        default:
          break
      }
    }
  },
  watch: {
    rightSideData: {
      handler: function (val) {
        if (val) {
          this.$emit(
            'update:value',
            val.map(item => item.key)
          )
        }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.t-container {
  padding: 0.625rem;
  max-height: 18rem;
  min-height: 18rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: stretch;
  gap: 0.625rem;

  .t-center-btn {
    width: 3.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    background-color: transparent;
    border: 1px solid #f5f7fa;
    border-radius: 5%;
    align-self: center;
    flex: 0 1 3.5rem;

    &:active {
      background-color: #f5f7fa;
    }
  }
}
</style>