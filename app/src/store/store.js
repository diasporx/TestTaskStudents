import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        data: require('../data/file.json')
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getDataArray: state => {
            return state.data;
        }
    }
});

export default store;
