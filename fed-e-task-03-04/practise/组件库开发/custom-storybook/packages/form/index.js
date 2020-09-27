// 打包入口
import Form  from './src/form.vue'
Form.install = Vue => {
    Vue.componet(Form.name, Form)
}
export default Form