<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'LgForm',
    provide () {
      return {
        form: this
      }
    },
    props: {
      model: {
        type: Object
      },
      rules: {
        type: Object 
      }
    },
    methods: {
      validate (cb) {
        // 获取form带prop属性的子元素集合，并验证子元素validate方法
        const tasks = this.$children.filter(child => child.prop).map(child => child.validate())
        // 
        console.log('tasks', tasks)
        Promise.all(tasks).then(() => {
          cb(true)
        }).catch(() => {
          cb(false)
        })
      }
    },
  }
</script>