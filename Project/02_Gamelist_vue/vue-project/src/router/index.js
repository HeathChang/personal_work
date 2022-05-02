import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'view-index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/home',
    name: 'view-index',
    component: () => import('../views/Home/Index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
