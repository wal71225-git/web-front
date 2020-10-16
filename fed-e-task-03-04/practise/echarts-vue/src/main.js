import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import myCharts from './common/my-echarts'
// Vue.use(myCharts)
import echarts from 'echarts'
// Vue.use(echarts)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
