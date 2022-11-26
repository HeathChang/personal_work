export const state = {
    firstFavorite: -1,
    secondFavorite: -1,
    thirdFavorite: -1,
    fourthFavorite: -1,
    fifthFavorite: -1
}
export const getters = {
    getFirst(state) {
        if(state.firstFavorite === -1) return;
        return state.firstFavorite
    },
    getSecond(state) {
        if(state.secondFavorite === -1) return;
        return state.secondFavorite
    },
    getThird(state) {
        if(state.thirdFavorite === -1) return;
        return state.thirdFavorite
    },
    getForth(state) {
        if(state.fourthFavorite === -1) return;
        return state.fourthFavorite
    },
    getFifth(state) {
        if(state.fifthFavorite === -1) return;
        return state.fifthFavorite
    },
}


export const mutations = {
    setFirst(state, {index = -1}) {
        state.firstFavorite = index
    },
    setSecond(state, {index = -1}) {
        state.secondFavorite = index
    },
    setThird(state, {index = -1}) {
        state.thirdFavorite = index
    },
    setFourth(state, {index = -1}) {
        state.fourthFavorite = index
    },
    setFifth(state, {index = -1}) {
        state.fifthFavorite = index
    },

}
export const actions = {
    asyncFirst({commit}, {index = -1}) {
        commit('setFirst', {index})
    },
    asyncSecond({commit}, {index = -1}) {
        commit('setSecond', {index})
    },
    asyncThird({commit}, {index = -1}) {
        commit('setThird', {index})
    },
    asyncFourth({commit}, {index = -1}) {
        commit('setFourth', {index})
    },
    asyncFifth({commit}, {index = -1}) {
        commit('setFifth', {index})
    },
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
