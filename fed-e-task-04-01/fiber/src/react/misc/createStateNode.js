import  { createDOMElement }  from '../dom/index'
import { createReactInstance } from '../misc/index'
const createStateNode = fiber => {
  // 如果是普通元素节点，创建dom
  if(fiber.tag === 'host_component') {
    return createDOMElement(fiber)
  } else {
    return createReactInstance(fiber)
  }
}
export default createStateNode