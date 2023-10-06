import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    toasted: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setToast(state, payload) {
      state.toasted = payload
    },
  },
  actions: {
    setUserInfo(context, payload) {
      this.commit('setUser', payload)
    },
    setToasted(context, payload) {
      this.commit('setToast', payload)
    },
  },
  modules: {},
})
