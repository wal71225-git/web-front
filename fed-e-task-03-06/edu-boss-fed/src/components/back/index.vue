<template>
	<div style="display: inline-block">
    <el-button icon="el-icon-arrow-left" @click="back">返回</el-button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Back',
  methods: {
    back() {
      this.$emit('back')
    }
  }
})
</script>
