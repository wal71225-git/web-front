// 获取节点tag类型
const getTag = vdom => {
    // 普通节点
    if (typeof vdom.type === 'string') {
        return "host_component"
    }
}
export default getTag