<template>
  <div id="app">
    <div id="nav">
      <!-- state基本用法 -->
      <h1>count: {{$store.state.count}}</h1>
      <h1>message: {{$store.state.message}}</h1>
      <!-- 使用计算属性简化获取 -->
      <h1>count: {{count}}</h1>
      <h1>message: {{message}}</h1>
      <!-- 如果页面已经有相同属性，mapState使用对象方法传值 -->
      <h1>count: {{num}}</h1>
      <h1>message: {{msg}}</h1>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      count: 0,
      message: ''
    }
  },
  computed: {
    // count () {
    //   return this.$store.state.count
    // },
    // message () {
    //   return this.$store.state.message
    // }
    // ...mapState(['count', 'message'])
    ...mapState({ num: 'count', msg: 'message' })
  }
}
</script>
