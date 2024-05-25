import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from '../views/Detail.vue'
import Create from '../views/Create.vue'
import Tag from '../views/Tag.vue'
import Realtime from '../views/Realtime.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/posts/:id',
    name:'detail',
    component:Detail,
    props:true
  },
  {
    path:'/post/create',
    name:'create',
    component:Create
  },
  {
    path:'/tags/:tag',
    name:'tag',
    component:Tag,
    props:true
  },
  {
    path:'/realtime',
    component:Realtime
  }
 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
