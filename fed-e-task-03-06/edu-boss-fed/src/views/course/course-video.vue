<template>
  <div class="course-video">
      <el-card>
        <div slot="header">
          <div>课程：{{ $route.query.courseName }}</div>
          <div>课时：{{ $route.query.lessonName }}</div>
        </div>
         <el-form label-width="40px">
          <el-form-item label="视频">
            <input
              ref="video"
              type="file"
            >
          </el-form-item>
          <el-form-item label="封面">
            <input
              ref="image"
              type="file"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="authUpload"
            >开始上传</el-button>
            <el-button>返回</el-button>
          </el-form-item>
        </el-form>
      </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
/** eslint-diabled */
export default Vue.extend({
  name: 'CourseVideo',
  props: {
    sectionId: {
      type: [String, Number],
      default: ''
    },
    lessonId: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      uploader: null,
      videoId: null,
      imageUrl: '',
      fileName: ''
    }
  },
  created() {
    (this as any).initUploader()
  },
  computed: {
    video() {
      console.log('refs', this.$refs)
      return (this.$refs as any).video
    },
    image() {
      return (this.$refs as any).image
    }
  },
  methods: {
    initUploader() {
      const _this = this as any
      _this.uploader = new window.AliyunUpload.Vod({
        // 阿里账号ID，必须有值 ，值的来源https://help.aliyun.com/knowledge_detail/37196.html
        userId: 1618139964448548,
        // 上传到点播的地域， 默认值为'cn-shanghai',//eu-central-1,ap-southeast-1
        region: 'cn-shanghai',
        // 分片大小默认1M，不能小于100K
        partSize: 1048576,
        // 并行上传分片个数，默认5
        parallel: 5,
        // 网络原因失败时，重新上传次数，默认为3
        retryCount: 3,
        // 网络原因失败时，重新上传间隔时间，默认为2秒
        retryDuration: 2,
        // 开始上传
        onUploadstarted: async (uploadInfo: any) => {
          // 1. 通过后端获取文件上传凭证
          // 判断是否图片，如果是图片获取图片凭证，否则获取视频凭证
          let uploadAuth
          if (uploadInfo.isImage) {
            const { data } = await this.$api.aliyun.getAaliyunImagUploadAddressAdnAuth()
            uploadAuth = data.data
            console.log('uploadAuth', uploadAuth)
            _this.imageUrl = uploadAuth.imageURL
            console.log('_this.imageUrl', _this.imageUrl)
          } else {
            const { data } = await this.$api.aliyun.getAliyunVideoUploadAddressAdnAuth({
              fileName: uploadInfo.file.name,
              imageUrl: _this.imageUrl
            })
            uploadAuth = data.data
            _this.videoId = uploadAuth.videoId
          }

          // 2. 调用uploader.setUploadAuthAndAddress的方法设置上传凭证
          _this.uploader.setUploadAuthAndAddress(
            uploadInfo,
            uploadAuth.uploadAuth,
            uploadAuth.uploadAddress,
            uploadAuth.videoId || uploadAuth.imageId
          )
          // 3. 设置好上传凭证没有问题，上传进度开始
        },
        // 文件上传成功
        onUploadSucceed: function (uploadInfo: any) {
          console.log('onUploadSucceed', uploadInfo)
        },
        // 文件上传失败
        onUploadFailed: function (uploadInfo: any, code: any, message: any) {
          console.log('onUploadFailed')
        },
        // 文件上传进度，单位：字节
        onUploadProgress: function (uploadInfo: any, totalSize: any, loadedPercent: any) {
          console.log(111)
        },
        // 上传凭证超时
        onUploadTokenExpired: function (uploadInfo: any) {
          console.log('onUploadTokenExpired')
        },
        // 全部文件上传结束
        onUploadEnd: async (uploadInfo: any) => {
          console.log(uploadInfo)
          // 文件上传成功，开始转码
          console.log('coverImageUrl', _this.imageUrl)
          const { data } = await this.$api.aliyun.aliyunTransCode({
            lessonId: _this.lessonId,
            coverImageUrl: _this.imageUrl,
            fileName: _this.fileName,
            fileId: _this.videoId
          })
          console.log('转码====', data)
          // 轮询查询转码进度
          const timer = setInterval(async () => {
            const { data } = await this.$api.aliyun.getAliyunTransCodePercent(_this.lessonId)
            console.log('转码进度', data)
            if (data.data === 100) {
              window.clearInterval(timer)
            }
          }, 1000)
        }
      })
    },
    authUpload() {
      // 获取上传的文件
      const _this = this as any
      const videoFile = _this.video.files[0] // 视频文件
      const imageFile = _this.image.files[0] // 图片文件
      // 将用户选择的文件添加到上传列表中
      const uploader = _this.uploader as any
      uploader.addFile(imageFile, null, null, null, '{"Vod":{}}')
      uploader.addFile(videoFile, null, null, null, '{"Vod":{}}')
      _this.fileName = videoFile.name as any
      // 开始上传
      uploader.startUpload()
    }
  }
})
</script>
