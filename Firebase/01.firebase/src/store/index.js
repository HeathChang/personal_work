import Vue from 'vue'
import Vuex from 'vuex'
import layout from "@/store/modules/layout";
import user from "@/store/modules/user";



Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    layout,
    user
  }
})
