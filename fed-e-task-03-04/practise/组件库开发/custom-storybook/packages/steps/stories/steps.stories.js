import LySteps from '../'
// 注册组件
export default {
  title: 'LySteps',
  component: LySteps
}
// 导出stories
export const stepsShow = () => ({
  components: { LySteps },
  template: `<div>
                <ly-steps :active="active" :count="count"></ly-steps>
                <button @click="next">下一步</button>
            </div>`,
  data() {
    return {
      active: 0, // 当前进行到第几步
      count: 5 // 总共步骤
    }
  },
  methods: {
    next() {
      this.active < this.count && this.active++
    }
  }
})