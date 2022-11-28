export const state = {
  accessToken: null,
  userData: null,
  user_id: null,
  user_pw: null,
  isSaveID: false,
  isAutoLogin: false
}
export const getters = {
  getAccessToken(state) {
    state.accessToken = state.accessToken || localStorage.accessToken
    return state.accessToken
  },
  getUserData(state) {
    state.userData = localStorage.userData || '{}'
    return JSON.parse(state.userData)
  },
  getUserID(state) {
    state.user_id = state.user_id || localStorage.user_id
    return state.user_id
  },
  getUserPW(state) {
    state.user_pw = state.user_pw || localStorage.user_pw
    return state.user_pw
  },
  getIsSaveID(state) {
    state.isSaveID = state.isSaveID || localStorage.isSaveID
    return state.isSaveID
  },
  getIsAutoLogin(state) {
    state.isAutoLogin = state.isAutoLogin || localStorage.isAutoLogin
    return state.isAutoLogin
  }
}
export const mutations = {
  setAccessToken(state, { accessToken = '' }) {
    state.accessToken = accessToken
    localStorage.accessToken = accessToken
  },
  setUserData(state, { userData = {} }) {
    state.userData = userData
    localStorage.userData = JSON.stringify(userData)
  },
  setUserPW(state, { user_pw = '' }) {
    state.user_pw = user_pw
    localStorage.user_pw = user_pw
  },
  setIsAutoLogin(state, { isAutoLogin = false }) {
    state.isAutoLogin = isAutoLogin
    localStorage.isAutoLogin = isAutoLogin
  },
  storeLogin(
    state,
    {
      userData = {},
      user_id = '',
      user_pw = '',
      isSaveID = false,
      isAutoLogin = false
    }
  ) {
    state.userData = userData
    state.user_id = user_id
    state.user_pw = user_pw
    state.isSaveID = isSaveID
    state.isAutoLogin = isAutoLogin
    localStorage.userData = userData
    localStorage.user_id = user_id
    localStorage.user_pw = user_pw
    localStorage.isSaveID = isSaveID
    localStorage.isAutoLogin = isAutoLogin
  },
  storeLogout(state) {
    state.accessToken = null
    state.userData = null
    state.user_pw = null
    state.isAutoLogin = false
    delete localStorage.accessToken
    delete localStorage.userData
    delete localStorage.user_pw
    delete localStorage.isAutoLogin
    // location.reload()
  }
}
export const actions = {
  async signIn({ commit }, payload) {
    commit('storeLogin', payload)
  },
  async signOut({ commit }) {
    location.replace('/')
    commit('storeLogout')
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
