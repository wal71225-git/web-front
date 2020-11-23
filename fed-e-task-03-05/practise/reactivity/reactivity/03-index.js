
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
            track(target, key)
            // 如果是对象，需要重新调用reactive让对象的属性也是响应式
            const result = Reflect.get(target, key, receiver)
            return convert(result)
        },
        set(target, key, value, receiver) {
            const oldVaule = Reflect.get(target, key, receiver)
            let result = true
            if (oldVaule !== value) {
                result = Reflect.set(target, key, value, receiver)
                // 触发更新
                trigger(target, key)
            }
            return result
        },
        deleteProperty(target, key) {
            const hasKey = hasOwn(target, key)
            const result = Reflect.deleteProperty(target, key)
            if (hasKey && result) {
                // 触发更新
                trigger(target, key)
            }
            return result
        }
    }
    return new Proxy(target, handler)
}
let activeEffect = null
export function effect(callback) {
    activeEffect = callback
    callback()
    activeEffect = null
}

// 收集依赖
let targetMap = new WeakMap()
export function track(target, key) {
    if (!activeEffect) return
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()))
    }
    let dep = depsMap.get(key)
    if (!dep) {
        depsMap.set(key, (dep = new Set()))
    }
    dep.add(activeEffect)
}

// 触发器（触发更新）
export function trigger(target, key) {
    const depsMap = targetMap.get(target)
    if (!depsMap) return
    const dep = depsMap.get(key)
    if (dep) {
        dep.forEach(effect => {
            effect()
        })
    }
}

// ref 转换响应式对象
export function ref(raw) {
    // 判断 raw 是否是ref 创建的对象，如果是的话直接返回
    if (isObject(raw) && raw.__v_isRef) {
        return
    }
    let value = convert(raw)
    const r = {
        __v_isRef: true,
        get value() {
            track(r, 'value')
            return value
        },
        set value(newValue) {
            if (newValue !== value) {
                raw = newValue
                value = convert(raw)
                trigger(r, 'value')
            }
        }
    }
    return r
}