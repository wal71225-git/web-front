<template>
  <div class="section">
      <el-card>
        <div class="header">
          <span><back @back="back"/>{{ courseName}}</span>
          <el-button type="primary" style="margin-left: 5px;">添加阶段</el-button>
        </div>
        <el-tree :data="section" :allow-drop="handleAllowDrop"
        :props="defaultProps" @node-drop="handleSort"
        @node-click="handleNodeClick" draggable>
          <div class="inner" slot-scope="{ node, data }">
            <span>{{node.label}}</span>
            <span v-if="data.sectionName">
              <el-button>编辑</el-button>
              <el-button>添加课时</el-button>
              <el-button>已隐藏</el-button>
            </span>
            <span v-else>
              <el-button>编辑</el-button>
              <el-button @click="$router.push({
                name: 'course-video',
                params:{
                  sectionId: node.parent.id,
                  lessonId: data.id,
                },
                query: {
                  courseName,
                  lessonName: data.theme
                }
              })">上传视频</el-button>
              <el-button>已隐藏</el-button>
            </span>
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
    back() { // 返回上一页
      this.$router.back()
    },
    handleNodeClick(data: any) {
      console.log(data)
    },
    // draggingNode 拖动的节点
    // dropNode 放置的目标节点
    // type：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后
    handleAllowDrop(draggingNode: any, dropNode: any, type: any) { // 禁止非同级非同一节点拖动
      console.log(draggingNode)
      console.log(dropNode)
      console.log(type)
      return draggingNode.data.sectionId === dropNode.data.sectionId && type !== 'inner'
    },
    async handleSort (dragNode: any, dropNode: any) {
      try {
        await Promise.all(dropNode.parent.childNodes.map((item: any, index: number) => {
          if (dragNode.data.lessonDTOS) {
            // 阶段
            return this.$api.section.saveOrUpdateSection({
              id: item.data.id,
              orderNum: index + 1
            })
          } else {
            // 课时
            return this.$api.section.saveOrUpdateLesson({
              id: item.data.id,
              orderNum: index + 1
            })
          }
        }))
        this.$message.success('排序成功')
      } catch (err) {
        console.log(err)
        this.$message.error('排序失败')
      }
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
  .inner {
    width: 100%;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
  }
  ::v-deep .el-tree-node__content {
  height: auto;
  }
</style>
