const ToDoList = resolve => require.ensure([], () => resolve(require('../../views/todo/list.vue')), 'todoList')

export default [
  { path: 'list', name: 'todoList', meta: { title: '任务列表' }, component: ToDoList }
]
