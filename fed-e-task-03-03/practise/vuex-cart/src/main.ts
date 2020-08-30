import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "babel-polyfill";
// import { Breadcrumb, BreadcrumbItem } from 'element-ui';
import Elementui from 'element-ui';

// Vue.use(Breadcrumb);
// Vue.use(BreadcrumbItem);
Vue.use(Elementui)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
