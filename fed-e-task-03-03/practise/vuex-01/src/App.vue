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
      <!-- getter基本使用 -->
      <h1>{{$store.getters.reversMsg}}</h1>
        <!-- mapGetters基本使用 -->
      <h1>{{reversMsg}}</h1>
      <!-- mutations获取状态变化后的数据 -->
      <button @click="$store.commit('addCount',2)">添加</button>
      <!-- 使用mapMutations获取状态变化后的数据 -->
      <button @click="addCount(3)">添加</button>
      <!-- action获取状态变化后的数据 -->
      <button @click="$store.dispatch('asyncAddCount', 5)">添加</button>
      <!-- 使用mapActions获取状态变化后的数据 -->
      <button @click="asyncAddCount(5)">添加</button>
      <!-- 使用modules -->
      <h1>products: {{$store.state.product.products}}</h1>
      <!-- 使用moudules提交mutations -->
      <button @click="$store.commit('setProducts',[])">清空产品</button>
      <!-- 使用modules 命名空间-->
      <h1>products: {{products}}</h1>
      <!-- 使用moudules命名空间提交mutations -->
      <button @click="setProducts([])">清空产品</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
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
    ...mapState({ num: 'count', msg: 'message' }),
    ...mapGetters(['reversMsg']),
    ...mapState('product', ['products'])
  },
  methods: { // 在方法中使用mapMutations，mapMutations同样有数组和对象两种方式
    ...mapMutations(['addCount']),
    ...mapActions(['asyncAddCount']),
    ...mapMutations('product', ['setProducts'])
  }
}
</script>
