import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import cart from './modules/cart'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
    message: 'hello vuex'
  },
  getters: {
    reversMsg (state) {
      return state.message.split('').reverse().join('')
    }
  },
  mutations: {
    addCount (state, repload) {
      state.count += repload // 增加数量
    }
  },
  actions: {
    asyncAddCount (context, payload) {
      setTimeout(() => { // 模拟异步调用
        // commit 第一个参数是mutations的方法，第二个是自定义参数
        context.commit('addCount', payload)
      }, 2000)
    }
  },
  modules: {
    product,
    cart
  }
})
