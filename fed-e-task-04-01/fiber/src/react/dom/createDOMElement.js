import updateElementNode from './updateElementNode'
/**
 * 此方法主要用来根据虚拟dom创建dom节点
 */
const createDOMElement = virtualDOM => {
  let newElement = null
  // 判断是文本节点还是元素节点
  if (virtualDOM.type === 'text') {
    // 如果是文本节点就创建一个文本节点
    newElement = document.createTextNode(virtualDOM.props.textContent)
  } else {
    // 否则创建一个元素节点
    newElement = document.createElement(virtualDOM.type)
    updateElementNode(newElement,virtualDOM) // 为元素设置属性
  }
  return newElement
}
export default createDOMElement