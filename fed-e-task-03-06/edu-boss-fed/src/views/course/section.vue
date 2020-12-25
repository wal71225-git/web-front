<template>
  <div class="section">
      <el-card>
        <div class="header">
          <span><back @back="back"/>{{ courseName}}</span>
          <el-button type="primary" style="margin-left: 5px;">添加阶段</el-button>
        </div>
        <el-tree :data="section" :props="defaultProps" @node-click="handleNodeClick" draggable>
          <div slot-scope="{ node }">
            <span>{{node.label}}</span>
            <span></span>
          </div>
        </el-tree>
      </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Back from '../../components/back/index.vue'

export default Vue.extend({
  name: 'Section',
  components: {
    Back
  },
  props: {
    courseId: {
      type: [String, Number],
      default: 0
    },
    courseName: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      defaultProps: {
        children: 'lessonDTOS',
        label(data: any) {
          return data.sectionName || data.theme
        }
      },
      section: []
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      const { data } = await this.$api.section.getSectionAndLesson(this.courseId)
      this.section = data.data
    },
    back() {
      this.$router.back()
    },
    handleNodeClick(data: any) {
      console.log(data)
    }
  }
})
</script>
<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
