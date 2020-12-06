import http from '../http/index'
import qs from 'qs'
interface User {
  phone: string;
  password: string;
}
export default {
  goLogin(data: User) { // 登录
    return http({
      method: 'post',
      url: '/front/user/login',
      data: qs.stringify(data)
    })
  },
  getUserInfo() { // 获取用户信息
    return http({
      method: 'GET',
      url: '/front/user/getInfo'
    })
  }
}
