
<template>
         <div>
            <form class="card comment-form" @submit.prevent="addComment">
              <div class="card-block">
                  <textarea class="form-control" v-model="comment" placeholder="Write a comment..." rows="3"></textarea>
              </div>
              <div class="card-footer">
                  <img :src="user.image" class="comment-author-img" />
                  <button class="btn btn-sm btn-primary">
                    Post Comment
                  </button>
              </div>
            </form>
            <div class="card" v-for="comment in comments" :key="comment.id">
              <div class="card-block">
                  <p class="card-text">{{comment.body}}</p>
              </div>
              <div class="card-footer">
                  <a href="" class="comment-author">
                  <img :src="comment.author.image" class="comment-author-img" />
                  </a>
                  &nbsp;
                  <a href="" class="comment-author">{{comment.author.username}}</a>
                  <span class="date-posted">{{comment.createdAt | date('MMM DD, YYYY')}}</span>
                  <span class="mod-options">
                  <i class="ion-edit"></i>
                  <i class="ion-trash-a"></i>
                  </span>
              </div>
            </div>
      </div>
</template>

<script>
import articleApi from '@/api/article'
import { mapState } from 'vuex'
export default {
  name: 'ArticleCommentIndex',
  props: {
    article: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      comments: [], //评论列表
      comment: '' // 评论
    }
  },
  async mounted() {
    const { data } = await articleApi.getComments(this.article.slug)
    this.comments = data.comments
  },
  methods: {
   async addComment() {
      // 添加文章评论
      const { data } = await articleApi.addComment({
        'comment': {
          body: this.comment
        },
        slug: this.article.slug
      })
      this.comments.splice(0, 0, data.comment)
      this.comment = ''
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>
