<template>
  <div class="course">
    <course-or-edit/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CourseOrEdit from './components/create-or-edit.vue'

export default Vue.extend({
  name: 'CourseCreate',
  components: {
    CourseOrEdit
  },
  data() {
    return {
    }
  }
})
</script>
