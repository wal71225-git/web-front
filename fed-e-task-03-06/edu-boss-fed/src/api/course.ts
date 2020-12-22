import http from '../http/index'
export default {
  getQueryCourses(data: any) { // 分页查询课程信息
    return http({
      method: 'post',
      url: '/boss/course/getQueryCourses',
      data
    })
  },
  changeState(params: any) { // 课程上下线
    return http({
      method: 'get',
      url: '/boss/course/changeState',
      params
    })
  },
  upLoad(data: any, onUploadProgress: any) { // 上传图片
    return http({
      method: 'post',
      url: '/boss/course/upload',
      data,
      onUploadProgress
    })
  },
  saveOrUpdateCourse(data: any) { // 保存和更新课程
    return http({
      method: 'post',
      url: '/boss/course/saveOrUpdateCourse',
      data
    })
  }
}
