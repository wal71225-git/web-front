<template>
  <div class="user">
    <el-card>
      <!-- 页面查询start -->
      <el-form ref="searchForm" label-width="80px" :inline="true" :model="search">
        <el-form-item label="手机号">
          <el-input v-model="search.phone" placeholder="请输入手机号"/>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-date-picker
            v-model="search.date"
            type="datetimerange"
            :picker-options="pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right">
          </el-date-picker>
        </el-form-item>
      </el-form>
     <!-- 页面查询end -->
     <!-- 用户列表开始 -->
      <el-table
        :data="userList"
        style="width: 100%;margin-bottom: 20px;">
        <el-table-column
          prop="id"
          label="用户ID"
          width="120">
        </el-table-column>
        <el-table-column
          prop="portrait"
          label="头像"
          width="100">
          <template slot-scope="scope">
              <el-avatar :src="scope.row.portrait"></el-avatar>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="注册时间"
          width="280">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="120">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="ENABLE"
              inactive-value="DISABLE"
              @change="statusChange(scope.row.id)">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="createdTime"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="addMenu(scope.row)" type="text" size="small">禁用</el-button>
            <el-button type="text" size="small" @click="openDialog(scope.row.id)">分配角色</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 用户列表结束 -->
      <!-- 分页start -->
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="search.currentPage"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="search.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
      </el-pagination>
      <!-- 分页end -->

    <el-dialog
      title="分配角色"
      :visible.sync="dialogVisible">
      <el-select v-model="roleValue" multiple placeholder="请选择角色" style="width:20vh;margin-left:30vh;">
        <el-option
          style="width: 200px; max-width: 400px;"
          v-for="item in roleList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <div style="text-align: right;margin-top: 20px;">
        <el-button @click="dialogVisible = false" >取消</el-button>
        <el-button type="primary" @click="allocateRoles">确定</el-button>
      </div>
    </el-dialog>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UserIndex',
  data() {
    return {
      search: {
        phone: '',
        date: '',
        pageSize: 5,
        currentPage: 1
      },
      total: 0,
      userList: [],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker: any) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker: any) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker: any) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      dialogVisible: false,
      roleList: [] as [],
      value: '',
      roleValue: [1, 2, 4],
      userId: -1,
      checkedList: [] as any
    }
  },
  created() {
    this.initData()
  },
  methods: {
    async initData() { // 初始化列表数据
      const { data } = await this.$api.user.getUserPages(this.search)
      this.total = data.data.total
      this.userList = data.data.records
    },
    handleSizeChange(val: number) { // 切换每页展示数量
      this.search.currentPage = 1
      this.search.pageSize = val
      this.initData()
    },
    handleCurrentChange(val: number) { // 切换页码
      this.search.currentPage = val
      this.initData()
    },
    async statusChange(userId: string | number) { // 启用用户
      await this.$api.user.enableUser(userId)
    },
    async openDialog(userId: number) {
      this.userId = userId
      // 获取所有角色
      // const { data } = await this.$api.role.getAllRoles()
      const { data } = await this.$api.role.getRolesWithUserPermission(userId)
      this.roleList = data.data
      this.roleList.forEach((item: any) => {
        if (item.hasPermission) {
          this.checkedList.push(item.id)
        }
      })
      this.dialogVisible = true
    },
    async allocateRoles() {
      const { data } = await this.$api.allocateUserRoles({
        userId: this.roleId,
        roleIdList: this.checkedList
      })
    }
  }
})
</script>

<style>
  .el-input {
    width: 350px;
  }
</style>
