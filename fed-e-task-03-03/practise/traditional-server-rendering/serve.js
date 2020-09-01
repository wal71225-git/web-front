const express = require('express')
const fs = require('fs')
const template = require('art-template')
const app = express()

app.get('/', (req, res) => {
    // 1.获取模板内容,同步请求获取html模板数据
    const templateStr = fs.readFileSync('./index.html', 'utf-8')
    // 2.获取数据（模仿从数据库获取数据）
    const data = JSON.parse(fs.readFileSync('./data.json','utf-8'))
    // 3. 渲染：数据 + 模板 = 要返回客户端的页面
    const html = template.render(templateStr, data)
    // 4. 把渲染结果发送客户端
    res.send(html)
})
// 监听服务
app.listen(3000, () => console.log('running...'))