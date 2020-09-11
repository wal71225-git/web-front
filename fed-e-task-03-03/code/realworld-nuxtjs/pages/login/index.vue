
<template>
<div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">{{isLogin? 'Sign in' : 'Sign up'}}</h1>
        <p class="text-xs-center">
          <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link> 
          <nuxt-link v-else to="/login">Have an account?</nuxt-link>
        </p>

        <ul class="error-messages">
          <li>That email is already taken</li>
        </ul>

        <form @submit.prevent="onSubmit">
          <fieldset v-if="!isLogin" class="form-group">
            <input class="form-control form-control-lg" v-model="user.username" type="text" placeholder="Your Name">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" v-model="user.email" type="email" placeholder="Email" required>
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" v-model="user.password" type="password" placeholder="Password" minlength="8" required>
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{isLogin? 'Sign in' : 'Sign up'}}
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import user from '@/api/user'
// 仅在客户端加载cookie包
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  data() {
    //这里存放数据
    return {
      user: {
        username: '',
        email: '',
        password: ''
      }
    };
  },
  //监听属性 类似于data概念
  computed: {
    isLogin() {
      return this.$route.name === 'login'
    }
  },
  methods: {
    async onSubmit() {
      const { data } = this.isLogin ? await user.login({
        user: this.user
      }): await user.register({
          user: this.user
      })
      this.$store.commit('setUser', data.user)
      // 为了防止页面刷新数据丢失，需要把数据持久化
      Cookie.set('user', data.user)
      this.$router.push('/')
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  mounted() {

  },
}
</script>