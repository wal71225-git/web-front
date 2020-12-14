import http from '../http/index'
export default {
  getRolePages(data: any) {
    return http({
      method: 'post',
      url: '/boss/role/getRolePages',
      data
    })
  },
  saveOrUpdate(data: any) {
    return http({
      method: 'post',
      url: '/boss/role/saveOrUpdate',
      data
    })
  },
  getRoleById(roleId: string | number) {
    return http({
      method: 'get',
      url: `/boss/role/${roleId}`
    })
  }
}
