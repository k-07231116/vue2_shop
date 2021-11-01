import Vue from 'vue'
import VueX from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(VueX)
const state = {
  username:'', //登陆用户名
  cartCount:0 //购物车数量
}
const store = new VueX.Store({
state,
mutations,
actions
})
export default store