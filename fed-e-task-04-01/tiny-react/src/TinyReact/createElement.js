/**
 * @param {*} type 元素类型
 * @param {*} props 元素属性
 * @param  {...any} children 子元素 
 */
const createElement = (type, props, ...children) => {
  // 内容节点也要以对象的形式显示
  const elements = [].concat(children).reduce((result,child) => {
    // 删除不用展示的节点
    if (child !== false && child !== true && child !== null) {
    // 遍历子元素，如果是对象直接返回对象，否则调用方法创建文本对象
      if (child instanceof Object) {
        // 对象
        result.push(child)
      } else {
        // 文本
        result.push(createElement("text", { textContent: child }))
      }
    }
    return result
  }, [])
  return {
    type,
    props: Object.assign({ children: elements }, props),
    children: elements
  }
}
export default createElement