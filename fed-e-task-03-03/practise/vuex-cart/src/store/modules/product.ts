import request from '../../api/index';

const state = {
  products: []
}
const getters = {}
const mutations = {
  setProducts(state:any,productList:any) {
    state.products = productList
  }
}
const actions = {
  async getProducts (context:any) {
    const { data } = await request.getProducts;
    context.commit('setProducts', data)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}