<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon_setting"></span>预约维修服务</li>
        <li><span class="icon_7day"></span>7天无理由退货</li>
        <li><span class="icon_15day"></span>15天免费退换</li>
        <li><span class="icon_post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service-bar',
  props: {},
  components: {},

  created() {},
  mounted() {},

  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang='scss' >
@import './../assets/scss/mixin.scss';
.service {
  background-color: #fff;
  padding: 33px 0;
  color: #666;
  font-size: 16px;
  li {
    display: inline-block;
    width: 24.9%;
    text-align: center;
    border-right: 1px solid #e5e5e5;
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 8px;
    }
    .icon_setting {
      @include bgImg(20px, 20px, '/imgs/icon-setting.png');
    }
    .icon_7day {
      @include bgImg(20px, 20px, '/imgs/icon-7day.png');
    }
    .icon_15day {
      @include bgImg(20px, 20px, '/imgs/icon-15day.png');
    }
    .icon_post {
      @include bgImg(20px, 20px, '/imgs/icon-post.png');
    }
  }
}
</style>