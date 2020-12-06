import axios from 'axios'
import store from '../store'
import { Message } from 'element-ui'
import router from '@/router'
import qs from 'qs'
// 跳转登录页面
const redirectLogin = () => {
  router.push({ name: 'login', query: { redirect: router.currentRoute.fullPath } })
}
const request = axios.create({
  // 配置选项
  // baseURL,
  // timeout
})
// 请求拦截器
request.interceptors.request.use(config => {
  const { user } = store.state
  if (user && user.access_token) {
    config.headers.Authorization = user.access_token
  }
  // 设置请求头
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
  // 所有请求成功的进入这里，也就是200+的状态码
  return response
}, async error => { // 超出2XX的进入这里
  /**
   * 响应错误大体分为三种
   * 1.请求发出去了收到响应，但不是2XX的响应
   * 2.请求发出去没有收到响应，例如请求超时
   * 3.设置请求时设置错误，或者触发了一些错误
   */
  console.log('error=====', error.response)
  if (error.response) { // 请求发出去收到响应
    // 请求发出去收到响应的大概有以下几种  400 401 403  404 500+
    const { status } = error.response
    if (status === 400) {
      Message.error('请求参数错误')
    } else if (status === 401) { // token无效
      if (!store.state.user) { // 如果本地数据没有用户信息条状登录页面
        // 跳转登录
        redirectLogin()
        return Promise.reject(error)
      }
      // 如果是token失效，重新刷新token,并重新发起请求
      try {
        // 为了防止刷新token接口同样失败，重新创建请求对象
        const { data } = await axios.create()({
          method: 'post',
          url: '/front/user/refresh_token',
          data: qs.stringify({ refreshtoken: store.state.user.refresh_token })
        })
        // 成功了把刷新拿到的用户信息，放到本地信息
        store.commit('setUser', data.content)
        // 从error中获取请求的配置信息，重新发起请求
        return request(error.config)
      } catch (error) {
        // 失败调到登录页面
        redirectLogin()
        return Promise.reject(error)
      }
    } else if (status === 403) {
      Message.error('暂无权限，请联系管理员')
    } else if (status === 404) {
      Message.error('请求资源不存在')
    } else if (status >= 500) {
      Message.error('服务端错误,请联系管理员')
    } else {
      Message.error('系统异常，请练下管理员')
    }
  } else if (error.request) { // 请求发出去未收到响应
    Message.error('请求超时')
  } else { // 设置请求时错误
    Message.error(`请求失败：${error.message}`)
  }
  return Promise.reject(error)
})
export default request
