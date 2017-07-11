import Hello from '../pages/Hello.vue'
import List from '../pages/list.vue'
import Record from '../pages/record.vue'
import Friends from '../pages/friends.vue'
import Find from '../pages/find.vue'
import Mine from '../pages/mine.vue'

const routes = [
  {
    path: '/',
    name: 'Record',
    component: Record
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/Hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/find',
    name: 'Find',
    component: Find
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
