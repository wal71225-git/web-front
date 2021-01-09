import createDOMElement from './createDOMElement'
import unmountNode from './unmountNode'
/**
 * 该方法用于普通虚拟dom生成真实dom并渲染到页面
 * @param {*} virtualDOM 
 * @param {*} container 
 */
const mountNativeElement = (virtualDOM, container, oldDom) => {
    let newElement = createDOMElement(virtualDOM)
    // 判断旧的DOM对象是否存在 如果存在 删除
    if (oldDom) {
      unmountNode(oldDom)
    }
    container.appendChild(newElement)
      // 获取组件实例对象
    const component = virtualDOM.component
    if(component) {
       component.setDom(newElement)
    }
}
export default mountNativeElement