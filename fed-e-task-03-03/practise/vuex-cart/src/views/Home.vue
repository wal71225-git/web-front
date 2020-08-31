<template>
<div>
  <div class="home-main">
    <div class="title">Vuex- 购物车</div>
    <pop-cart></pop-cart>
  </div>
  <router-view />
</div>
</template>
<script>
  import popCart from '../components/pop-cart';
  export default {
    name: "Home",
    components: {
      popCart
    }
  };
</script>
<style>
  .home-main {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .el-breadcrumb__inner,.el-breadcrumb__inner.is-link, .product_list {
    color:rgb(233, 215, 184);
  }
  .title {
    margin-bottom: 10px;
  }
</style>