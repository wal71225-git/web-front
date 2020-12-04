<template>
  <div class="login">
    <el-form class="login-form"
    label-position="top"
    ref="loginForm"
    :model="user"
    :rules="rules"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="user.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" :loading="isLoginLoading" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Form } from 'element-ui'

export default Vue.extend({
  name: 'LoginIndex',
  data() {
    return {
      user: {
        phone: '15510792995',
        password: '111111'
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      },
      isLoginLoading: false // 登录按钮是否显示加载中
    }
  },
  methods: {
    async submit() {
      try {
        this.isLoginLoading = true
        // 登录验证
        await (this.$refs.loginForm as Form).validate()
        const { data } = await this.$api.user.goLogin(this.user)
        if (data.state !== 1) {
          this.$message.error(data.message)
        } else {
          // 登录成功把用户信息存到vuex
          this.$store.commit('setUser', data.content)
          this.$router.push(this.$route.query.redirect as string || '/')
          // this.$router.push({
          //   name: 'home'
          // })
          this.$message.success('登录成功')
        }
      } catch (error) {
        console.log('error', error)
      }
      this.isLoginLoading = false
    }
  }
})
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &-form {
    width: 300px;
    padding: 20px;
    background-color: $white;
  }
  &-btn {
    width: 100%;
  }
}
</style>
