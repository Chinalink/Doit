import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index.js'  // 引入路由
import './assets/css/global.css'  // 引入全局样式
import './assets/css/animate.css' // 引入css动画

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
