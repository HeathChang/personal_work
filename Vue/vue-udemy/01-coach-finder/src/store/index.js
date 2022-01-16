import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js'

const store = createStore({
    modules: {
        coaches: coachesModule
        //K V 
    },
    state() {
        return {
            userId: new Date().toISOString()
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
})

export default store;