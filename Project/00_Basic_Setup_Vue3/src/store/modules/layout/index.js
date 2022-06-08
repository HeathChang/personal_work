const routeState = {
  isHeader: false,
  titleName: '',
  isBack: false,
  isNav: false
}

export const state = {
  isLoading: false,
  isOn: true,
  isFocus: false,
  modalAlertComponents: [],
  modalComponents: [],
  routeLayout: {
    ...routeState
  }
}
export const getters = {
  getIsLoading: state => {
    return state.isLoading
  },
  getIsOn: state => {
    return state.isOn
  },
  getIsFocus: state => {
    return state.isFocus
  },
  getModalAlertComponents: state => {
    return state.modalAlertComponents
  },
  getModalComponents: state => {
    return state.modalComponents
  },
  getRouteLayout: state => {
    return state.routeLayout
  }
}
export const mutations = {
  setIsLoading(state, { isLoading }) {
    state.isLoading = isLoading
  },
  setIsOn(state, { isOn = true }) {
    state.isOn = isOn
  },
  setIsFocus(state, { isFocus = false }) {
    state.isFocus = isFocus
  },
  setModalAlertComponents(state, { modalAlertComponents }) {
    state.modalAlertComponents = modalAlertComponents
  },
  setModalComponents(state, { modalComponents }) {
    state.modalComponents = modalComponents
  },
  setRouteLayout(
    state,
    {
      isHeader = undefined,
      titleName = undefined,
      isBack = undefined,
      isNav = undefined
    }
  ) {
    if (isHeader !== undefined) state.routeLayout.isHeader = isHeader
    if (titleName !== undefined) state.routeLayout.titleName = titleName
    if (isBack !== undefined) state.routeLayout.isBack = isBack
    if (isNav !== undefined) state.routeLayout.isNav = isNav
  },
  setTitleName(state, { titleName }) {
    state.routeLayout.titleName = titleName
  }
}
export const actions = {
  updateIsLoading({ commit }, { isLoading = false }) {
    commit('setIsLoading', { isLoading })
  },
  pushModalAlertComponent({ state, commit }, payload) {
    state.modalAlertComponents.push(payload)
    commit('setModalAlertComponents', {
      modalAlertComponents: state.modalAlertComponents
    })
  },
  removeAllModalAlertComponent({ commit }) {
    commit('setModalAlertComponents', {
      modalAlertComponents: []
    })
  },
  closeModalAlertComponent({ state, commit }, { index = 0 }) {
    state.modalAlertComponents.splice(index, 1)
    commit('setModalAlertComponents', {
      modalAlertComponents: state.modalAlertComponents
    })
  },
  pushModalComponent({ state, commit }, payload) {
    state.modalComponents.push(payload)
    commit('setModalComponents', {
      modalComponents: state.modalComponents
    })
  },
  removeAllModalComponent({ commit }) {
    commit('setModalComponents', {
      modalComponents: []
    })
  },
  closeModalComponent({ state, commit }, { index = 0 }) {
    state.modalComponents.splice(index, 1)
    commit('setModalComponents', {
      modalComponents: state.modalComponents
    })
  },
  updateRouteLayout({ commit }, payload) {
    commit('setRouteLayout', payload)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
