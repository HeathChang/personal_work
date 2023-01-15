import Vue from 'vue'
import VueRouter from 'vue-router'

import store from "../store";

/**
 * meta (헤더 설정)
 * title:타이틀 (중간)
 * isLogo:로고노출 (좌측 상단)
 * isBack:뒤로 가기 (좌측 상단)
 * isHome:홈으로 가기 (우측 상단)
 */

Vue.use(VueRouter)

//page

const routes = [
    {
        path: '/',
        component: () => import ('@/views/main/index'),
        meta:{
            title:'main-index',
            isLogo:false,
            isBack:false,
            isHome:false
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior:((to, from, savedPosition) => {
        if(savedPosition){
            return savedPosition
        }
        return {x:0,y:0}
    }),
})

router.beforeEach((to, from, next) =>{
    // spinner.activeSpinner(false)
    // const header = to.meta
    // headerControl.setHeader(header.title, header.isLogo, header.isBack, header.isHome)

    next()
    // setTimeout(() => {spinner.deActiveSpinner()}, 500)

})


export default router
