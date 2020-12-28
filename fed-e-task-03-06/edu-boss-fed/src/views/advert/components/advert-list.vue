<template>
  <div class="advert-list">
    <el-card>
      <!-- 广告列表start -->
      <el-table :data="adrerList">
        <el-table-column
          prop="id"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="name"
          label="广告名称">
        </el-table-column>
        <el-table-column
          prop="spaceId"
          label="广告位置">
        </el-table-column>
        <el-table-column
          prop="img"
          label="广告图片">
          <img :src="img"/>
        </el-table-column>
        <el-table-column
          prop="status"
          label="上线/下线">
          <template slot-scope="scope">
            <el-switch
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
            <el-button  @click="edit(scope.row.id)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 广告列表end -->
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AdvertList',
  data() {
    return {
      search: {
        pageNum: 1,
        pageSize: 5
      },
      total: 0,
      adrerList: []
    }
  },
  created() {
    this.initData()
  },
  methods: {
    async initData() {
      const { data } = await this.$api.advert.getAdList(this.search)
      console.log(data)
      this.adrerList = data.content
      this.total = this.adrerList.length
    }
  }
})
</script>

<style lang="scss" scoped></style>
