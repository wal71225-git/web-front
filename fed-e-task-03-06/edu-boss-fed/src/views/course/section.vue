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
              <el-button @click="addLesson(node)">添加课时</el-button>
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

        <!-- 添加课时弹窗 -->
        <el-dialog title="课时基本信息" :visible.sync="isAddLesson">
          <el-form :model="lessonForm">
            <el-form-item label="课时名称" label-width="120px">
              <el-input v-model="lessonForm.theme" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="课时时长" label-width="120px">
              <el-input placeholder="商品原价" v-model="lessonForm.duration">
                <template slot="append">分钟</template>
              </el-input>
            </el-form-item>
            <el-form-item label="是否开放试听">
              <el-switch
                v-model="lessonForm.isFree"
                :active-value="1"
                :inactive-value="0"
                active-color="#13ce66"
                inactive-color="#ff4949"
              />
            </el-form-item>
            <el-form-item label="课时排序" label-width="120px">
              <el-input placeholder="课时排序" v-model="lessonForm.orderNum">
                <template slot="append">数字越大越靠后</template>
              </el-input>
            </el-form-item>
           </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="isAddLesson = false">取 消</el-button>
            <el-button type="primary" @click="saveLesson">确 定</el-button>
          </div>
        </el-dialog>
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
      section: [],
      isAddLesson: false,
      lessonForm: {
        courseId: this.courseId,
        sectionId: -1,
        theme: '', // 课时名称
        duration: -1, // 课时长度
        isFree: 0, // 是否开放试听
        orderNum: -1, // 课时排序
        status: 0 // 0 隐藏 1 未发布  2 已发布
      }
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
    },
    async addLesson(node: any) {
      this.isAddLesson = true
      this.lessonForm.sectionId = node.id
    },
    // 保存课时
    async saveLesson() {
      const { data } = await this.$api.lesson.saveOrUpdate(this.lessonForm)
      console.log('data', data)
      this.isAddLesson = false
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
