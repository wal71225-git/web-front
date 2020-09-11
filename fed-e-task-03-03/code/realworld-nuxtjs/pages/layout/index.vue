<template>
 <div> 
   <!-- 头部start -->
      <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/editor" > <i class="ion-compose"></i>&nbsp;New Post </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/setting" > <i class="ion-gear-a"></i>&nbsp;Settings </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login" > Sign in </nuxt-link>
          </li>
           <li class="nav-item">
            <nuxt-link class="nav-link" to="/reginster" > Sign Up </nuxt-link>
          </li>
          <li class="nav-item"> <nuxt-link class="nav-link" to="/profile/123"> <img class="user-pic" src="http://toutiao.meiduo.site/FtNcS8sKFSYQbtBbd40eFTL6lAs_"> lpz999 </nuxt-link> </li>
        </ul>
      </div>
    </nav>
   <!-- 头部end   -->
   <!-- 子路由 -->
   <nuxt-child/>
   <!-- 底部start -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
   <!-- 底部end   -->
 </div> 
</template> 
 <script> 
  import { mapState } from 'vuex'
   export default { 
     name: 'LayoutIndex',
     computed: {
       ...mapState(['user'])
     }
  }
</script>