import http from '../http/index'
export default {
  getAaliyunImagUploadAddressAdnAuth() { // 获取阿里云图片上传凭证
    return http({
      method: 'get',
      url: '/boss/course/upload/aliyunImagUploadAddressAdnAuth.json'
    })
  },
  getAliyunVideoUploadAddressAdnAuth(params: any) { // 获取阿里云视频上传凭证
    return http({
      method: 'get',
      url: '/boss/course/upload/aliyunVideoUploadAddressAdnAuth.json',
      params
    })
  },
  aliyunTransCode(data: any) { // 阿里云转码请求
    return http({
      method: 'post',
      url: '/boss/course/upload/aliyunTransCode.json',
      data
    })
  },
  getAliyunTransCodePercent(lessonId: string | number) { // 获取阿里云转码进度
    return http({
      method: 'get',
      url: '/boss/course/upload/aliyunTransCodePercent.json',
      params: {
        lessonId
      }
    })
  }
}
