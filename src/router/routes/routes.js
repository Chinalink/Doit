import App from '../../App.vue'
const Index = resolve => require.ensure([], () => resolve(require('../../views/index.vue')), 'index')
import ToDo from './todo.js'

export const appRouter = [ // 定义我们的主应用路由
  { path: '', name: 'index', component: Index },
  {
    path: '/todo',
    component: App,
    children: [
      ...ToDo
    ]
  }
]

export const routes = [ // 将路由暴露出去
  ...appRouter
]
