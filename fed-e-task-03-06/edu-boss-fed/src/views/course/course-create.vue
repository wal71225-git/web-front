<template>
  <div class="course">
      <el-card>
          <div>
            <el-button  size="medium" icon="el-icon-arrow-left">返回</el-button>
            <span style="margin-left: 20px;">新增课程</span>
          </div>
          <el-steps :active="1" simple style="margin-top: 20px">
            <el-step v-for="(step, index) in steps" :key="index" :title="step.title" ></el-step>
          </el-steps>
      </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CourseCreate',
  data() {
    return {
      activeIndex: 0,
      steps: [
        { title: '基本信息', icon: 'el-icon-edit' },
        { title: '销售信息', icon: 'el-icon-edit' },
        { title: '秒杀活动', icon: 'el-icon-edit' },
        { title: '课程详情', icon: 'el-icon-edit' }
      ]
    }
  }
})
</script>
