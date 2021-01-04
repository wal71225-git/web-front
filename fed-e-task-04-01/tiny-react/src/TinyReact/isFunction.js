/**
 * 此方法是用来判断是否是组件类型
 * @param {*} virtualDOM 
 */
const isFunction = virtualDOM => {
  return virtualDOM && typeof virtualDOM.type == 'function'
}
export default isFunction