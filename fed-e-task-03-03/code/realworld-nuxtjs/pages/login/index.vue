
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

        <form>
          <fieldset v-if="!isLogin" class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Your Name">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Email">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="password" placeholder="Password">
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
export default {
  data() {
    //这里存放数据
    return {

    };
  },
  //监听属性 类似于data概念
  computed: {
    isLogin() {
      console.log(this.$route.name)
      return this.$route.name === 'login'
    }
  },
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  mounted() {

  },
}
</script>