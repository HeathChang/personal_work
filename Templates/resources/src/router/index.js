import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Util from '@/common/utils/Util'

const updateRouteLayout = async meta => {
  await store.dispatch('layout/updateRouteLayout', {
    isHeader: meta.isHeader,
    titleName: meta.titleName,
    isBack: meta.isBack,
    isNav: meta.isNav
  })
}

const routes = [
  {
    path: '/',
    beforeEnter: function(to, from, next) {
      if (Util.isApp()) {
        Util.nativeGetRegistrationKey('nativeSetDeviceInfo')
      } else {
        next({ path: '/main', query: { isRoot: 1 } })
      }
    }
  },
  {
    path: '/main',
    name: 'MainIndex',
    component: () => import('@/views/main/index.vue'),
    meta: {
      isHeader: true,
      isNav: true,
      isBack: false,
      titleName: 'Home'
    }
  },
  {
    path: '/dropdown1',
    name: 'dropdown1',
    component: () => import('@/components/views/dropdown/index.vue'),
    meta: {
      isHeader: false,
      isNav: false,
      isBack: false,
      titleName: 'dropdown1'
    }
  },
  {
    path: '/swiper1',
    name: 'swiper1',
    component: () => import('@/components/views/swiper/index.vue'),
    meta: {
      isHeader: false,
      isNav: false,
      isBack: false,
      titleName: 'swiper1'
    }
  },
  {
    path: '/main/form',
    name: 'MainForm',
    component: () => import('@/views/main/form'),
    meta: {
      isHeader: true,
      isNav: true,
      isBack: true,
      titleName: 'Form'
    }
  },
  {
    path: '/notice',
    name: 'NoticeIndex',
    component: () => import('@/views/notice/index'),
    meta: {
      isHeader: true,
      isNav: false,
      isBack: true,
      titleName: 'Notice'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     if (savedPosition) {
    //       resolve(savedPosition)
    //     } else {
    //       resolve({ left: 0, top: 0 })
    //     }
    //   }, 500)
    // })
  }
})

window.routeQuery = ''
window.path = ''

router.beforeEach(async (to, from, next) => {
  let meta = to.meta
  await updateRouteLayout(meta)
  window.routeQuery = to.query
  window.path = to.path
  next()
})

export default router
