<template>
  <div>
    <label>{{ label }}</label>
    <div>
        <!-- 放每个Item不同的内容 -->
        <slot></slot> 
        <!-- 存放验证失败的提示语 -->
        <p v-if="errMsg">{{ errMsg }}</p>
    </div>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
  export default {
    name: 'LgFormItem',
    inject: ['form'],
    props: {
      label: {
        type: String
      },
      prop: {  // 字段校验名称
        type: String
      } 
    },
    data() {
      return {
        errMsg: ''
      }
    },
    mounted() {
      // 注册validate事件，让input组件获取到是formItem时来调用
      this.$on('validate', () => {
        this.validate()
      })
    },
    methods: {
      validate () {
        console.log(this.prop)
        if (!this.prop) return
        const value = this.form.model[this.prop] // 从form获取要验证的字段名称值
        const rules = this.form.rules[this.prop] // 从form获取要验证的字段规则
        const descriptor = { [this.prop]: rules } // 封装验证规则
        const validator = new AsyncValidator(descriptor) // 创建校验对象
        // 返回校验结果
        return validator.validate({[this.prop]: value}, errors => {
              if (errors) {
                this.errMsg = errors[0].message
              } else {
                this.errMsg = ''
              }
        })
      }
    },
  }
</script>