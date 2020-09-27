<template>
  <div class="lg-steps">
      <div class="lg-steps-line"></div>
      <div v-for="index in count" :key="index" class="lg-step"
      :style="{color: active >= index ? activeCorlor : defaultCorlor}">
        {{ index }}
      </div>
  </div>
</template>
<script>
  import './steps.css'
  export default {
    name: 'lySteps',
    props: {
      count: { // 任务步数
        type: Number,
        default: 3
      },
      active: { // 已完成步数
        type: Number,
        default: 0
      },
      activeCorlor: {
        type: String,
        default: 'red'
      },
      defaultCorlor: {
        type: String,
        default: 'green'
      }
    }
  }
</script>