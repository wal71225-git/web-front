import isFunctionComponent from './isFunctionComponent'
import isFunction from './isFunction'
import mountNativeElement from './mountNativeElement'
/**
 * 该方法用于组件生成真实dom并渲染到页面
 * @param {*} virtualDOM 
 * @param {*} container 
 */
const mountComponent = (virtualDOM, container, oldDom) => {
  let nextVirtualDOM = null
  let classVirtualDOM = null
  let component = null
  // 转换成普通虚拟dom格式
  // 如果是函数组件,
  if(isFunctionComponent(virtualDOM)){
    nextVirtualDOM = buildFunctionComponent(virtualDOM)
  } else {
    // 类组件
    nextVirtualDOM = buildClassComponent(virtualDOM)
    component = nextVirtualDOM.component
  }
  // 渲染真实dom
  if(isFunction(nextVirtualDOM)) {
    mountComponent(nextVirtualDOM, container, oldDom)
  } else {
    mountNativeElement(nextVirtualDOM, container, oldDom)
  }

  // 类组件实现ref
  if (component) {
    component.componentDidMount()
    if (component.props && component.props.ref) {
      component.props.ref(component)
    }
  }

}
// 函数组件转普通虚拟dom
const buildFunctionComponent = virtualDOM => {
  return virtualDOM.type(virtualDOM.props||{})
}

// 类组件转虚拟dom
const buildClassComponent = virtualDOM => {
  const component = new virtualDOM.type(virtualDOM.props || {})
  const nextVirtualDOM = component.render()
  nextVirtualDOM.component = component
  return nextVirtualDOM
}
export default mountComponent