// 使用页面模板
// import Vue from 'vue'
// 引入插件
const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./index.teamplate.html', 'utf-8')
})
const context = {
  title: 'hello',
  meta: `
    <meta http-equiv="charset" content="utf-8">
    <meta http-equiv="expires" content="31 Dec 2008">
  `
}
// 创建服务请求
server.get('*', (req, res) => {
  // 创建vue实例
  const app = new Vue({
    data: {
        url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  // 渲染vue实例
  renderer.renderToString(app, context,(err, html) => {
    //服务端错误抛出异常
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})
// 启动服务
server.listen(8080);