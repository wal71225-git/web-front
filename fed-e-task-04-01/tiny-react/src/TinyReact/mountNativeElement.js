import createDOMElement from './createDOMElement'
/**
 * 该方法用于普通虚拟dom生成真实dom并渲染到页面
 * @param {*} virtualDOM 
 * @param {*} container 
 */
const mountNativeElement = (virtualDOM, container) => {
    let newElement = createDOMElement(virtualDOM)
    container.appendChild(newElement)
      // 获取组件实例对象
    const component = virtualDOM.component
    if(component) {
       component.setDom(newElement)
    }
}
export default mountNativeElement