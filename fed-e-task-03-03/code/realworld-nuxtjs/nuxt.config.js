module.exports = {
  router: {
    // 自定义路由规则
    extendRoutes(routes, resolve) {
      // 清除 Nuxt.js 基于 pages 目录默认生成的路由表规则
      routes.splice(0)
      // 开始自定义路由
      routes.push(...[
        {
        path: '/',
        component: resolve(__dirname, 'pages/layout/'),
        children: [
          {
            path: '',
            name: 'home',
            component: resolve(__dirname, 'pages/home/')
          }
        ]
       }
      ])
    }
  }
}