import diff from './diff'
/**
 * 
 * @param {\} virtualDOM jsx虚拟dom
 * @param {*} container 虚拟dom转换成真实dom后的容器
 * @param {*} oldDom 旧的dom节点
 */
// render方法是开放给外部调用的方法，虚拟dom转换成真实dom
const render = (virtualDOM, container, oldDom = container.firstChild) => {
  // 用来比较新旧节点，并创建真实dom
  diff(virtualDOM, container, oldDom)
}
export default render