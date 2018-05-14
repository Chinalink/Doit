import Vue from 'vue'
import Router from 'vue-router'
import {routes} from './routes/routes.js'

Vue.use(Router)

const RouterConfig = {
  routes
}
export const router = new Router(RouterConfig)
