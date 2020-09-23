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
  export default {
    name: 'LgFormItem',
    inject: ['form'],
    props: {
      label: {
        type: String
      },
      prop: {  
        type: String
      } 
    },
    data() {
      return {
        errMsg: ''
      }
    },
    methods: {
      validate () {
        if (!this.prop) return
        const value = this.form.model[this.prop]
        const rules = this.form.rules[this.prop]
      }
    },
  }
</script>