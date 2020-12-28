import http from '../http/index'
export default {
  getAdList(params: any) { // 获取全部广告信息
    return http({
      method: 'get',
      url: '/front/ad/getAdList',
      params
    })
  }
}
