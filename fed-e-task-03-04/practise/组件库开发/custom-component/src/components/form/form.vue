<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'LgForm',
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