<template>
  <div class="role">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form ref="roleSearchForm" :inline="true" :model="search" class="demo-form-inline">
            <el-form-item label="角色编码" prop="code">
              <el-input v-model="search.code"  placeholder="角色编码"></el-input>
            </el-form-item>
             <el-form-item label="角色名称" prop="name">
              <el-input v-model="search.name" placeholder="角色名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="onReset">重置</el-button>
              <el-button type="primary" @click="onSubmit">查询搜索</el-button>
            </el-form-item>
        </el-form>
      </div>
      <div style="height:70px;border-bottom: 1px solid #EBEEF5;">
        <el-button style="padding-left: 20px" @click="addOrEditRole(false)">添加角色</el-button>
      </div>
      <el-table
        :data="roleList"
        style="width: 100%;margin-bottom: 20px;">
        <el-table-column
          prop="code"
          label="角色编码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="角色名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="description"
          label="角色描述"
          width="300">
        </el-table-column>
        <el-table-column
          prop="createdTime"
          label="添加时间"
          width="280">
        </el-table-column>
        <el-table-column
          prop="createdTime"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="addMenu" type="text" size="small">分配菜单</el-button>
            <el-button type="text" size="small">分配资源</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="addOrEditRole(true, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="search.current"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="search.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
      </el-pagination>
    </el-card>
    <el-dialog
      :title="isEdit ? '编辑角色' : '添加角色'"
      :visible.sync="dialogVisible" width="40%">
      <add-or-edit @success="addRoleSuccess"
      @cancel="onCancel"
      :roleId="roleId"
      :isEdit="isEdit"
      />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Form } from 'element-ui'
import addOrEdit from './components/addOrEdit.vue'

export default Vue.extend({
  name: 'RoleIndex',
  data() {
    return {
      roleList: [],
      search: {
        code: null,
        name: '',
        current: 1,
        size: 5
      },
      total: 0,
      dialogVisible: false,
      isEdit: false,
      roleId: null
    }
  },
  components: {
    addOrEdit
  },
  created() {
    this.loadDatas()
  },
  methods: {
    async loadDatas() {
      const { data } = await this.$api.role.getRolePages(this.search)
      this.roleList = data.data.records
      this.total = data.data.total
    },
    onSubmit() {
      this.search.current = 1
      this.loadDatas()
    },
    onReset() {
      (this.$refs.roleSearchForm as Form).resetFields()
      this.search.current = 1
      this.loadDatas()
    },
    handleSizeChange(val: number) {
      this.search.size = val
      this.search.current = 1
      this.loadDatas()
    },
    handleCurrentChange(val: number) {
      this.search.current = val
      this.loadDatas()
    },
    addRoleSuccess() {
      // 角色添加成功
      this.dialogVisible = false
      this.loadDatas()
    },
    onCancel() {
      this.dialogVisible = false
    },
    addOrEditRole(isEdit: boolean, item: any) {
      this.dialogVisible = true
      this.isEdit = isEdit
      this.roleId = item.id || ''
    },
    addMenu() { // 分配菜单
      this.$router.push({ name: 'alloc-menu' })
    }
  }
})
</script>

<style lang="scss" scoped></style>
