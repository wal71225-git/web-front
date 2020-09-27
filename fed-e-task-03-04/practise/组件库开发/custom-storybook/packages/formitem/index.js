// 打包入口
import FormItem  from './src/formItem.vue'
FormItem.install = Vue => {
    Vue.componet(FormItem.name, FormItem)
}
export default FormItem