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
    }
  }
</script>