import http from '../http/index'
export default {
  getSectionAndLesson(courseId: string | number) { // 获取课程内容信息
    return http({
      method: 'get',
      url: '/boss/course/section/getSectionAndLesson',
      params: {
        courseId
      }
    })
  },
  saveOrUpdateSection(data: any) { // 保存或更新阶段信息
    return http({
      method: 'post',
      url: '/boss/course/section/saveOrUpdateSection',
      data
    })
  },
  saveOrUpdateLesson(data: any) { // 保存或更新课时信息
    return http({
      method: 'post',
      url: '/boss/course/lesson/saveOrUpdate',
      data
    })
  }
}
