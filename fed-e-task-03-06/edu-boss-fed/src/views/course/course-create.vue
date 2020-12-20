<template>
  <div class="course">
      <el-card>
          <div>
            <el-button  size="medium" icon="el-icon-arrow-left">返回</el-button>
            <span style="margin-left: 20px;">新增课程</span>
          </div>
          <!-- 导航条start -->
          <el-steps :active="activeIndex" simple style="margin: 20px 0px">
            <el-step v-for="(step, index) in steps" :key="index" :title="step.title" :icon="step.icon"  @click.native="activeIndex = index"></el-step>
          </el-steps>
          <!-- 导航条end -->
          <el-form label-width="80px" v-model="course">
              <!-- 基本信息start -->
              <div v-show="activeIndex === 0">
                <el-form-item label="名称">
                  <el-input
                    type="text"
                    placeholder="请输入名称"
                    v-model="course.courseName"
                    maxlength="50"
                    show-word-limit/>
                </el-form-item>
                <el-form-item label="简介">
                  <el-input
                    type="text"
                    placeholder="请输入简介"
                    v-model="course.brief"
                    maxlength="100"
                    show-word-limit/>
                </el-form-item>
                <el-form-item label="讲师姓名">
                  <el-input
                    type="text"
                    placeholder="请输入讲师姓名"
                    v-model="course.teacherDTO.teacherName"
                    maxlength="100"
                    show-word-limit/>
                </el-form-item>
                <el-form-item label="职位">
                  <el-input
                    type="text"
                    placeholder="请输入职位"
                    v-model="course.teacherDTO.position"
                    maxlength="100"
                    show-word-limit/>
                </el-form-item>
                <el-form-item label="讲师简介">
                  <el-input
                    type="text"
                    placeholder="请输入讲师简介"
                    v-model="course.teacherDTO.description"
                    maxlength="100"
                    show-word-limit/>
                </el-form-item>
                <el-form-item label="课程概述">
                  <el-col :span="10">
                    <el-input
                      type="text"
                      placeholder="请输入课程概述1"
                      v-model="course.previewFirstField"
                      maxlength="100"
                      show-word-limit/>
                  </el-col>
                  <el-col :span="10" style="margin-left: 50px">
                    <el-input
                      type="text"
                      placeholder="请输入课程概述2"
                      v-model="course.previewSecondField"
                      maxlength="100"
                      show-word-limit/>
                  </el-col>
                </el-form-item>
                <el-form-item label='课程排序'>
                  <el-input-number v-model="course.sortNum" label="数字越大越靠后"></el-input-number>
                </el-form-item>
                <el-form-item label="课程封面">
                  <course-img/>
                </el-form-item>
                <el-form-item label="解锁封面">
                  <course-img/>
                </el-form-item>
              </div>
              <!-- 基本信息end -->
          </el-form>
      </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import courseImg from './components/course-image.vue'

export default Vue.extend({
  name: 'CourseCreate',
  components: {
    courseImg
  },
  data() {
    return {
      activeIndex: 0,
      steps: [
        { title: '基本信息', icon: 'el-icon-edit' },
        { title: '销售信息', icon: 'el-icon-edit' },
        { title: '秒杀活动', icon: 'el-icon-edit' },
        { title: '课程详情', icon: 'el-icon-edit' }
      ],
      course: {
        id: 0,
        courseName: '',
        brief: '',
        teacherDTO: {
          id: 0,
          courseId: 0,
          teacherName: '',
          teacherHeadPicUrl: '',
          position: '',
          description: ''
        },
        courseDescriptionMarkDown: '',
        price: 0,
        discounts: 0,
        priceTag: '',
        discountsTag: '',
        isNew: true,
        isNewDes: '',
        courseListImg: '',
        courseImgUrl: '',
        sortNum: 0,
        previewFirstField: '',
        previewSecondField: '',
        status: 0,
        sales: 0,
        activityCourse: true,
        activityCourseDTO: {
          id: 0,
          courseId: 0,
          beginTime: '',
          endTime: '',
          amount: 0,
          stock: 0
        },
        autoOnlineTime: ''
      }
    }
  }
})
</script>
