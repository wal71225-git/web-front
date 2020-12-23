<template>
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
                  <course-img v-model="course.courseListImg"/>
                </el-form-item>
                <el-form-item label="解锁封面">
                  <course-img v-model="course.courseImgUrl"/>
                </el-form-item>
              </div>
              <!-- 基本信息end -->
              <!-- 销售信息start -->
              <div v-show="activeIndex === 1">
                <el-form-item label="售卖价格">
                  <el-input placeholder="售卖价格" v-model="course.discounts">
                    <template slot="append">元</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="商品原价">
                  <el-input placeholder="商品原价" v-model="course.price">
                    <template slot="append">元</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="销量">
                  <el-input placeholder="销量" v-model="course.sales">
                    <template slot="append">单</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="活动标签">
                  <el-input
                      type="text"
                      placeholder="活动标签"
                      v-model="course.discountsTag"
                      maxlength="4"
                      show-word-limit/>
                </el-form-item>
              </div>
              <!-- 销售信息end -->
              <!-- 秒杀活动start -->
              <div v-show="activeIndex === 2">
                <el-form-item label="限时秒杀开关">
                  <el-switch
                    v-model="course.activityCourse"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                  >
                  </el-switch>
                </el-form-item>
                <template v-if="course.activityCourse">
                  <el-form-item label="开始时间">
                    <el-date-picker
                      v-model="course.activityCourseDTO.beginTime"
                      type="date"
                      placeholder="选择日期时间"
                      value-format="yyyy-MM-dd"
                    />
                  </el-form-item>
                  <el-form-item label="结束时间">
                    <el-date-picker
                      v-model="course.activityCourseDTO.endTime"
                      type="date"
                      placeholder="选择日期时间"
                      value-format="yyyy-MM-dd"
                    />
                  </el-form-item>
                  <el-form-item label="秒杀价">
                    <el-input v-model.number="course.activityCourseDTO.amount" type="number">
                      <template slot="append">元</template>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="秒杀库存">
                    <el-input v-model.number="course.activityCourseDTO.stock" type="number">
                      <template slot="append">个</template>
                    </el-input>
                  </el-form-item>
                </template>
              </div>
              <!-- 秒杀活动end -->
              <!-- 课程详情start -->
              <div v-show="activeIndex === 3">
                <el-form-item label="课程详情">
                  <!-- <text-editor v-model="course.courseDescriptionMarkDown" /> -->
                  <el-input v-model="course.courseDescriptionMarkDown" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="是否发布">
                  <el-switch
                    v-model="course.status"
                    :active-value="1"
                    :inactive-value="0"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                  />
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    @click="handleSave"
                  >保存</el-button>
                </el-form-item>
              </div>
              <!-- 课程详情end -->
          </el-form>
      </el-card>
</template>

<script lang="ts">
import Vue from 'vue'
import CourseImg from './course-image.vue'

export default Vue.extend({
  name: 'CourseCreate',
  props: {
    courseId: {
      type: [String, Number],
      default: 0
    }
  },
  components: {
    CourseImg
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
        // id: 0,
        courseName: '',
        brief: '',
        teacherDTO: {
          // id: 0,
          // courseId: 0,
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
          // id: 0,
          // courseId: 0,
          beginTime: '',
          endTime: '',
          amount: 0,
          stock: 0
        },
        autoOnlineTime: ''
      }
    }
  },
  created() {
    console.log('courseId', this.courseId)
  },
  mounted() {
    console.log('courseId', this.courseId)
  },
  methods: {
    async handleSave() {
      await this.$api.course.saveOrUpdateCourse(this.course)
      this.$router.push({
        name: 'course'
      })
    }
  }
})
</script>
