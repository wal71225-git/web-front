const isObject = val => val != null && typeof val === 'object'
export function reactive(target) {
    // 判断不是对象返回
    if (!isObject(target)) return target
}