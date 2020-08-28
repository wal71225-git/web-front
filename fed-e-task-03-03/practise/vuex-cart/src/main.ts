import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Breadcrumb, BreadcrumbItem } from 'element-ui';

Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
