<template>
  <div class="nav-bar" :class="{ is_fixed: isFixed }">
    <div class="container">
      <div class="pro_title">{{ title }}</div>
      <div class="pro-param">
        <a href="">概述</a><span>|</span><a href="">参数</a><span>|</span>
        <a href="">用户评价</a><span>|</span>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    title: String
  },
  components: {},

  created() {},
  mounted() {
    window.addEventListener('scroll', this.initHeight)
  },

  data() {
    return {
      isFixed: false
    }
  },
  methods: {
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      this.isFixed = scrollTop > 152 ? true : false
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>

<style lang='scss' scoped>
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.nav-bar {
  width: $min-width;
  margin: auto;
  height: 70px;
  line-height: 70px;
  border: 1px solid $colorH;
  background-color: $colorG;
  &.is_fixed {
    position: fixed;
    top: 0;
    width: $min-width;
    box-shadow: 0 5px 5px $colorE;
  }
  .container {
    width: $min-width;
    //
    @include flex();
    .pro_title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .pro-param {
      font-size: $fontJ;
      color: $colorC;
      // font-weight: bold;
      span {
        padding: 0 10px;
      }
    }
  }
}
</style>