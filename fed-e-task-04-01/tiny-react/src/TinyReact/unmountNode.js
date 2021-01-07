/**
 * 此方法功能是删除旧节点
 */
const unmountNode = node => {
    // 获取节点的 _virtualDOM 对象
    const virtualDOM = node._virtualDOM
    // 1. 文本节点可以直接删除
    if (virtualDOM.type === "text") {
      // 删除直接
      node.remove()
      // 阻止程序向下执行
      return
   }
}
export default unmountNode