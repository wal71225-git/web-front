import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user') || 'null')
  },
  mutations: {
    setUser(state, payload) {
      // 把登录信息存到vuex，数据共享
      state.user = JSON.parse(payload)
      // 数据持久化，把登录信息存到本地存储
      localStorage.setItem('user', payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
