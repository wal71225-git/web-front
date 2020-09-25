<template>
  <div>
    <input v-bind="$attrs" :type="type" :value="value" @input="handleInput">
  </div>
</template>
<script>
  export default {
    name: 'LgInput',
    inheritAttrs: false,
    props: {
      value: {
        type: String
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    methods: {
      handleInput (event) {
        this.$emit('input',event.target.value)
      // 定义获取父组件方法，因为input不只是用于form组件，所以不能用依赖注入方法
        const findParent = parent => {
          while(parent){
            // 判断父元素是否是formItem
            if (parent.$options.name === 'LgFormItem') {
              break
            } else {
              parent = parent.$parent
            }
          }
          return parent
        }
        const parent = findParent(this.$parent)
        // 如果找到父元素是formItem，则调用父组件注册
        findParent(parent) && parent.$emit('validate')
      }
    }
  }
</script>