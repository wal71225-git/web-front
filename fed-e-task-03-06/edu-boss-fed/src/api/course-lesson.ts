import http from '../http/index'
export default {
  saveOrUpdate(data: any) { // 保存更新课时
    return http({
      method: 'post',
      url: '/boss/course/lesson/saveOrUpdate',
      data
    })
  }
}
