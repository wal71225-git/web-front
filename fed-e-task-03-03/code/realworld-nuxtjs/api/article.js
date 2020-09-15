import request from '@/utils/request'
export default {
  getArticles(params = {}) {
    return request({
      method: 'get',
      url: '/api/articles',
      params
    })
  },
  getYourFeedArticles(params = {}) {
    return request({
      method: 'get',
      url: '/api/articles/feed',
      params,
      headers: {
        auth
      }
    })
  }
}
