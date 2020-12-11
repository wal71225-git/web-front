<template>
  <div class="menu">
    <create-or-edit :isEdit="true"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import createOrEdit from './components/createOrEdit.vue'
export default Vue.extend({
  name: 'MenuEdit',
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
