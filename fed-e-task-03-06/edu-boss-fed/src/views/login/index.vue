<template>
  <div class="login">
    <el-form class="login-form" label-position="top">
      <el-form-item label="手机号">
        <el-input v-model="user.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginIndex',
  data() {
    return {
      user: {
        phone: '18201288771',
        password: '111111'
      }
    }
  },
  methods: {
    submit(): void {
      this.$api.user.goLogin(this.user).then((res: any) => {
        console.log('res', res)
      })
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
