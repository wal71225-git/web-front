import request from '@/api/index'
export default {
  getTags() {
    return request({
      method: 'get',
      url: '/api/tags'
    })
  }
}