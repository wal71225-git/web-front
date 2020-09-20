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
  provide () {
    return {
      title: this.title,
      handle: this.handle
    }
  },
  data () {
    return {
      title: '父组件 provide'
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