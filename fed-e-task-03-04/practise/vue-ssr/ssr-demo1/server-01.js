// ssr与服务器集成
//import Vue from 'vue'
const Vue = require('vue')
// 第 1 步：创建一个 Vue 实例
const app = new Vue({
  template: `<div>{{ message }}</div>`,
  data: { 
    message: "Hello World"
  }
})
// 第 2 步：创建一个 renderer
const renderer = require("vue-server-renderer").createRenderer();
// 第 3 步：将 Vue 实例渲染为 HTML
renderer.renderToString(app, (err,html) => {
  if (err) throw err; 
  console.log(html);
  // <div data-server-rendered="true">Hello World</div>
  // data-server-rendered="true" 是用来判断客户端接管服务端来请求
})
// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise： renderer .renderToString(app) .then((html) => { console.log(html); }).catch((err) => { console.error(err); });