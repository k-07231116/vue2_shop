<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米CC9</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-2.png" alt="" />小米8 青春版</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-3.jpg" alt="" />Redmi K20 Pro</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-4.jpg" alt="" />移动4G+专区</a
                    >
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="" id="">
                      <img
                        src="/imgs/item-box-1.png"
                        alt=""
                      />小米CC美图定制版</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米8
                      屏幕指纹版</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />Redmi K20</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米移动
                      电话卡</a
                    >
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.jpg" alt="" />小米9</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                  <li>
                    <a href="" id=""
                      ><img src="/imgs/item-box-1.png" alt="" />小米9</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptions" class="swiper-contain">
          <swiper-slide v-for="item in sliderList" :key="item.id">
            <a :href="`/#/product/${item.id}`">
              <img v-lazy="item.src" alt="" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a href="" id="" v-for="item in adsList" :key="item.adsId">
          <img v-lazy="item.src" alt="" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="" />
        </a>
      </div>
      <div class="product-box">
        <div class="container">
          <h2>手机</h2>
          <div class="wrapper">
            <div class="banner-left">
              <a href="/#/product/35"
                ><img src="/imgs/mix-alpha.jpg" alt=""
              /></a>
            </div>
            <div class="list-box">
              <div class="list">
                <div
                  class="item"
                  v-for="(item, j) in phoneList[0]"
                  :key="item.id"
                >
                  <span :class="{ 'new-pro': j % 2 == 0 }">新品</span>
                  <div class="item-img">
                    <img :src="item.mainImage" alt="" />
                  </div>
                  <div class="item-info">
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.subtitle }}</p>
                    <p class="price" @click="addCart(item.id)">
                      {{ item.price }}元
                    </p>
                  </div>
                </div>
              </div>
              <div class="list">
                <div
                  class="item"
                  v-for="(item, j) in phoneList[1]"
                  :key="item.id"
                >
                  <span :class="{ 'new-pro': j % 2 == 0 }">新品</span>
                  <div class="item-img">
                    <img :src="item.mainImage" alt="" />
                  </div>
                  <div class="item-info">
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.subtitle }}</p>
                    <p class="price">{{ item.price }}元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      :showModal="showModal"
      @submit="goToCart"
      @cancel="showModal = false"
    >
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import Modal from '../components/Modal'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  props: {},
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
    Modal
  },
  created() {},
  mounted() {
    this.init()
  },

  data() {
    return {
      showModal: false,
      swiperOptions: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      adsList: [
        { adsId: '1', src: '/imgs/ads/ads-1.png' },
        { adsId: '2', src: '/imgs/ads/ads-2.jpg' },
        { adsId: '3', src: '/imgs/ads/ads-3.png' },
        { adsId: '4', src: '/imgs/ads/ads-4.jpg' }
      ],
      sliderList: [
        {
          id: '42',
          src: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '43',
          src: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '44',
          src: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '45',
          src: '/imgs/slider/slide-4.jpg'
        }
      ],
      phoneList: []
    }
  },
  methods: {
    //查看购物车
    goToCart() {
      this.$router.push('/cart')
    },
    //
    submit() {
      this.showModal = false
    },
    //初始化
    init() {
      this.axios
        .get('/products', {
          params: {
            categoryId: 100012,
            pageSize: 8
          }
        })
        .then((res) => {
          console.log('res1123', res)
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
        })
    },
    addCart(productId) {
      this.axios
        .post('/carts', {
          productId,
          selected: true
        })
        .then((res) => {
          this.showModal = true
          this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
        })
        .catch((err) => {
          this.showModal = true
        })
    }
  }
}
</script>

<style lang='scss' scoped>
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/basic.scss';
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background: #55585a7a;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
            display: block;
            &::after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: '';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
            }
          }
          &:hover {
            background: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
                a {
                  color: $colorB;
                  font-size: 14px;
                }
                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
    }
    .swiper-contain {
      height: 451px;
      .swiper-button-prev {
        position: absolute;
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    margin-top: 14px;
    margin-bottom: 30px;
    @include flex();
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 10px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                width: 100%;
                height: 195px;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                  content: ' ';
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
