<template>
  <div class="footer">
    <div class="footer_logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer_link">
      <a href="">河畔一角主页</a><span>|</span> <a href="">Vue全栈课程</a
      ><span>|</span> <a href="">河畔一角主页</a><span>|</span>
      <a href="">河畔一角主页</a>
    </div>
    <div class="copyright">
      W3School
      简体中文版提供的内容仅用于培训和测试，不保证内容的正确性。通过使用本站内容随之而来的风险与本站无关。版权所有，保留一切权利。
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer',
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

<style lang='scss' scoped>
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer_logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer_link {
    a {
      color: #999;
      display: inline-block;
    }
    span {
      margin: 0 20px;
    }
  }
  .copyright {
    margin-top: 10px;
  }
}
</style>