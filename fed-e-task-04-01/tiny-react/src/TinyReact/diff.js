import mountElement from './mountElement'
const diff = (virtualDOM, container, oldDom = container.firstChild) => {
  /**
   * virtualDOM有两种形式，一种是普通的virtualDOM，另一种是组件形式的，在转换真实dom时要分别处理
   */
  // 首先判断是否有oldDom
  if (!oldDom) {
    // 没有旧的dom，就去生成真实dom
    mountElement(virtualDOM, container, oldDom)
  } else {

  }
}
export default diff 