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
  },
  getUserPages(data: any) { // 分页查询用户
    return http({
      method: 'post',
      url: '/boss/user/getUserPages',
      data
    })
  },
  enableUser(userId: string | number) { // 启用用户
    return http({
      method: 'get',
      url: '/boss/user/enableUser',
      params: {
        userId
      }
    })
  }
}
