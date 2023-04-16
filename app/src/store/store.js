import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        data: require('../data/file.json'),
        searchTerm: '',
        sortOrder: '',
        sortColumn: ''
    },
    mutations: {
        updateSearchTerm(state, payload) {
            state.searchTerm = payload;
            localStorage.setItem('searchTerm', payload);
        },
        setSortOrder(state, payload) {
            state.sortOrder = payload.sortOrder;
            state.sortColumn = payload.sortColumn;
            localStorage.setItem('sortOrder', state.sortOrder);
            localStorage.setItem('sortColumn', state.sortColumn);
        },
        sortData(state) {
            state.data.sort((a, b) => {
                const valueA = getValueByColumn(a, state.sortColumn);
                const valueB = getValueByColumn(b, state.sortColumn);
                let compareResult;
                if (typeof valueA === 'string' && typeof valueB === 'string') {
                    compareResult = valueA && valueB ? valueA.localeCompare(valueB, 'en', { numeric: true }) : 0;
                } else {
                    compareResult = valueA - valueB;
                }
                return state.sortOrder === 'asc' ? compareResult : -compareResult;
            });
        },
        sortDataByTotalScore(state, payload, direct) {
            if(direct) {
                console.log(direct)
            }
            state.sortColumn = 'Score'
            if (state.sortOrder === 'asc') {
                state.data = payload.data.sort((a, b) => {
                    return (
                        payload.getters.calculateTotalScore(a.subjects) -
                        payload.getters.calculateTotalScore(b.subjects)
                    );
                });
                state.sortOrder = 'desc';
            } else {
                state.data = payload.data.sort((a, b) => {
                    return (
                        payload.getters.calculateTotalScore(b.subjects) -
                        payload.getters.calculateTotalScore(a.subjects)
                    );
                });
                state.sortOrder = 'asc';
            }
            localStorage.setItem('sortColumn', state.sortColumn);
            localStorage.setItem('sortOrder', state.sortOrder);
        },
        sortDataByPercentage(state, payload) {
            console.log(state, payload)
            state.sortColumn = 'Procent'
            if (state.sortOrder === 'asc') {
                state.data = payload.data.sort((a, b) => {
                    return (
                        payload.getters.calculateTotalScore(a.subjects) -
                        payload.getters.calculateTotalScore(b.subjects)
                    );
                });
                state.sortOrder = 'desc';
            } else {
                state.data = payload.data.sort((a, b) => {
                    return (
                        payload.getters.calculateTotalScore(b.subjects) -
                        payload.getters.calculateTotalScore(a.subjects)
                    );
                });
                state.sortOrder = 'asc';
            }
            localStorage.setItem('sortColumn', state.sortColumn);
            localStorage.setItem('sortOrder', state.sortOrder);
        }
    },
    actions: {
        sortData({ commit }) {
            commit('sortData');
        }
    },
    getters: {
        sortedDataSumm(state) {
            if (state.sortOrder === 'asc') {
                return state.data.sort((a, b) => {
                    return (
                        state.getters.calculateTotalScore(a.subjects) -
                        state.getters.calculateTotalScore(b.subjects)
                    );
                });
            } else {
                return state.data.sort((a, b) => {
                    return (
                        state.getters.calculateTotalScore(b.subjects) -
                        state.getters.calculateTotalScore(a.subjects)
                    );
                });
            }
        },
        sortedDataProcent(state) {
            if (state.sortOrder === 'asc') {
                return state.data.sort((a, b) => {
                    return (
                        state.getters.getProcent(state.getters.calculateTotalScore(a.subjects)) -
                        state.getters.getProcent(state.getters.calculateTotalScore(b.subjects))
                    );
                });
            } else {
                return state.data.sort((a, b) => {
                    return (
                        state.getters.getProcent(state.getters.calculateTotalScore(b.subjects)) -
                        state.getters.getProcent(state.getters.calculateTotalScore(a.subjects))
                    );
                });
            }
        },
        getProcent: (state) => (score) => {
            let percent = (score / 15) * 100;
            return Math.floor(percent);
        },
        getDataArray: state => {
            return state.data;
        },
        calculateTotalScore: (state) => (array) => {
            let totalScore = 0;
            for (let i = 0; i < array.length; i++) {
                totalScore += parseFloat(array[i].score);
            }
            return totalScore;
        }
    }
});

function getValueByColumn(item, column) {
    if (column === 'name') {
        return item.name;
    } else if (column === 'date') {
        return item.date;
    } else {
        const subject = item.subjects.find(subj => subj.subject === column);
        return subject ? parseFloat(subject.score) : 0;
    }
}

export default store;
