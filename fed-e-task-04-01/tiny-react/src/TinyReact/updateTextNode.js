/**
 * 此方法用来更新文本节点
 */
const updateTextNode = (virtualDOM, oldVirtualDOM, oldDOM) => {
  // 如果新节点文本和旧节点文本不一样才会更新文本
  if(virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
    oldDOM.textContent = virtualDOM.props.textContent
    oldDOM._virtualDOM = virtualDOM
  }
}
export default updateTextNode