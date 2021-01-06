import mountElement from './mountElement'
import updateTextNode from './updateTextNode'
import updateElementNode from './updateElementNode'
const diff = (virtualDOM, container, oldDom) => {
  const oldVirtualDOM = oldDom && oldDom._virtualDOM
  /**
   * virtualDOM有两种形式，一种是普通的virtualDOM，另一种是组件形式的，在转换真实dom时要分别处理
   */
  // 首先判断是否有oldDom
  if (!oldDom) {
    // 没有旧的dom，就去生成真实dom
    mountElement(virtualDOM, container, oldDom)
  } else if(oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) { // 如果节点类型相同
    if(virtualDOM.type === "text") { // 如果是文本节点，更新文本内容
      updateTextNode(virtualDOM, oldVirtualDOM, oldDom)
    } else { // 如果是元素节点
      updateElementNode(oldDom, virtualDOM, oldVirtualDOM)
    }
    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDom, oldDom.childNodes[i])
    })
  }
}
export default diff 