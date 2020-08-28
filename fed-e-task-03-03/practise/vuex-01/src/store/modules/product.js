const state = {
  products: [{
    id: 1,
    title: 'ipone11',
    price: 8000
  },
  {
    id: 2,
    title: 'ipone12',
    price: 11000
  }
  ]
}
const getters = {}
const mutations = {
  setProducts (state, repload) {
    state.products = repload
  }
}
const actions = {}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
