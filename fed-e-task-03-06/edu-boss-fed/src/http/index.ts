import axios from 'axios'
import store from '../store'
const request = axios.create({
  // 配置选项
  // baseURL,
  // timeout
})
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
export default request
