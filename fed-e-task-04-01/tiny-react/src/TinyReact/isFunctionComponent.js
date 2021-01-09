import isFunction from './isFunction'
/**
 * 此方法是用来判断组件是函数还是类
 */
const isFunctionComponent = virtualDom => {
  const type = virtualDom.type
  return type && isFunction(virtualDom) && !(type.prototype && type.prototype.render)
}
export default isFunctionComponent