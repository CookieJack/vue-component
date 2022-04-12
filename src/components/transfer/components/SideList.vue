<template>
  <div class="t-s-container">
    <div class="t-s-title">
      <input :ref="title" class="t-s-check-box" type="checkbox" :name="title" :id="title" @click="handleClick('title')" />
      <label class="t-s-label" :for="title">{{ title }}</label>
      <span class="t-s-counter">{{ checkedTotal }}/{{ this.data.length }}</span>
    </div>
    <ul v-if="data.length > 0" class="t-s-list">
      <template v-for="(item, index) in data">
        <li class="t-s-list-item" :key="index" @change="handleClick('list-item', $event, item, index)">
          <input
            class="t-s-check-box"
            type="checkbox"
            :checked="item.checked"
            :disabled="item.disabled"
            :name="title + item.key + index"
            :id="title + item.key + index"
          />
          <label class="t-s-label" :class="item.disabled ? 't-s-disabled' : ''" :for="title + item.key + index" :disabled="item.disabled">{{
            item.label
          }}</label>
        </li>
      </template>
    </ul>
    <span v-else class="no-data">无数据</span>
  </div>
</template>

<script>
export default {
  name: 'SideList',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    count: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    }
  },
  computed: {
    checkedTotal() {
      return this.data.filter(item => item.checked).length
    }
  },
  methods: {
    handleClick(type, event, value, key) {
      switch (type) {
        case 'list-item':
          value.checked = event.target.checked
          break
        case 'title':
          if (this.$refs[this.title].checked) {
            this.data.map(item => {
              if (item.disabled !== true) {
                item.checked = true
              } else {
                item.checked = false
              }
            })
          } else {
            this.data.map(item => {
              item.checked = false
            })
          }
          break
        default:
          break
      }
    }
  },
  watch: {
    data: {
      handler: function (val) {
        this.$nextTick(() => {
          if (val.length > 0 && val.filter(item => item.checked).length > 0 && val.filter(item => item.checked).length < val.length) {
            this.$refs[this.title].indeterminate = true
            this.$refs[this.title].disabled = false
          } else if (val.length > 0 && val.filter(item => item.checked).length == val.length) {
            this.$refs[this.title].indeterminate = false
            this.$refs[this.title].checked = true
            this.$refs[this.title].disabled = false
          } else if (val.length > 0 && val.filter(item => item.checked).length === 0 && val.filter(item => item.checked).length < val.length) {
            this.$refs[this.title].indeterminate = false
            this.$refs[this.title].checked = false
            this.$refs[this.title].disabled = false
          } else if (val.length === 0) {
            this.$refs[this.title].indeterminate = false
            this.$refs[this.title].checked = false
            this.$refs[this.title].disabled = true
          }
        })
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.t-s-container {
  flex: 1 0 12.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  align-items: stretch;
  gap: 0.625rem;
  border: 1px solid rgb(235, 238, 245);
  border-radius: 3%;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.1);

  .t-s-title {
    background-color: rgb(245, 247, 250);
    min-height: 2.5rem;
    padding: 0 0.625rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: stretch;
    align-items: center;
    gap: 0.625rem;

    .t-s-label {
      font-size: 1.1rem;
      flex: 1 0 auto;
      user-select: none;
    }

    .t-s-counter {
      display: flex;
      flex-flow: row nowrap;
      user-select: none;
      font-size: 0.75rem;
      color: #909399;
    }
  }

  .t-s-list {
    padding: 0 0.625rem;
    list-style: none;
    overflow-y: scroll;

    .t-s-list-item {
      line-height: 1.875rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: stretch;
      align-items: center;
      gap: 0.625rem;

      label {
        font-size: 1rem;
        flex: 1 0 auto;
        user-select: none;

        &:hover {
          cursor: pointer;
          background-color: #f5f7fa;
          color: darkgray;
        }
      }
    }
  }

  .no-data {
    align-self: center;
    font-size: 0.75rem;
    color: #909399;
    user-select: none;
  }

  .t-s-disabled {
    color: #c0c4cc;
  }
}
</style>