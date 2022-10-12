export const state = {
	isValid: false
}
export const getters = {
	getIsValid(state) {
		return state.isValid
	},

}
export const mutations = {
	setIsValid(state, { isValid = false }) {
		state.isValid = isValid
	}
}
export const actions = {

}
export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
