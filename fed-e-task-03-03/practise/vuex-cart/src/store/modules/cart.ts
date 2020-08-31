const state = {
  cartProducts: []
}
const getters = {
  // 统计购物车总数量
  totalCount (state:any) {
    return state.cartProducts.reduce((sum:number,product:any) => sum + product.count, 0)
  },
  // 统计购物车总价格
  totalPrice (state:any) {
    return state.cartProducts.reduce((sum:number,product:any) => sum + product.totalPrice, 0)
  }
}
const mutations = {
  addToCart(state:any, product:any) { 
    // 1.cartProducts如果没有该商品，把该商品添加到数组，并添加属性count,isChecked,totalPrice
    // 2.cartProducts有该商品，让商品的数量加1，计算小计
    const prod = state.cartProducts.find((item: any) => item.id === product.id)
    if (prod) {
      prod.count++
      prod.isChecked = true
      prod.totalPrice =  prod.count * prod.price
    } else { 
      state.cartProducts.push({
        ...product,
        count: 1,
        isChecked: true,
        totalPrice: product.price
      })
    }
  },
  deleteFromCart (state:any, productId:number) {
    const index = state.cartProducts.findIndex( (item:any) => item.id === productId)
    index !== -1 && state.cartProducts.splice(index, 1)
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