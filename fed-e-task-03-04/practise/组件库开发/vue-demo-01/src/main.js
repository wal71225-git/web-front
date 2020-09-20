import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  data() {
    return {
      title: '根实例 - Root-test'
    }
  },
  methods: {
    handle () {
      console.log(this.title)
    }
  },
}).$mount('#app')
