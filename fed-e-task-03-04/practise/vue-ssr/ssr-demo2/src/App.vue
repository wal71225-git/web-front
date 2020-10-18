<template>
  <!--客户端渲染节点 -->
  <div id="app">
    <h1>{{message}}</h1>
    <input type="text" v-model="message"/>
    <button @click="test">点击测试</button>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        message: '拉勾教育'
      }
    },
    methods: {
      test() {
        alert('点击测试')
      } 
    }
  }
</script>