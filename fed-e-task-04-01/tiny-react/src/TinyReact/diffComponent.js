import mountElement from './mountElement'
import updateComponent from './updateComponent'
/**
 * 此方法主要用来更新组件的情况，包括同一种函数组件和不是同一个函数组件
 */
  // 1) virtualDOM 组件本身的 virtualDOM 对象 通过它可以获取到组件最新的 props
  // 2) oldComponent 要更新的组件的实例对象 通过它可以调用组件的生命周期函数 可以更新组件的 props 属性 可以获取到组件返回的最新的 Virtual DOM
  // 3) oldDom 要更新的 DOM 象 在更新组件时 需要在已有DOM对象的身上进行修改 实现DOM最小化操作 获取旧的 Virtual DOM 对象
  // 4) container 如果要更新的组件和旧组件不是同一个组件 要直接将组件返回的 Virtual DOM 显示在页面中 此时需要 container 做为父级容器
const diffComponent = (virtualDOM, oldComponent, oldDom, container) => {
    // 判断是否为同一个组件
    if(isSameComponent(virtualDOM, oldComponent)) {
      // 同一组件更新props
      updateComponent(virtualDOM, oldComponent, oldDom, container)
    } else {
      // 不是同一组件，直接替换旧组件
      mountElement(virtualDOM, container, oldDom)
    }                                                    
}
function isSameComponent(virtualDOM, oldComponent) {
  return oldComponent && virtualDOM.type == oldComponent.constructor
}
export default diffComponent