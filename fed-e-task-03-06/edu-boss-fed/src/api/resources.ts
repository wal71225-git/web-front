import http from '../http/index'
export default {
  getResourcePages(data: any) {
    return http({
      method: 'post',
      url: '/boss/resource/getResourcePages',
      data
    })
  },
  getResourcesCategories() {
    return http({
      method: 'get',
      url: '/boss/resource/category/getAll'
    })
  }
}
