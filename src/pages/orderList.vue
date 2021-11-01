<template>
  <div class="order-list">
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="order" v-for="(order, index) in orderList" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{ order.createTime }}
                <span>|</span>
                {{ order.receiverName }}
                <span>|</span>
                订单号： {{ order.orderNo }}
                <span>|</span>
                {{ order.paymentTypeDesc }}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{ order.payment }}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div
                  class="good-list"
                  v-for="(item, i) in order.orderItemVoList"
                  :key="i"
                >
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt="" />
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{ item.productName }}</div>
                    <div class="p-money">
                      {{ item.currentUnitPrice }} X {{ item.quantity }}元
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-state fr">
                <a
                  href="javascript:;"
                  @click="goPay(order.status, order.orderNo)"
                  >{{ order.statusDesc }}</a
                >
              </div>
            </div>
          </div>
          <no-data v-if="orderList.length === 0"></no-data>
        </div>
      </div>
      <!-- 分页器 -->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 30]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
      <div
        class="scroll-more"
        v-infinite-scroll="scrollMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="410"
      >
        <!-- <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" /> -->
      </div>
    </div>
  </div>
</template>
<script>
import NoData from './../components/NoData'
import infiniteScroll from 'vue-infinite-scroll'
import OrderHeader from './../components/OrderHeader'
export default {
  name: 'order-list',
  components: {
    OrderHeader,
    NoData
  },
  //局部指令
  directives: { infiniteScroll },
  data() {
    return {
      busy: false, //滚动加载，是否触发
      total: 0,
      orderList: [],
      currentPage: 1,
      pageNum: 1,
      pageSize: 10
    }
  },
  mounted() {
    this.getOrderList()
  },
  methods: {
    //加载更多
    scrollMore() {
      this.busy = true
      setTimeout(() => {
        this.pageNum++
        this.getList()
      }, 500)
    },
    //每页数据改变
    handleSizeChange(value) {
      this.pageSize = value
      this.getOrderList(this.pageNum, value)
    },
    //当前页改变
    handleCurrentChange(value) {
      this.pageNum = value
      this.getOrderList(value)
    },

    //去支付
    goPay(status, orderNo) {
      if (status == 10) {
        //未支付
        this.$router.push({
          path: '/order/pay',
          query: {
            orderNo
          }
        })
      } else if (status == 20) {
        //已支付
      }
    },
    //获取订单列表
    getOrderList(pageNum = this.pageNum, pageSize = this.pageSize) {
      this.axios
        .get('/orders', {
          params: {
            pageNum,
            pageSize
          }
        })
        .then((res) => {
          this.orderList = this.orderList.concat(res.list)
          this.total = res.total
        })
    },
    //专门给scrollMore使用
    getList() {
      this.axios
        .get('/orders', {
          params: {
            pageNum: this.pageNum,
            pageSize: 10
          }
        })
        .then((res) => {
          this.orderList = this.orderList.concat(res.list)
          //是否有下一页
          if (res.hasNextPage) {
            this.busy = false
          } else {
            this.busy = true
          }
        })
    }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;
    .order-box {
      .order {
        @include border();
        background-color: $colorG;
        margin-bottom: 31px;
        &:last-child {
          margin-bottom: 0;
        }
        .order-title {
          @include height(74px);
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;
          .item-info {
            span {
              margin: 0 9px;
            }
          }
          .money {
            font-size: 26px;
            color: $colorB;
          }
          .fr {
            float: right;
          }
          .fl {
            float: left;
          }
        }
        .order-content {
          padding: 0 43px;
          .good-box {
            width: 88%;
            .good-list {
              display: flex;
              align-items: center;
              height: 145px;
              .good-img {
                width: 112px;
                img {
                  width: 100%;
                }
              }
              .good-name {
                font-size: 20px;
                color: $colorB;
              }
            }
          }
          .good-state {
            @include height(145px);
            font-size: 20px;
            color: $colorA;
            a {
              color: $colorA;
            }
          }
        }
      }
      .pagination {
        text-align: right;
      }
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #ff6600;
      }
      .el-button--primary {
        background-color: #ff6600;
        border-color: #ff6600;
      }
      .load-more,
      .scroll-more {
        text-align: center;
      }
    }
    .block {
      text-align: center;
    }
  }
}
</style>