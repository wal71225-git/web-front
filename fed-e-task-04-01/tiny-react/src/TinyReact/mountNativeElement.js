import createDOMElement from './createDOMElement'
/**
 * 该方法用于普通虚拟dom生成真实dom并渲染到页面
 * @param {*} virtualDOM 
 * @param {*} container 
 */
const mountNativeElement = (virtualDOM, container) => {
    let newElement = createDOMElement(virtualDOM)
    container.appendChild(newElement)
}
export default mountNativeElement