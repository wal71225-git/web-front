// 服务器集成
// import Vue from 'vue'
// 引入插件
const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

// 创建服务请求
server.get('*', (req, res) => {
  // 创建vue实例
  const app = new Vue({
    data: {
        url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })
  // 渲染vue实例
  renderer.renderToString(app, (err, html) => {
    //服务端错误抛出异常
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    // 请求成功渲染页面
    res.end(`
      <!DOCTYPE html>
      <html lang="zh">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})
// 启动服务
server.listen(8080);