import request from '@/utils/request'
export default {
  getArticles(params = {}) {
    return request({
      method: 'get',
      url: '/api/articles',
      params
    })
  }
}