import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js'

import coachesList from '../data/coachesList.js';
export default {
    namespaced: true,
    state() {
        return {
            coaches: coachesList
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters

}