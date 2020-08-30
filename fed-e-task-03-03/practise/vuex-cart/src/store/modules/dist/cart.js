"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var state = {
    cartProducts: []
};
var getters = {};
var mutations = {
    addTtoCart: function (state, product) {
        // 1.cartProducts如果没有该商品，把该商品添加到数组，并添加属性count,isChecked,totalPrice
        // 2.cartProducts有该商品，让商品的数量加1，计算小计
        var prod = state.cartProducts.find(function (item) { return item.id === product.id; });
        if (prod) {
            prod.count++;
            prod.isChecked = true;
            prod.totalPrice = prod.count * prod.price;
        }
        else {
            state.cartProducts.push(__assign(__assign({}, product), { count: 1, isChecked: true, totalPrice: product.price }));
        }
    }
};
var actions = {};
exports["default"] = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
};
