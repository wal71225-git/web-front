<template>
  <div class="article-page">
    <div class="banner">
        <div class="container">
            <h1>{{article.title}}</h1>
        </div>
    </div>
    <div class="container page">
        <div class="row article-content">
          <div class="col-md-12">
            {{article.body}}
          </div>
        </div>
        <hr />
        <div class="article-actions">
            <article-meta :article="article"></article-meta>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-8 offset-md-2">
              <article-comment :article="article"></article-comment>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import articleApi from '@/api/article'
import articleMeta from '@/pages/components/article/article-meta.vue'
import articleComment from '@/pages/components/article/article-component.vue'
export default {
  name: 'ArticleIndex',
  data () {
    return {
    }
  },
  async asyncData({params}) {
   const {data} = await articleApi.getArticle(params.slug)
   return data
  },
  head() {
    return {
        title : `${this.article.title}`
    }
  },
  components: {
    articleMeta,
    articleComment
  }
}
</script>