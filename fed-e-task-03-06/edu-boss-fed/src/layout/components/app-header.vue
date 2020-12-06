<template>
  <div class="header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          shape="square"
          :size="40"
          :src="user.portrait || require('@/assets/default-avatar.png')"
        ></el-avatar>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>{{user.userName}}</el-dropdown-item>
        <el-dropdown-item divided @click.native="loginOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHeader',
  data() {
    return {
      user: {}
    }
  },
  async created() {
    const { data } = await this.$api.user.getUserInfo()
    this.user = data.content || {}
  },
  methods: {
    loginOut() {
      this.$confirm('确认退出吗？', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => { // 确认执行这里
        // 清除缓存
        this.$store.commit('setUser', null)
        // 跳转登录页面
        this.$router.push({ name: 'login' })
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => { // 取消执行这里
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .el-dropdown-link {
    display: flex;
    align-items: center;
  }
}
</style>
