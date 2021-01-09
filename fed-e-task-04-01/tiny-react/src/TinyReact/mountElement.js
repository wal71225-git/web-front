import mountNativeElement from './mountNativeElement'
import isFunction from './isFunction'
import mountComponent from './mountComponent'
/**
 * 此方法主要用于生成真实dom
 *
 * virtualDOM有两种形式，一种是普通的virtualDOM，另一种是组件形式的，在转换真实dom时要分别处理
 */
const mountElement = (virtualDOM, container, oldDom) => {
  // 分别区分是普通virtualDOM还是组件virtualDOM来处理
  // 如果是普通virtualDOM，执行mountNativeElement方法
  if(isFunction(virtualDOM)) {
    // 组件类型
    mountComponent(virtualDOM, container, oldDom)
  } else {
    mountNativeElement(virtualDOM, container, oldDom)
  }
}
export default mountElement