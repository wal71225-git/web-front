/**
 * 此方法主要是为元素设置属性
 * @param {*} element 元素
 * @param {*} virtualDOM 虚拟dom
 */
const updateElementNode = (element,virtualDOM, oldVirtualDOM = {}) => {
  // 获取节点属性对象
  const newProps = virtualDOM.props
  const oldProps = oldVirtualDOM.props || {}
  Object.keys(newProps).forEach(propName => {
      const newPropsValue = newProps[propName]
      const oldPropsValue = oldProps[propName]
      if(newPropsValue !== oldPropsValue) {
        // 判断是否是事件属性 类似onClick -> click
        if(propName.slice(0,2) === 'on') {
          // 获取事件名称
          const eventName = propName.slice(2).toLowerCase()
          element.addEventListener(eventName, newPropsValue)
          // 移除旧的事件
          if (oldPropsValue) {
            element.removeEventListener(eventName, oldPropsValue)
          }
        } else if(propName === "value" || propName === "checked") {
          // 判断是否是value checked
          element[propName] = newPropsValue
        } else if(propName !== "children") {
          // 判断是否是children属性，如果不是分别处理className和一般属性
          if(propName === 'className') {
            element.setAttribute('class', newPropsValue)
          } else {
            element.setAttribute(propName, newPropsValue)
          }
        }
      } 
  })
  Object.keys(oldProps).forEach(propName => {
    const newPropsValue = newProps[propName]
    const oldPropsValue = oldProps[propName]
    if(!newPropsValue) { // 如果在新节点中没有，表明该属性被删除
      // 如果是事件属性
      if(propName.slice(0,2) === 'on') {
        const eventName = propName.toLowerCase().slice(2)
        element.removeEventListener(eventName, oldPropsValue)
      } else if(propName !== 'children') {
        element.removeAttribute(propName)
      }
    }
  })
}
export default updateElementNode