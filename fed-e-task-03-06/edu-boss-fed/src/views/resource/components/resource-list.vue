<template>
  <div class="resource">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-form :inline="true" :model="search" class="demo-form-inline">
            <el-form-item label="资源名称">
              <el-input v-model="search.name" placeholder="资源名称"></el-input>
            </el-form-item>
             <el-form-item label="资源路径">
              <el-input v-model="search.url" placeholder="资源路径"></el-input>
            </el-form-item>
            <el-form-item label="资源分类">
              <el-select clearable v-model="search.categoryId" placeholder="请选择资源分类">
                <el-option v-for="item in resourceCategories"  :label="item.name" :value="item.id" :key="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button>重置</el-button>
              <el-button type="primary" @click="onSubmit">查询搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
        <el-table
            :data="resourceList"
            style="width: 100%">
            <el-table-column
                prop="id"
                label="编号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="资源名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="url"
                label="资源路径">
            </el-table-column>
            <el-table-column
                prop="description"
                label="描述">
            </el-table-column>
            <el-table-column
                prop="createdTime"
                label="添加时间">
            </el-table-column>
             <el-table-column
                prop="address"
                label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
      </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ResourceList',
  data() {
    return {
      resourceList: [], // 资源列表
      search: {
        name: '',
        url: '',
        categoryId: null
      },
      resourceCategories: []
    }
  },
  created() {
    this.getResources()
    this.getResourcesCategories()
  },
  methods: {
    async getResources() { // 请求资源管理数据
      const { data } = await this.$api.resource.getResourcePages(this.search)
      this.resourceList = data.data.records
    },
    async getResourcesCategories() { // 请求资源分类列表
      const { data } = await this.$api.resource.getResourcesCategories()
      this.resourceCategories = data.data
    },
    onSubmit() {
      this.getResources()
    },
    // 删除
    handleDelete() {
      console.log('删除')
    },
    // 编辑
    handleEdit() {
      console.log('编辑')
    }
  }
})
</script>
<style lang="scss" scoped></style>
