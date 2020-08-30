<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><span class="product_list">商品列表</span></el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="products" style="width: 100%">
      <el-table-column prop="title" label="商品">
      </el-table-column>
      <el-table-column prop="price" label="价格">
      </el-table-column>
      <el-table-column prop="address" label="操作">
      <template v-slot="scope">
          <el-button @click="addToCart(scope.row)">加入购物车</el-button>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: "Home",
  computed: {
    ...mapState('product', ['products'])
  },
  mounted () {
    console.log(111111)
    this.getProducts()
  },
  methods: {
    ...mapActions('product',['getProducts']),
    ...mapMutations('cart', ['addTtoCart'])
  }
}
</script>
<style>
  .el-breadcrumb__inner,.el-breadcrumb__inner.is-link, .product_list {
    color:rgb(233, 215, 184);
  }
  .title {
    margin-bottom: 10px;
  }
</style>