import Index from '../pages/index.vue'
import List from '../pages/list.vue'
import Record from '../pages/record.vue'
import Friends from '../pages/friends.vue'
import Mine from '../pages/mine.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/record',
    name: 'Record',
    component: Record
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  }
]

export default routes
