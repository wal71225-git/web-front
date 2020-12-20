import http from '../http/index'
export default {
  getQueryCourses(data: any) { // 分页查询课程信息
    return http({
      method: 'post',
      url: '/boss/course/getQueryCourses',
      data
    })
  },
  changeState(params: any) {
    return http({
      method: 'get',
      url: '/boss/course/changeState',
      params
    })
  }
}
