export const state = {
    firstFavorite: -1,
    secondFavorite: -1,
    thirdFavorite: -1,
    fourthFavorite: -1,
    fifthFavorite: -1
}
export const getters = {
    getFirst(state) {
        return state.firstFavorite
    },
}


export const mutations = {
    setFirst(state, {index = -1}) {
        console.log(22, index)
        state.firstFavorite = index
    },
    setSecond(state, {index = -1}) {
        state.secondFavorite = -1
    },
    setThird(state, {index = -1}) {
        state.thirdFavorite = -1
    },
    setFourth(state, {index = -1}) {
        state.fourthFavorite = -1
    },
    setFifth(state, {index = -1}) {
        state.fifthFavorite = -1
    },

}
export const actions = {
    asyncFirst({commit}, {index = -1}) {
        console.log('async', index)
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
