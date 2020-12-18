import http from '../http/index'
export default {
  getAllRoles() {
    return http({
      method: 'get',
      url: '/boss/role/all'
    })
  },
  getRolesWithUserPermission(userId: string | number) { // 获取所有角色，并标记当前用户是否拥有该角色
    return http({
      method: 'get',
      url: '/boss/role/getRolesWithUserPermission',
      params: {
        userId
      }
    })
  },
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
  },
  getRoleMenus(roleId: string | number) { // 获取角色拥有的菜单
    return http({
      method: 'get',
      url: '/boss/menu/getRoleMenus',
      params: {
        roleId
      }
    })
  },
  saveRoleMenus(data: any) {
    return http({
      method: 'post',
      url: '/boss/menu/allocateRoleMenus',
      data
    })
  },
  allocateUserRoles(data: any) { // 给用户分配角色
    return http({
      method: 'post',
      url: '/boss/role/allocateUserRoles',
      data
    })
  }
}
