import diff from "./diff";
const updateElement = (virtualDOM, oldComponent, oldDom, container) => {
  oldComponent.componentWillReceiveProps(virtualDOM.props)
  if (oldComponent.shouldComponentUpdate(virtualDOM.props)) { // 根据props是否相同来判断是否需要更新
     // 未更新前的props
     let prevProps = oldComponent.props
     oldComponent.componentWillUpdate(virtualDOM.props) // 组件将要更新执行的生命周期函数
     oldComponent.updateProps(virtualDOM.props) // 组件更新props
     let nextVirtualDOM = oldComponent.render() // 获取最新的虚拟dom
     nextVirtualDOM.component = oldComponent // 更新实例对象
     diff(nextVirtualDOM, container, oldDom) // 执行比对
     oldComponent.componentDidUpdate(prevProps)
  }
}
export default updateElement