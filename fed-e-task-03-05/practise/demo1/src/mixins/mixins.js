const mixin = {
  props: {
    msg: String
  },
  data () {
    return {
      message: 'hello mixin'
    }
  },
  created () {
    console.log('混入的钩子函数')
  },
  methods: {
    show () {
      console.log(this.msg)
    }
  }
}
export default mixin
