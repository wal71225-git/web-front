<template>
  <div class="section">
      <el-card>
        <el-tree :data="section" :props="defaultProps" @node-click="handleNodeClick" draggable>
        </el-tree>
      </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Section',
  props: {
    courseId: {
      type: [String, Number],
      default: 0
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
    handleNodeClick(data: any) {
      console.log(data)
    }
  }
})
</script>
