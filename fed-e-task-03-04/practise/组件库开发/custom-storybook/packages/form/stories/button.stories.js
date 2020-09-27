import LyInput from '../'
// 注册组件
export default {
  title: 'LyButton',
  component: LyInput
}
// 导出stories
export const buttonShow = () => ({
  components: { LyInput },
  template: '<ly-input @click="login">{{content}}</ly-input>',
  data() {
    return {
      content: '登录'
    }
  },
  methods: {
    login () {
      alert('登录成功')
    }
  },
})