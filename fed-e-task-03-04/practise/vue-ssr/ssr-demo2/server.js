/**
 * 通用web应用启动脚本
 */
const express = require('express')
const Vue = require('vue')
const fs = require('fs')
const server = express()
// 服务使用打包后的地址
 server.use('/dist', express.static('./dist'))
const isProd = process.env.NODE_ENV === 'production'
const { createBundleRenderer } = require('vue-server-renderer')
// // 构建开发模式前
// // 引入打包后的服务端资源
// const serverBundle = require('./dist/vue-ssr-server-bundle.json') 
// const template = fs.readFileSync('./index.template.html', 'utf-8') 
// const clientManifest = require('./dist/vue-ssr-client-manifest.json')
// const render = require('vue-server-renderer').createBundleRenderer(serverBundle,{
//    template, 
//    clientManifest 
//   })
// 构建开发模式后
let render
let onReady 
if( isProd ) {
  const serverBundle = require('./dist/vue-ssr-server-bundle.json') 
  const template = fs.readFileSync('./index.template.html', 'utf-8') 
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  render = createBundleRenderer(serverBundle,{
   template, 
   clientManifest 
  })
} else {
  // 开发模式 打包构建（客户端 + 服务端） -> 创建渲染器
  // 设置开发模式下服务  传入server实例和回调函数 
  onReady = setDevServer(server, (serverBundle, template, clientManifest) => {
    // 创建或更新渲染器
    render = createBundleRenderer(serverBundle,{
      template, 
      clientManifest 
     })
  })
}
 

 // 构建开发模式前
// server.get('/', (req, res) => {
//   render.renderToString({
//     title: '拉勾教育', 
//     meta: ` <meta name="description" content="拉勾教育"> `
//   }, (err, html) => {
//     if(err) {
//       return res.status(500).end('Internal Server Error.')
//     }
//     res.setHeader('Content-Type', 'text/html; charset=utf8') 
//     res.end(html)
//   })
// })

// 构建开发模式后
// 因为开发模式，需要重新渲染render,不是同步的，需要把请求函数抽成出来

const rederer = (req, res) => { // 此函数是路由匹配成功后执行的函数
  render.renderToString({
    title: '拉勾教育', 
    meta: ` <meta name="description" content="拉勾教育"> `
  }, (err, html) => {
    if(err) {
      return res.status(500).end('Internal Server Error.')
    }
    res.setHeader('Content-Type', 'text/html; charset=utf8') 
    res.end(html)
  })
}
// 生产环境直接渲染，开发环境有渲染器后再进行渲染
server.get('/', isProd ? rederer : async (req, res) => {
  // 开发环境等有了render渲染器后，再调用rederer方法渲染
  await onReady
  rederer()
})

server.listen(3000, () => { console.log('server running at port 3000.') })