<template>
  <div class="hello">
    <h1 @click="show">{{ msg }}</h1>
    <h1 @click="show">{{ message }}</h1>
  </div>
</template>

<script>
import mixins from '../mixins/mixins.js'
export default {
  name: 'HelloWorld',
  mixins: [mixins],
  created () {
    console.log('本身的钩子函数')
  },
  mounted () {
    this.msg = '333333'
  }
}
</script>
