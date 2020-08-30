<template>
  <div>
    <div class="title">Vuex- 购物车</div>
    <product></product>
  </div>
</template>
<script>
  import product from '../views/products';
  export default {
    name: "Home",
    component: {
      product
    }
  };
</script>
<style>
  .el-breadcrumb__inner,.el-breadcrumb__inner.is-link, .product_list {
    color:rgb(233, 215, 184);
  }
  .title {
    margin-bottom: 10px;
  }
</style>