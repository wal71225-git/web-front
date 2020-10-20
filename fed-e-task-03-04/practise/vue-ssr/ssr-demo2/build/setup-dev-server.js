const path = require('path') 
const fs = require('fs')
const chokidar = require('chokidar')
module.exports = (server, cb) => {
  let ready 
  // 声明一个promise 并把resolve赋值给ready,等promise完成，就可以执行render渲染了
  const onReady = new Promise(r => ready = r)
  // 监视构建 --> 更新render
  let serverBundle, template, clientManifest
  const update = ()=> { // 更显渲染render
    if(serverBundle && template && clientManifest) {
      // 执行完成，通知render可以渲染
      ready()
      // 更新server中的render
      cb(serverBundle,template, template)
    }
  }
  // 监听template构建 --> 调用update --> 更新render渲染器
  // 获取模板文件地址，并同步读取
    const templatePath = path.resolve(__dirname, '../index.template.html')
    template = fs.readFileSync(templatePath, 'utf-8')
    update()
    // fs监听方法有fs.watch  fs.watchFile, chokidar封装了这两个方法
    chokidar.watch(templatePath).on('change', () => {
      template = fs.readFileSync(templatePath, 'utf-8')
      update()
    })
  // 监听serverBundle构建 --> 调用update --> 更新render渲染器
  // 监听clientManifest构建 --> 调用update --> 更新render渲染器

  return onReady
}