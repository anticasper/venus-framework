import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
  },
  actions: {
    setUserInfo(context, payload) {
      this.commit('setUser', payload)
    },
  },
  modules: {},
})
