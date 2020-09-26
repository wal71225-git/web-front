// 打包入口
import Button  from './src/button.vue'
Button.install = Vue => {
    Vue.componet(Button.name, Button)
}
export default Button