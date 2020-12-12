<template>
  <resource-list/>
</template>

<script lang="ts">
import Vue from 'vue'
import resourceList from './components/resource-list.vue'
export default Vue.extend({
  name: 'ResourceIndex',
  components: {
    resourceList
  }
})
</script>

<style lang="scss" scoped></style>
