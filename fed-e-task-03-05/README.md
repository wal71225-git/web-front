# 第1题 Vue 3.0 性能提升主要是通过哪几方面体现的？
1. 响应式系统升级（使用proxy）
2. 优化编译过程
   提升静态节点，diff时只需比较静态节点，缓存事件处理函数
3. 
   移除了不常用API(inline-template,filter等)
   tree-shaking

# 第2题 Vue 3.0 所采用的 Composition Api 与 Vue 2.x使用的Options Api 有什么区别？

# Options Api
1.包含一个描述文件(data,methods,props等)选项的对象
2.开发复杂组件，同一个功能逻辑的代码被拆分到不同选项

# Composition Api
1.Vue.js 3.0 新增的一组 API
2.一组基于函数的 API
3.可以更灵活的组织组件的逻辑

# 第3题 Proxy 相对于 Object.defineProperty 有哪些优点？

  1. 可以直接监听对象而非属性
  2. 可以直接监听数组的变化
  3. 拦截方式较多
  4. Proxy返回一个新对象，可以只操作新对象达到目的，而Object.defineProperty只能遍历对象属性直接修改
  5. Proxy作为新标准将受到浏览器厂商重点持续的性能优化

# 第4题 Vue 3.0 在编译方面有哪些优化？
1. Vue.js 2.x 中通过标记静态根节点，优化 diff 的过程,而Vue.js 3.0 中标记和提升所有的静态节点，diff 的时候只需要对比动态节点内容
2. 生成block ， Block tree 是一个将模版基于动态节点指令切割的嵌套区块，每个区块内部的节点结构是固定的。每个区块只需要追踪自身包含的动态节点。
3. slot优化， Vue.js 3.0 优化了slot的生成，使得非动态slot中属性的更新只会触发子组件的更新。动态slot指的是在slot上面使用v-if，v-for，动态slot名字等会导致slot产生运行时动态变化但是又无法被子组件track的操作。

# 第5题 Vue.js 3.0 响应式系统的实现原理？
Vue3 使用 Proxy 对象重写响应式系统，这个系统主要有以下几个函数来组合完成的：
1. reactive:
   接收一个参数，判断这参数是否是对象。不是对象则直接返回这个参数，不做响应式处理
   创建拦截器对象 handler, 设置 get/set/deleteProperty
get
   收集依赖（track）
   返回当前 key 的值。
   如果当前 key 的值是对象，则为当前 key 的对象创建拦截器 handler, 设置 get/set/deleteProperty
   如果当前的 key 的值不是对象，则返回当前 key 的值
set
   设置的新值和老值不相等时，更新为新值，并触发更新（trigger）
deleteProperty
   当前对象有这个 key 的时候，删除这个 key 并触发更新（trigger）
   返回 Proxy 对象
2. effect: 接收一个函数作为参数。作用是：访问响应式对象属性时去收集依赖
3. track:
   接收两个参数：target 和 key
   如果没有 activeEffect，则说明没有创建 effect 依赖
   如果有 activeEffect，则去判断 WeakMap 集合中是否有 target 属性，
   WeakMap 集合中没有 target 属性，则 set(target, (depsMap = new Map()))
   WeakMap 集合中有 target 属性，则判断 target 属性的 map 值的 depsMap 中是否有 key 属性
   depsMap 中没有 key 属性，则 set(key, (dep = new Set()))
   depsMap 中有 key 属性，则添加这个 activeEffect
4. trigger:
   判断 WeakMap 中是否有 target 属性
   WeakMap 中没有 target 属性，则没有 target 相应的依赖
   WeakMap 中有 target 属性，则判断 target 属性的 map 值中是否有 key 属性，有的话循环触发收集的 effect()
