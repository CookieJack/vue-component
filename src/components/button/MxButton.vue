<template>
  <div
    :class="[
      `mx-button--${type}`,
      plain ? `mx-button-plain--${type}` : '',
      round ? roundClass : '',
      circle ? circleClass : '',
      loading ? `mx-button-loading--${type}` : '',
      disabled ? disabledClass : ''
    ]"
    @click="handleClick"
  >
    <img class="icon-loading" v-if="loading" src="../../assets/loading.gif" />
    <span v-if="loading">加载中</span>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'MxButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      roundClass: 'round',
      circleClass: 'circle',
      disabledClass: 'disabled'
    }
  },
  methods: {
    handleClick() {
      if (this.disabled == true || this.loading == true) {
        return
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/theme-chalk.scss';

$WIDTH_DEFAULT: ($FONT_SIZE_DEFAULT * 5);
$HEIGHT_DEFAULT: ($FONT_SIZE_DEFAULT * 2.5);

@mixin DEFAULT_COLOR($bgcolor, $color){
  background-color: $bgcolor;
  color: $color;
}

@mixin PLAIN_COLOR($bgcolor){
  background-color: white;
  border: 1px solid $bgcolor;
  color: $bgcolor;
}

@mixin LOADING_COLOR($bgcolor){
  width: ($WIDTH_DEFAULT * 1.375);
  transition: width .2s ease-out;
  background-color: rgba($color: $bgcolor, $alpha: 0.4);
  color: white;
  cursor: progress;
  border: none;
  box-shadow: none;
}

@mixin BASIC_CONFIG($bgcolor, $color) {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  @include DEFAULT_COLOR($bgcolor, $color);
  cursor: pointer;
  width: $WIDTH_DEFAULT;
  height: $HEIGHT_DEFAULT;
  user-select: none;
  line-height: ($FONT_SIZE_DEFAULT * 1.5);
  box-shadow: 1px 1px 8px 1px rgba($color: black, $alpha: 0.2);
  transition: width .2s ease-in;
  border: 1px solid $bgcolor;

  &:active {
    box-shadow: 0px 0px 0px 0px rgba($color: black, $alpha: 0.2);
    color: white;
    border: 1px solid $bgcolor;
    background-color: $bgcolor;
  }
}

.mx-button--primary {
  @include BASIC_CONFIG($COLOR_PRIMARY, $FONT_COLOR_WHITE);
}

.mx-button--success {
  @include BASIC_CONFIG($COLOR_SUCCESS, $FONT_COLOR_WHITE);
}

.mx-button--info {
  @include BASIC_CONFIG($COLOR_INFO, $FONT_COLOR_WHITE);
}

.mx-button--warning {
  @include BASIC_CONFIG($COLOR_WARNING, $FONT_COLOR_WHITE);
}

.mx-button--danger {
  @include BASIC_CONFIG($COLOR_DANGER, $FONT_COLOR_WHITE);
}

.mx-button-plain--primary{
  @include PLAIN_COLOR($COLOR_PRIMARY)
}

.mx-button-plain--success{
  @include PLAIN_COLOR($COLOR_SUCCESS)
}

.mx-button-plain--info{
  @include PLAIN_COLOR($COLOR_INFO)
}

.mx-button-plain--warning{
  @include PLAIN_COLOR($COLOR_WARNING)
}

.mx-button-plain--danger{
  @include PLAIN_COLOR($COLOR_DANGER)
}

.mx-button-loading--primary{
  @include LOADING_COLOR($COLOR_PRIMARY);
}

.mx-button-loading--success{
  @include LOADING_COLOR($COLOR_SUCCESS);
}

.mx-button-loading--info{
  @include LOADING_COLOR($COLOR_INFO);
}

.mx-button-loading--warning{
  @include LOADING_COLOR($COLOR_WARNING);
}

.mx-button-loading--danger{
  @include LOADING_COLOR($COLOR_DANGER);
}

.round {
  border-radius: 5px;
}

.circle {
  width: ($FONT_SIZE_DEFAULT * 2.2);
  height: ($FONT_SIZE_DEFAULT * 2.2);
  border-radius: ($FONT_SIZE_DEFAULT * 2.2);
}

.disabled{
  cursor: not-allowed;
  box-shadow: none;
  background-color: rgba($color: gray, $alpha: 0.2);
  &:active {
    box-shadow: none;
    transform: none;
    background-color: rgba($color: gray, $alpha: 0.2);
    color: gray;
  }
}

.icon-loading{
  width: $FONT_SIZE_DEFAULT;
  height: $FONT_SIZE_DEFAULT;
}
</style>