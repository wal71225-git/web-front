<template>
  <div class="home">
    <bus01></bus01>
    <bus02 :num='num'></bus02>
  </div>
</template>

<script>
// @ is an alias to /src
import bus01 from '@/components/event-bus/bus-01.vue'
import bus02 from '@/components/event-bus/bus-02.vue'
export default {
  name: 'Home',
  components: {
    bus01,
    bus02
  },
  data () {
    return {
      num: 0
    }
  }
}
</script>
