<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
import bus from './eventbus'
export default {
  name: 'bus-01',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    bus.$on('numchange', val => {
      this.msg = `您选择了${val}件商品`
    })
  }
}
</script>
