<template>
  <div class="course-image">
    <el-progress v-if="isUploading" type="circle" :width="178" :percentage="percentage" status="success"></el-progress>
    <el-upload
      v-else
      class="avatar-uploader"
      action="#"
      :before-upload="beforeAvatarUpload"
      :http-request="handleUpload">
      <img v-if="value" :src="value" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'CourseImage',
  props: {
    value: {
      type: String
    }
  },
  data() {
    return {
      percentage: 0,
      isUploading: false
    }
  },
  methods: {
    beforeAvatarUpload() {
      // const isJPG = file.type === 'image/jpeg'
      // const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!')
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!')
      // }
      // return isJPG && isLt2M
      return true
    },
    async handleUpload(options) {
      this.isUploading = true
      const params = new FormData()
      params.append('file', options.file)
      const { data } = await this.$api.course.upLoad(params, e => {
        this.percentage = Math.floor(e.loaded / e.total * 100)
      })
      this.isUploading = false
      this.percentage = 0
      this.$emit('input', data.data.name)
    }
  }
})
</script>

<style lang="scss">
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
