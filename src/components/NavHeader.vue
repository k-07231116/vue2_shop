<template>
  <div class="header">
    <div class="nav_topbar">
      <!-- 顶部导航栏 -->
      <div class="container">
        <div class="topbar_menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar_user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="javascript:;" @click="toOrderList">我的订单</a>
          <a href="javascript:;" class="my_cart" @click="goToCart">
            <span class="icon_cart"></span>
            购物车{{ cartCount }}
          </a>
        </div>
      </div>
    </div>
    <div class="nav_header">
      <div class="container">
        <div class="header_logo">
          <a href="/#/index"></a>
        </div>
        <div class="header_menu">
          <div class="item_menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item in phoneList" :key="item.id">
                  <a :href="`/#/product/${item.id}`" target="_blank">
                    <div class="pro_img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro_name">{{ item.name }}</div>
                    <div class="pro_price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item_menu">
            <span>RedMi红米</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javascript;" target="_blank">
                    <div class="pro_img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85e44ea2405ff8414148bbde7446b137.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro_name">小米C9</div>
                    <div class="pro_price">1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript;" target="_blank">
                    <div class="pro_img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85e44ea2405ff8414148bbde7446b137.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro_name">小米C9</div>
                    <div class="pro_price">1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript;" target="_blank">
                    <div class="pro_img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85e44ea2405ff8414148bbde7446b137.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro_name">小米C9</div>
                    <div class="pro_price">1799</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item_menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javascript;" target="_blank">
                    <div class="pro_img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85e44ea2405ff8414148bbde7446b137.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro_name">小米C9</div>
                    <div class="pro_price">1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript;" target="_blank">
                    <div class="pro_img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85e44ea2405ff8414148bbde7446b137.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro_name">小米C9</div>
                    <div class="pro_price">1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript;" target="_blank">
                    <div class="pro_img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85e44ea2405ff8414148bbde7446b137.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro_name">小米C9</div>
                    <div class="pro_price">1799</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header_search">
          <div class="wrapper">
            <input type="text" name="" id="" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'nav-header',
  props: {},
  components: {},

  created() {},
  filters: {
    currency(val) {
      if (!val) return '0.00'
      return `￥${val.toFixed(2)}元`
    }
  },
  mounted() {
    this.getProductList()
    if (this.$route.params?.from === 'login') {
      this.getCartCount()
    }
    this.getUser()
  },

  data() {
    return {
      phoneList: []
    }
  },
  computed: {
    ...mapState(['username', 'cartCount'])
  },
  methods: {
    toOrderList() {
      this.$router.push('/order/list')
    },

    getUser() {
      this.axios.get('/user').then((res) => {
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res)
      })
    },
    // 登录
    login() {
      this.$router.push('/login')
    },
    //退出
    logout() {
      this.axios.post('/user/logout').then((res) => {
        this.$message.success('退出成功')
        //清空
        this.$cookie.set('userId', '', { expire: '-1' })
        this.$store.dispatch('saveUserName', '')
        this.$store.dispatch('saveCartCount', 0)

        // this.$store.dispatch('saveCartCount', res)
      })
    },
    goToCart() {
      this.$router.push('/cart')
    },

    //获取手机列表
    getProductList() {
      this.axios
        .get('/products', {
          params: {
            categoryId: '100012'
          }
        })
        .then((res) => {
          console.log('res.list', res.list)
          if (res.list.length > 6) {
            return (this.phoneList = res.list.splice(0, 6))
          }
          this.phoneList = res.list
        })
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/basic.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';

.header {
  .nav_topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container {
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my_cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #fff;
        .icon_cart {
          @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
          margin-right: 4px;

          // display: inline-block;
          // width: 16px;
          // height: 12px;
          // margin-right: 4px;
          // background: url('/imgs/icon-cart-checked.png') no-repeat center;
          // background-size: contain;
        }
      }
    }
  }

  .nav_header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      // display: flex;
      // justify-content: space-between;
      // align-items: center;

      .header_menu {
        display: inline-block;
        // width: 264px;
        padding-left: 209px;
        .item_menu {
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            // height: 220px;
            height: 0px;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            background-color: #fff;
            transition: all 0.5s;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              // height: 0;
              // opacity: 0;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 20px;
              }
              .pro_img {
                height: 137px;
              }
              .pro_name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 7px;
                color: $colorB;
              }
              .pro_price {
                color: $colorA;
              }
              &::before {
                content: ' ';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child::before {
                display: none;
              }
            }
          }
        }
      }
      .header_search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #eee;
          display: flex;
          align-items: center;
          input {
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, '/imgs/icon-search.png');

            // display: inline-block;
            // width: 18px;
            // height: 18px;
            // background: url('/imgs/icon-search.png') no-repeat center;
            // background-size: contain;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>