<template>
  <div id="app">
    <!-- <h3>01-$root</h3>
    <root></root>

    <h3>02-$parent</h3>
    <parent></parent> -->


    <router-view/>
  </div>
</template>
<script>
  import root from '@/components/root.vue'
  import parent from '@/components/parent/parent.vue'
  export default {
    name: 'app',
    components: {
      root,
      parent
    }
  }
</script>
<style lang="stylus" scoped>
  #app {
    margin: 0 auto;
    text-align:center;
  }
</style>
