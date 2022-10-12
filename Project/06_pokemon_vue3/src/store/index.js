import { createStore } from 'vuex'
import layout from '@/store/modules/layout/index'
import fetched from '@/store/modules/fetched/index'
import user from '@/store/modules/user/index'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    layout,
    user,
    fetched
  }
})
