import App from '../../App.vue'
// require.ensure 是webpack的特殊语法，用来设置code-split point  最后面的参数'index' 意思是代码分块（chunk）
const Index = resolve => require.ensure([], () => resolve(require('../../views/index.vue')), 'index')
import ToDo from './todo.js'

export const appRouter = [ // 定义我们的主应用路由
  { path: '', name: 'index', component: Index },
  {
    path: '/todo',  // 路径
    component: App, // 页面使用的模板
    children: [ // 子路由
      ...ToDo
    ]
  }
]

export const routes = [ // 将路由暴露出去
  ...appRouter
]
