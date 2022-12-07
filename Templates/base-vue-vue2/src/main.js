// SECTION: IMPORT
// PART: 3rd-Party
// import {VuelidatePlugin} from '@vuelidate/core'
// PART: self-made
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// PART: Service
import mountSvc from '@/common/service/mountSvc';



// SECTION: PROTOTYPE
// PART: Service
Vue.prototype.$mountSvc = mountSvc
// PART: Utils



// SECTION: VUE
Vue.config.productionTip = false
new Vue({
    router,
    store,
    // VuelidatePlugin,
    render: h => h(App)
}).$mount('#app')