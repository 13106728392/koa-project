import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import tableList from '../views/table'
import cancellation from '../views/cancellation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/tableList',
    name: 'tableList',
    component: tableList
  },
  {
    path: '/cancellation',
    name: 'cancellation',
    component: cancellation
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
