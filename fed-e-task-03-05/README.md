# 第1题 Vue 3.0 性能提升主要是通过哪几方面体现的？
1.响应式系统升级（使用proxy）
2.优化编译过程
   提升静态节点，diff时只需比较静态节点，缓存事件处理函数
3.源码体积优化
   移除了不常用API(inline-template,filter等)
   tree-shaking

# 第2题 Vue 3.0 所采用的 Composition Api 与 Vue 2.x使用的Options Api 有什么区别？

Options Api
1.包含一个描述文件(data,methods,props等)选项的对象
2.开发复杂组件，同一个功能逻辑的代码被拆分到不同选项

# 第3题 Proxy 相对于 Object.defineProperty 有哪些优点？


# 第4题 Vue 3.0 在编译方面有哪些优化？


# 第5题 Vue.js 3.0 响应式系统的实现原理？
