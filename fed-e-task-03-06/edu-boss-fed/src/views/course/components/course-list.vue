<template>
    <el-card>
      <!-- 筛选查询start -->
      <el-form ref="roleSearchForm" :inline="true" :model="search" class="demo-form-inline">
        <el-form-item label="课程名称" prop="courseName">
          <el-input v-model="search.courseName"  placeholder="课程名称"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="search.status" placeholder="状态">
            <el-option label="全部" value=""></el-option>
            <el-option label="上架" value="1"></el-option>
            <el-option label="下架" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :disabled="loading" @click="searchCourse">查询</el-button>
          <el-button type="primary"  @click="toAddCourse">新建课程</el-button>
        </el-form-item>
      </el-form>
      <!-- 筛选查询end -->
      <!-- 课程列表start -->
      <el-table :data="courseList" v-loading="loading">
        <el-table-column
          prop="id"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="courseName"
          label="课程名称">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格">
        </el-table-column>
        <el-table-column
          prop="sortNum"
          label="排序">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态">
          <template slot-scope="scope">
            <el-switch
              @change="changeStatus(scope.row)"
              :disabled="currentCourseId === scope.row.id && switchloading"
              v-model="scope.row.status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="0">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop=""
          label="操作">
          <template slot-scope="scope">
            <el-button :disabled="loading" @click="edit(scope.row.id)" type="text" size="small">编辑</el-button>
            <el-button :disabled="loading" type="text" size="small" @click="openContent(scope.row)">内容管理</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 课程列表end -->
      <!-- 分页start -->
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="search.currentPage"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="search.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :disabled="loading">
      </el-pagination>
      <!-- 分页结束 -->
    </el-card>
</template>

<script>
export default {
  name: 'CourseListIndex',
  data() {
    return {
      search: {
        courseName: '',
        status: '',
        currentPage: 1,
        pageSize: 5
      },
      courseList: [],
      total: 0,
      loading: true,
      currentCourseId: -1, // 当前行id
      switchloading: false // 改变状态loading
    }
  },
  created() {
    this.initData()
  },
  methods: {
    async initData() { // 初始化分页数据
      this.loading = true
      const { data: { data: { records, total } } } = await this.$api.course.getQueryCourses(this.search)
      this.courseList = records
      this.total = total
      this.loading = false
    },
    handleSizeChange(val) { // 每页数量发生变化
      this.search.pageSize = val
      this.search.currentPage = 1
      this.initData()
    },
    handleCurrentChange(val) { // 当前页码发生变化
      this.search.currentPage = val
      this.initData()
    },
    searchCourse() { // 搜索
      this.initData()
    },
    toAddCourse() { // 跳转新建课程
      this.$router.push({ name: 'course-create' })
    },
    async changeStatus(course) {
      this.switchloading = true
      this.currentCourseId = course.id
      const params = {
        courseId: course.id,
        status: course.status
      }
      await this.$api.course.changeState(params)
      this.switchloading = false
    },
    edit(courseId) {
      this.$router.push({
        name: 'course-edit',
        params: {
          courseId
        }
      })
    }
  }
}
</script>
