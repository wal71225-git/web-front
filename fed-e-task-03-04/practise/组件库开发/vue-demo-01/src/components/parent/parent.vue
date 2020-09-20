<template>
  <div class="parent">
    parent
    <child></child>
  </div>
</template>

<script>
import child from './child'
export default {
  components: {
    child
  },
  data () {
    return {
      title: '获取父组件实例'
    }
  },
  methods: {
    handle () {
      console.log(this.title)
    }
  }
}
</script>

<style>
.parent {
  border: palegreen 1px solid;
}
</style>