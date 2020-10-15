/**
 * 通用入口
 */
import Vue from 'vue'
import App from './App.vue'
// 导出一个工厂函数,用于创建新的应用程序，router和store实例
export function createApp() {
  const app = new Vue({
    // 根实例简单的渲染应用程序组件。
    render: h => h(App)
  })
  // 返回对象是为了后续，返回router，store等其它对象
  return { app }
}