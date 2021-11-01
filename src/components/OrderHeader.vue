<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header_logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>{{ title }}<slot name="tip"></slot></h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{ username }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'order-header',
  props: {
    title: String
  },
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  computed: {
    ...mapState(['username'])
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.order-header {
  padding: 30px 0;
  border-bottom: 2px solid #ff6600;
  .header_logo {
    float: left;
  }
  .title,
  .username {
    display: inline-block;
    height: 50px;
    line-height: 50px;
  }
  .title {
    font-size: 28px;
    float: left;
    color: #333;
    margin-left: 54px;
    span {
      font-size: 14px;
      margin-left: 17px;
      color: #999;
    }
  }
  .username {
    float: right;
    a {
      color: #666;
    }
  }
}
</style>