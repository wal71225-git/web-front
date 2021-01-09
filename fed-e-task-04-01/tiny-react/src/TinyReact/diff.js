import mountElement from './mountElement'
import updateTextNode from './updateTextNode'
import updateElementNode from './updateElementNode'
import unmountNode from './unmountNode'
import createDOMElement from './createDOMElement'
import diffComponent from './diffComponent'
const diff = (virtualDOM, container, oldDom) => {
  const oldVirtualDOM = oldDom && oldDom._virtualDOM
  const oldComponent = oldVirtualDOM && oldVirtualDOM.component
  /**
   * virtualDOM有两种形式，一种是普通的virtualDOM，另一种是组件形式的，在转换真实dom时要分别处理
   */
  // 首先判断是否有oldDom
  if (!oldDom) {
    // 没有旧的dom，就去生成真实dom
    mountElement(virtualDOM, container, oldDom)
  } else if (virtualDOM.type === oldVirtualDOM.type && typeof virtualDOM.type !== 'function') { // 新旧节点类型不同直接用新节点替换旧节点 
    // 不需要对比
    // 使用新的 virtualDOM 对象生成真实 DOM 对象
    const newElement = createDOMElement(virtualDOM)
    // 使用新的 DOM 对象替换旧的 DOM 对象
    oldDom.parentNode.replaceChild(newElement, oldDom)
  } else if(typeof virtualDOM.type === 'function') {
    // 如果是组件, 就去更新组件
    diffComponent(virtualDOM, oldComponent, oldDom, container)
  } else if(oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) { // 如果节点类型相同
    if(virtualDOM.type === "text") { // 如果是文本节点，更新文本内容
      updateTextNode(virtualDOM, oldVirtualDOM, oldDom)
    } else { // 如果是元素节点
      updateElementNode(oldDom, virtualDOM, oldVirtualDOM)
    }
    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDom, oldDom.childNodes[i])
    })
    // 删除节点
    // 获取旧节点
    let oldChildNodes = oldDom.childNodes
    // 如果老节点比新的多，就删除节点
    if(oldChildNodes.length > virtualDOM.children.length) {
      for(let i = oldChildNodes.length - 1; i > virtualDOM.children.length - 1; i--) {
        unmountNode(oldChildNodes[i])
      }
    }
  }
}
export default diff 