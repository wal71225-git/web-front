// 打包入口
import Input  from './src/input.vue'
Input.install = Vue => {
    Vue.componet(Input.name, Input)
}
export default Input