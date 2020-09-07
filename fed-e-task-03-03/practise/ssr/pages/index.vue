<template>
  <div>
    <h1>Home</h1>
    <h1>{{ title }}</h1>
        <!-- 循环 -->
    <ul>
        <li v-for="(item, index) in posts" :key="index">{{ item.title}}</li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'ssr-demo',
    // nuxt中特殊的钩子函数，专门用于获取服务端渲染的数据
    async asyncData() {
      const { data } = await axios({
        method: 'GET',
        url: 'http://localhost:3000/data.json'
      })
      // 这里返回的数据会和data () {}中的数据合并到一起给页面使用
      return data
    },
  }
</script>