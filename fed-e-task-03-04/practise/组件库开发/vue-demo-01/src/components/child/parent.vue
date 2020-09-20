<template>
  <div>
    <children1></children1>
    <children2></children2>

    <button @click="getChildren">获取子组件</button>
  </div>
</template>

<script>
import children1 from './child1'
import children2 from './child2'
export default {
  components: {
    children1,
    children2
  },
  methods: {
    getChildren () {
      console.log(this.$children)
      console.log(this.$children[0].title)
      console.log(this.$children[1].title)

      this.$children[0].handle()
      this.$children[1].handle()
    }
  }
}
</script>

<style>

</style>