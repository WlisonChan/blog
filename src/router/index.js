import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Technology from '@/components/Technology'
import Index from '@/components/Index'
import Paper from '@/components/Paper'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Technology',
    name: 'Technology',
    component: Technology,
    children: [
      {
        path: '/paper/:id',
        name: 'paper',
        component: Paper
      }
    ]
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  mode: history,
  history: createWebHashHistory(),
  routes
})

export default router
