import Vue from 'vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store';
import App from './App.vue'
import './plugin'
import {
  Message,
  Loading
} from 'element-ui'
// import env from './env'
let loadingRequestCount = 0,
  loadingInstance = null;
// console.log('env', );
//根据前端的跨域方式做调整
// axios.defaults.baseURL = env.baseURL;
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 5 * 1000
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  showLoading(config)

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  setTimeout(() => {
    hideLoading()
  }, 200);
  let res = response.data
  let path = location.hash
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    if (path != '#/index') {
      window.location.href = '/#/login'
      return Promise.reject(res.msg)
    }
  } else {
    return Promise.reject(res.msg)
  }
}, error => {
  let res = error.response
  Message.error(res.data.message)
  return Promise.reject(res)
});
//显示loading
const showLoading = () => {
  if (loadingRequestCount === 0) {
    loadingInstance = Loading.service({
      target: '#app'
    });
  }
  loadingRequestCount++
}
// 隐藏loading
const hideLoading = () => {
  if (loadingRequestCount < 0) return
  loadingRequestCount--
  if (loadingRequestCount === 0) {
    Vue.nextTick(() => { //以服务的方式调用的 Loading 需要异步关闭
      loadingInstance.close();
    });
  }
}
Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
