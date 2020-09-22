<template>
  <div>
    <setps :active="active" :count="count"></setps>
    <button @click="next">下一步</button>
  </div>
</template>
<script>
  import setps from '../components/steps'
  export default {
    name: 'stepsTest',
    data() {
      return {
        active: 0, // 当前进行到第几步
        count: 5 // 总共步骤
      }
    },
    methods: {
      next() {
        this.active < this.count && this.active++
      }
    },
    components: {
      setps
    }
  }
</script>