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
  }
}
