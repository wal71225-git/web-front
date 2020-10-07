<template>
  <div class="parent">
    parent
    <child :data="list"></child>
    <button @click.stop="handle">更新child</button>
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
      title: '获取父组件实例',
      list: []
    }
  },
  mounted() {
    this.list.push(1)
    this.list.push(2)
    this.list.push(3)
  },
  methods: {
    handle () {
      this.list.push(3)
      this.list.push(4)
    }
  }
}
</script>

<style>
.parent {
  border: palegreen 1px solid;
}
</style>