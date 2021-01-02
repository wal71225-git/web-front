import mountNativeElement from './mountNativeElement'
/**
 * 此方法主要用于生成真实dom
 *
 * virtualDOM有两种形式，一种是普通的virtualDOM，另一种是组件形式的，在转换真实dom时要分别处理
 */
const mountElement = (virtualDOM, container) => {
  // 分别区分是普通virtualDOM还是组件virtualDOM来处理
  // 如果是普通virtualDOM，执行mountNativeElement方法
  mountNativeElement(virtualDOM, container)
}
export default mountElement