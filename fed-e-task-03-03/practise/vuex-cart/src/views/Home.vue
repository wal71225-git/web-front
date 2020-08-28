<template>
  <div>
    <div class="title">Vuex- 购物车</div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Home",
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