<template>
  <div>
    <button @click="add">+</button>
    <input type="text" v-model="value"/>
    <button @click="sub">-</button>
  </div>
</template>
<script>
import bus from './eventbus'
export default {
  name: 'bus-02',
  props: {
    num: Number
  },
  data () {
    return {
      value: 0
    }
  },
  created () {
    this.value = this.num
  },
  methods: {
    add () {
      this.value++
      bus.$emit('numchange', this.value)
    },
    sub () {
      this.value--
      bus.$emit('numchange', this.value)
    }
  }
}
</script>
