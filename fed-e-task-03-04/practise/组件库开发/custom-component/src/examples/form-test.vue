<template>
  <div>
    <lg-form ref="form" :model="user" :rules="rules">
      <lg-form-item label="用户名" prop="username">
        <!-- <lg-input v-model="user.username" placeholder="请输入用户名"></lg-input> -->
        <lg-input :value="user.username" @input="user.username = $event" placeholder="请输入用户名"></lg-input>
      </lg-form-item>
      <lg-form-item label="密码" prop="password">
        <lg-input type="password" :value="user.password" @input="user.password = $event" placeholder="请输入密码"></lg-input>
      </lg-form-item>
      <lg-form-item>
        <lg-button @click="login">登录</lg-button>
      </lg-form-item>
    </lg-form>
  </div>
</template>
<script>
  import LgForm from '../components/form/form'
  import LgFormItem from '../components/form/formItem'
  import LgInput from '../components/form/input'
  import LgButton from '../components/form/button'
  export default {
    name: 'FormTest',
    data() {
      return {
        user: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {
            required: true,
            message: '请输入用户名'
           }
          ],
          password: [
            {
              required: true,
              message: '请输入密码'
            },
            {
              min: 6,
              max: 12,
              message: '请输入6-12位密码'
            }
          ]
        }
      }
    },
    components: {
      LgForm,
      LgFormItem,
      LgInput,
      LgButton
    },
    methods: {
     login () {
       this.$refs.form.validate(validate => {
         if (validate) {
           alert('验证成功')
         } else {
           alert('验证失败')
           return false
         }
       })
     } 
    }
  }
</script>