<template>
    <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item" v-if="user">
              <nuxt-link exact class="nav-link" :class="{'active': tab === 'your_feed'}"
               :to="{name: 'home', query: {tab: 'your_feed'}}">Your Feed</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link exact class="nav-link" :class="{'active': tab === 'global_feed'}"
               :to="{name: 'home'}">Global Feed</nuxt-link>
            </li>
            <li class="nav-item" v-if="tag">
              <nuxt-link exact class="nav-link" :class="{'active': tab === 'tag'}" 
              :to="{name: 'home', query: {tab: 'tag', tag: tag}}">#{{tag}}</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="article-preview" v-for="article in articles" :key="article.slug">
          <div class="article-meta">
            <nuxt-link :to="'/profile/'+article.author.username">
              <img :src="article.author.image" />
            </nuxt-link>
            <div class="info">
              <nuxt-link class="author" :to="`/profile/${article.author.username}`" > 
              {{ article.author.username }} 
              </nuxt-link>
              <span class="date">{{ article.createdAt }}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{ active: article.favorited }">
              <i class="ion-heart"></i> {{ article.favoritesCount }}
            </button>
          </div>
           <nuxt-link :to="{ name: 'article', params: { slug: article.slug } }" class="preview-link" > 
             <h1>{{ article.title }}</h1> 
             <p>{{ article.description }}</p> 
             <span @click="$router.push({ name: 'article', params: { slug: article.slug } })" >Read more...</span> 
           </nuxt-link>
        </div>
        <!-- 分页列表start -->
        <nav> 
          <ul class="pagination"> 
            <li class="page-item" :class="{active: item === page }" v-for="item in totalPage" :key="item" > 
                <nuxt-link class="page-link" :to="{name: 'home', query: { page: item,tag: $route.query.tag}}" >{{ item }}</nuxt-link> 
            </li> 
          </ul> 
        </nav>
        <!-- 分页列表end -->
      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>
          <div class="tag-list">
            <nuxt-link v-for="tag in tags" :key="tag" :to="{name: 'home', query: {page: $route.query.page,tag: tag, tab: 'tag'}}" class="tag-pill tag-default">
              {{tag}}
            </nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>
<script>
  import article from '@/api/article.js'
  import tagApi from '@/api/tag'
  import { mapState } from 'vuex'
  export default {
    name: 'HomeIndex',
    async asyncData({ query }) {
      const page = Number.parseInt(query.page || 1) // 想要查询的页数
      const limit = 5 // 每页多少数据
      // const {data} = await article.getArticles({
      //   limit,
      //   offset: (page-1) * limit
      // })
      // const {data: tags} = await tag.getTags()
      // 没有关联的异步任务，使用Promise.all做优化
      const tab = query.tab || "global_feed"  // tab页面
      const tag = query.tag // tag
      const [articleRes, tagRes] = await Promise.all([
          article.getArticles({
            limit,
            offset: (page-1) * limit,
            tag
          }),
          tagApi.getTags()
      ])
      const { articles, articlesCount } = articleRes.data
      const { tags } = tagRes.data;
      return {
        limit, 
        page,
        tags, // 标签列表
        tag, // 当前标签
        tab, // 当前tab
        articles, // 文章列表
        articlesCount // 文章总数量
      }
    },
    watchQuery: ['page','tag'],
    computed: {
      ...mapState(['user']),
      totalPage () { 
        return Math.ceil(this.articlesCount / this.limit) }
    }
  }
</script>