const routeState = {
	isHeader : false,
	titleName : '',
	isBack : false,
	isNav : false,
	isFooter : false
}

export const state = {
	isLoading : false,
	modalComponents : [],
	isFocus : false,
	routeLayout : {
		...routeState
	}
}

export const getters = {
	getIsLoading : state => state.isLoading,
	getModalComponents : state => state.modalComponents,
	getIsFocus : state => state.isFocus,
	getRouteLayout : state => state.routeLayout
}

export const mutations = {
	setIsLoading(state, { isLoading }) {
		state.isLoading = isLoading
	},
	setModalComponents(state, { modalComponents }) {
		state.modalComponents = modalComponents
	},
	setIsFocus(state, { isFocus = false }) {
		state.isFocus = isFocus
	},
	setRouteLayout(state, {
		isHeader = undefined,
		titleName = undefined,
		isBack = undefined,
		isNav = undefined,
		isFooter = undefined
	}) {
		if ( titleName !== undefined ) state.titleName = titleName
		if ( isHeader !== undefined ) state.routeLayout = isHeader
		if ( isBack !== undefined ) state.isBack = isBack
		if ( isNav !== undefined ) state.isNav = isNav
		if ( isFooter !== undefined ) state.isFooter = isFooter
	}
}

export const actions = {
	updateIsLoading({ commit }, { isLoading = false }) {
		commit('setIsLoading', { isLoading })
	},
	updateModalComponent({ state, commit }, payload) {
		state.modalComponents.push(payload)
		commit('setModalComponent', {
			modalComponents : state.modalComponents
		})
	},
	removeModalComponent({ state, commit }, { index = 0 }) {
		state.modalComponents.splice(index, 1)
		commit('setModalComponent', {
			modalComponents : state.modalComponents
		})
	},
	updateRouteLayout({ commit }, payload) {
		commit('setRouteLayout', payload)
	}
}

export default {
	namespaced : true,
	state, getters, mutations, actions
}


