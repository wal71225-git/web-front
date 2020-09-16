module.exports = {
  router: {
    linkActiveClass: 'active', // 组件高亮激活类名
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
            path: '', // 默认子路由
            name: 'home',
            component: resolve(__dirname, 'pages/home/')
          },
          {
            path: '/login',
            name: 'login',
            component: resolve(__dirname, 'pages/login/')
          },
          {
            path: '/reginster',
            name: 'reginster',
            component: resolve(__dirname, 'pages/login/')
          },
          {
            path: '/profile/:username',
            name: 'profile',
            component: resolve(__dirname, 'pages/profile/')
          },
          {
            path: '/setting',
            name: 'setting',
            component: resolve(__dirname, 'pages/setting/')
          },
          {
            path: '/editor',
            name: 'editor',
            component: resolve(__dirname, 'pages/editor/')
          },
          {
            path: '/article/:slug',
            name: 'article',
            component: resolve(__dirname, 'pages/article/')
          }
        ]
       }
      ])
    }
  },
  plugins: [
    '~/plugins/request.js',
    '~/plugins/day.js'
  ]
}