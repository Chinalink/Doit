import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index.js'  // 引用路由
import './assets/css/global.css'  // 引用全局样式
// import './style/animate.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
