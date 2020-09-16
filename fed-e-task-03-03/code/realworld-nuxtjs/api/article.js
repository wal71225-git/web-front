// import { request } from '@/plugins/request'
import request from '@/api/index'
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
      params
    })
  },
  // 添加点赞
  addFavorite(slug) {
    return request({
      method: 'POST',
      url: `/api/articles/${slug}/favorite`
    })
  },
 // 取消点赞 
  deleteFavorite(slug) {
    return request({
      method: 'DELETE',
      url: `/api/articles/${slug}/favorite`
    })
  }
}
