<template>
  <div class="course">
    {{courseId}}
    <course-or-edit :courseId="courseId"/>
    {{courseId}}
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
  props: ['courseId']
})
</script>
