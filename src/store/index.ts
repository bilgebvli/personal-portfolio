import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoading: true,
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value;
    },
  },
  actions: {},
  modules: {},
});
