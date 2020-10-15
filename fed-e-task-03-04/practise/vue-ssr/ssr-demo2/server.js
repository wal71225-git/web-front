/**
 * 通用web应用启动脚本
 */
const express = require('express')
const Vue = require('vue')
const fs = require('fs')
// 引入打包后的服务端资源
const serverBundle = require('./dist/vue-ssr-server-bundle.json') 
const template = fs.readFileSync('./index.template.html', 'utf-8') 
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const render = require('vue-server-renderer').createBundleRenderer(serverBundle,{
   template, 
   clientManifest 
  })

const server = express()
// 服务使用打包后的地址
server.use('/dist', express.static('./dist'))

server.get('/', (req, res) => {
  render.renderToString({
    title: '拉勾教育', 
    meta: ` <meta name="description" content="拉勾教育"> `
  }, (err, html) => {
    if(err) {
      return res.status(500).end('Internal Server Error.')
    }
    res.setHeader('Content-Type', 'text/html; charset=utf8') 
    console.log(html)
    res.end(html)
  })
})

server.listen(3000, () => { console.log('server running at port 3000.') })