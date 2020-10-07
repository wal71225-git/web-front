<template>
  <div class="child">
    child
    <div v-for="(item, index) in data" :key="index">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  props:{
    data: {
      type: Object,
      default: []
    }
  }
}
</script>

<style>
.child {
  border:paleturquoise 1px solid;
}
</style>