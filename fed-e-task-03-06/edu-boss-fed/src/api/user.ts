import http from '../http/index'
import qs from 'qs'
interface User {
  phone: String,
  password: String
}
export default {
  goLogin(data: User) {
    return http({
      method: 'post',
      url: '/front/user/login',
      data: qs.stringify(data)
    })
  }
}
