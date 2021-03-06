import { createTaskQueue, arrified, createStateNode, getTag} from '../misc/index'
let subTask = null // 要执行的子任务
let pendingCommit = null // 要执行的任务
const taskQueue = createTaskQueue()
const commitAllWork = fiber => {
  fiber.effects.forEach(item => {
    if (item.effectTag === "placement") { // 向页面中添加节点
      let fiber = item // 当前要添加的子节点
      let parentFiber = item.parent // 当前追加子节点的父级节点
      while(parentFiber.tag === 'class_component' || parentFiber.tag === 'function_component') {
        parentFiber = parentFiber.parent
      }
      if(fiber.tag === 'host_component') {
        parentFiber.stateNode.appendChild(fiber.stateNode)
      }
    }
  })
}
const getFirstTask = () => {
  // 从队列中获取任务
  const task = taskQueue.pop()
  // 返回最外层节点的fiber对象
  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null
  }
}
// 构建子节点fiber
const reconcileChildren = (fiber, children) => {
  // 因为子元素可能是对象, 也可能是数组，统一转换成数组处理
  const arrifiedChildren = arrified(children)
  let index = 0
  let element = null
  let newFiber = null
  let prevFiber = null
  while (index < arrifiedChildren.length) {
    element = arrifiedChildren[index]
    newFiber = {
      type: element.type,
      props: element.props,
      tag: getTag(element),
      effects: [],
      effectTag: 'placement',
      stateNode: null,
      parent: fiber
    }
    // 如果newFiber是普通元素节点stateNode存储的是dom对象，如果是组件对象存储的是实例对象
    newFiber.stateNode = createStateNode(newFiber)
    if (index == 0) {
      fiber.child = newFiber
    } else {
      prevFiber.sibling = newFiber
    }
    prevFiber = newFiber
    index++ 
  }
}
// 接收任务，执行任务
const executeTask = fiber => {
  // 获取子节点fiber对象
  if(fiber.tag === 'class_component') {
    reconcileChildren(fiber, fiber.stateNode.render())
  } else if (fiber.tag === 'function_component') {
    reconcileChildren(fiber, fiber.stateNode(fiber.props))
  } else {
    reconcileChildren(fiber, fiber.props.children)
  }
  // 如果fiber有子节点，就把子元素返回给调用此方法的对象，接着生成子元素fiber，这样就完成了左侧节点树（注意不包括同级节点）
  if (fiber.child) {
    return fiber.child
  }
    /**
   * 如果存在同级 返回同级 构建同级的子级
   * 如果同级不存在 返回到父级 看父级是否有同级
   */
  let currentExecutelyFiber = fiber
  while(currentExecutelyFiber.parent) {
    currentExecutelyFiber.parent.effects = currentExecutelyFiber.parent.effects.concat(
      currentExecutelyFiber.effects.concat([currentExecutelyFiber])
    )
      // 有同级节点就返回同级节点，否则返回父级节点
    if(currentExecutelyFiber.sibling) {
      return currentExecutelyFiber.sibling
    }
    currentExecutelyFiber = currentExecutelyFiber.parent
  }
  pendingCommit = currentExecutelyFiber
}
const workLoop = deadline => {
  /** 
   * 如果子任务不存在，就去获取子任务
  */
  if (!subTask) {
    subTask = getFirstTask()
  }
  /**
   * 如果任务存在并且浏览器有空余时间就调用
   * executeTask 方法执行任务 接受任务 返回新的任务
   * 如果subTask如果一直有任务就会一直执行
   */
  while (subTask && deadline.timeRemaining() > 1) {
    subTask = executeTask(subTask)
  }
  if(pendingCommit) {
    commitAllWork(pendingCommit)
  }
}
const performTask = deadline => {
  /**
   * 执行任务
   */
  workLoop(deadline)
  /**
   * 判断任务是否存在
   * 判断任务队列中是否还有任务没有执行
   * 再一次告诉浏览器在空闲的时间执行任务
   */
  if (subTask || !taskQueue.isEmpty()) {
    requestIdleCallback(performTask)
  }
}
export const render= (element, dom) => {
    /**
   * 1. 向任务队列中添加任务
   * 2. 指定在浏览器空闲时执行任务
   */
  /**
   * 任务就是通过 vdom 对象 构建 fiber 对象
   */
  taskQueue.push({
    dom,
    props: { children: element }
  })
  /**
   * 指定在浏览器空闲的时间去执行任务
   */
  requestIdleCallback(performTask)
}