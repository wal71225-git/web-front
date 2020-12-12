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
              <el-select v-model="search.region" placeholder="资源分类">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button>重置</el-button>
              <el-button type="primary" @click="onSubmit">查询搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
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
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      search: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
})
</script>
<style lang="scss" scoped></style>
