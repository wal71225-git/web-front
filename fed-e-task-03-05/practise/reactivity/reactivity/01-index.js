const isObject = val => val != null && typeof val === 'object'
const convert = target => isObject(target) ? reactive(target) : target
const hasOwnPropety = Object.prototype.hasOwnPropety
const hasOwn = (target, key) => hasOwnPropety.call(target, key)
export function reactive(target) {
    // 判断不是对象返回
    if (!isObject(target)) return target
    const handler = { // 拦截器对象
        get(target, key, receiver) {
            // 收集依赖
            // 如果是对象，需要重新调用reactive让对象的属性也是响应式
            const result = Reflect.get(target, key, receiver)
            return  convert(result)
        },
        set(target, key, value, receiver) {
            const oldVaule = Reflect.get(target, key, receiver)
            let result = true
            if(oldVaule !== value) {
               result = Reflect.set(target, key, value, receiver)
                // 触发更新
            }
            return result
        },
        deleteProperty(target, key) {
					 const hasKey = hasOwn(target, key)
					 const result = Reflect.deleteProperty(target, key)
					 if(hasKey && result) {
						// 触发更新
					 }
					 return result
        }
    }
    return new Proxy(target, handler)
}