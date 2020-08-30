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
    const result =  await request.getProducts();
    console.log('result', result)
    context.commit('setProducts', (result as any).data)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}