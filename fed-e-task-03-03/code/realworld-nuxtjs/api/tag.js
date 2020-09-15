import request from '@/utils/request'
export default {
  getTags() {
    return request({
      method: 'get',
      url: '/api/tags'
    })
  }
}