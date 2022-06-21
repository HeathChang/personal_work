import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/static/css/main.scss'
import Util from '@/common/utils/Util'
import ConstCode from '@/common/constants/ConstCode'
import BaseInput from '@/components/common/layouts/BaseInput'

import {
	modalAlertNames,
	modalNames
} from './components/common/globalComponent'
import dayjs from 'dayjs'
import lodash from 'lodash'
import { VuelidatePlugin } from '@vuelidate/core'
import axios from 'axios'

import '@/common/utils/nativeCall'

import CommonSvc from '@/common/service/CommonSvc'

/** swiper **/
import SwiperCore, {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y, Autoplay ])
/** swiper **/

import VueScrollTo from 'vue-scrollto'

import { ObserveVisibility } from 'vue-observe-visibility'

const app = createApp(App)

app.config.globalProperties.$Util = Util
app.config.globalProperties.$ConstCode = ConstCode
app.config.globalProperties.$dayjs = dayjs
app.config.globalProperties.$_ = lodash
app.config.globalProperties.axios = axios

app.config.globalProperties.$CommonSvc = CommonSvc

app.config.globalProperties.$modalAlertNames = modalAlertNames
app.config.globalProperties.$modalNames = modalNames

// 전역 컴포넌트 등록
for ( let key in modalAlertNames ) {
	app.component(modalAlertNames[key].name, modalAlertNames[key])
}
for ( let key in modalNames ) {
	app.component(modalNames[key].name, modalNames[key])
}

app.component(Swiper.name, Swiper)
app.component(SwiperSlide.name, SwiperSlide)
app.component(BaseInput)

app.directive('observe-visibility', {
	beforeMount : (el, binding, vnode) => {
		vnode.context = binding.instance
		ObserveVisibility.bind(el, binding, vnode)
	},
	updated : ObserveVisibility.update,
	unmounted : ObserveVisibility.unbind
})

app.directive('show-modal-alert', {
	mounted : el => {
		setTimeout(() => {
			el.classList.add('on')
		}, 20)
	},
	beforeUnmount : el => {
		setTimeout(() => {
			el.classList.remove('on')
		}, 20)
	}
})

app.directive('show-modal', {
	mounted : el => {
		setTimeout(() => {
			el.classList.remove('off')
		}, 20)
	},
	beforeUnmount : el => {
		setTimeout(() => {
			el.classList.add('off')
		}, 20)
	}
})

app.use(VueScrollTo, {
	container : 'body',
	duration : 500,
	easing : 'ease',
	offset : 0,
	force : true,
	cancelable : true,
	onStart : false,
	onDone : false,
	onCancel : false,
	x : false,
	y : true
}).use(store).use(router).use(VuelidatePlugin).mount('#app')
