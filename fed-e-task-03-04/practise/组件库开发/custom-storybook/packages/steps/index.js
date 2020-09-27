// 打包入口
import Steps  from './src/steps.vue'
Steps.install = Vue => {
    Vue.componet(Steps.name, Steps)
}
export default Steps