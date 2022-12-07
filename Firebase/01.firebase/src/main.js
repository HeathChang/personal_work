// SECTION: IMPORT
// PART: 3rd-Party
// import {VuelidatePlugin} from '@vuelidate/core'
import * as firebase from "firebase/firestore";
// PART: self-made
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { db } from '@/common/firebase/firebaseInit'
import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseBadge from './components/ui/BaseBadge.vue'
// PART: Service
import mountSvc from '@/common/service/mountSvc';



// SECTION: PROTOTYPE
Vue.component('base-card', BaseCard)
Vue.component('base-button', BaseButton)
Vue.component('base-badge', BaseBadge)

firebase.collection(db, 'todo')

// PART: Service
Vue.prototype.$mountSvc = mountSvc
Vue.prototype.$store = store

// PART: Utils
Vue.prototype.$db = db

Vue.prototype.$todoCollection = firebase.collection(db, 'todo')


// SECTION: VUE
Vue.config.productionTip = false
new Vue({
    router,
    store,
    // VuelidatePlugin,
    render: h => h(App)
}).$mount('#app')