import axios from 'axios'
export const request = axios.create({
   baseURL: 'https://conduit.productionready.io/'
  // baseURL: 'http://realworld.api.fed.lagounews.com/'
})
// 插件导出函数必须作为 default 成员
// 通过插件机制获取到上下文对象（query、params、req、res、app、store...）
 export default ({ store }) => {
//   // 添加请求拦截器
  // 我们可以在请求拦截器中做一些公共的业务处理，例如统一设置 token
  request.interceptors.request.use(function (config) {
    // // 在发送请求之前做些什么
    const { user } = store.state
    user && user.token && (config.headers.Authorization = `Token ${user.token}`)
    // 必须返回 config 请求配置对象，否则无效
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  });
 }
  // 响应拦截器