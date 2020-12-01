import http from '../http/index'
import qs from 'qs'
export default {
  goLogin(data:any) {
    return http({
      method: 'post',
      url: '/front/user/login',
      data: qs.stringify(data)
    })
  }
}