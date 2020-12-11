import http from '../http/index'
export default {
  getAllMenus() {
    return http({
      method: 'get',
      url: '/boss/menu/getAll'
    })
  },
  menuAddOrUpdate(data: any) { // 登录
    return http({
      method: 'post',
      url: '/boss/menu/saveOrUpdate',
      data
    })
  },
  getParentMenuList(id: string | number = -1) { // 获取父级菜单
    return http({
      method: 'get',
      url: '/boss/menu/getEditMenuInfo',
      params: {
        id
      }
    })
  },
  deleteMenu(id: number) {
    return http({
      method: 'delete',
      url: `/boss/menu/${id}`
    })
  }
}
