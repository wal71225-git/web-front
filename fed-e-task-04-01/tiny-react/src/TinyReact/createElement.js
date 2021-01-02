/**
 * @param {*} type 元素类型
 * @param {*} props 元素属性
 * @param  {...any} children 子元素 
 */
const createElement = (type, props, ...children) => {
  return {
    type,
    props,
    children
  }
}
export default createElement