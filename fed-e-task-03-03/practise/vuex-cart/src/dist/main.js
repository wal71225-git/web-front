"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var store_1 = require("./store");
require("babel-polyfill");
// import { Breadcrumb, BreadcrumbItem } from 'element-ui';
var element_ui_1 = require("element-ui");
// Vue.use(Breadcrumb);
// Vue.use(BreadcrumbItem);
vue_1["default"].use(element_ui_1["default"]);
vue_1["default"].config.productionTip = false;
new vue_1["default"]({
    router: router_1["default"],
    store: store_1["default"],
    render: function (h) { return h(App_vue_1["default"]); }
}).$mount("#app");
