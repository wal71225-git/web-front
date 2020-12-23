<template>
  <div class="menu">
    <create-or-edit/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import createOrEdit from './components/create-or-edit.vue'
export default Vue.extend({
  name: 'MenuCreate',
  components: {
    createOrEdit
  },
  data() {
    return {
    }
  },
  methods: {

  }
})
</script>

<style lang="scss" scoped></style>
