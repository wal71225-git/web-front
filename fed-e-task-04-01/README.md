### 1. 请简述 React 16 版本中初始渲染的流程
* 核心过程 JSX -> babel -> createElement -> ReactElement -> render -> workInProgress Fiber -> commit -> getSnapShotBeforeUpdate -> dom ->lifeCircle/hook
* (1) JSX 转换成 react 元素
  * 根据传入的元素调用react.createElement方法传入（类型，props，子组件）创建react元素： 
    * babel-react 会将jsx 调用 React.createElement
    * React.createElement 会 jsx 转换成 react element （react element 就是 一个用来描述react 元素的对象。）
* (2) render 此阶段负责创建 Fiber 数据结构并为 Fiber 节点打标记，标记当前 Fiber 节点要进行的 DOM 操作。
      * 首先为每一个react 元素构建 fiber 对象 (workInProgress Fiber 树）创建 此 fiber 对象对应的 DOM 对象，为 fiber 对象添加 effectTag 属性 *（用来记录当前 Fiber 要执行的 DOM 操作），然后在render 结束后， fiber 会被保存到 fiberroot 中。
        * 代码层步骤：
        * 将子树渲染到容器中 (初始化 Fiber 数据结构: 创建 fiberRoot 及 rootFiber)
        * 判断是否为服务器端渲染 如果不是服务器端渲染，清空 container 容器中的节点
        * 通过实例化 ReactDOMBlockingRoot 类创建 LegacyRoot，创建 LegacyRoot 的 Fiber 数据结构
        * 创建 container，创建根节点对应的 fiber 对象
        * 获取 container 的第一个子元素的实例对象
        * 计算任务的过期时间，再根据任务过期时间创建 Update 任务，将任务(Update)存放于任务队列(updateQueue)中。判断任务是否为同步 调用同步任务入口。
        * 构建 workInProgress Fiber 树
* (3) 渲染
   * 先获取到render 的结果， 在 fiberroot 中的 新构建的 workInProgress Fiber 树
   * 根据 fiber 中的 effectTag 属性进行相应的 DOM 操作
### 2. 为什么 React 16 版本中 render 阶段放弃了使用递归
* 在React 16之前的版本中采用递归执行。递归耗内存，它使用 JavaScript 自身的执行栈，更新一旦开始，中途就无法中断。当VirtualDOM 树的层级很深时，virtualDOM 的比对就会长期占用 JavaScript 主线程，递归更新的时间就会超过16ms，由于 JavaScript 又是单线程的无法同时执行其他任务，所以在比对的过程中无法响应用户操作，无法即时执行元素动画，造成了页面卡顿的现象。
* 而React16架构可以分为三层：Scheduler，Reconciler，Renderer,与之前不同的是Reconciler和Renderer不再交替执行，而是当Scheduler将任务交给Reconciler后，Reconciler会为变化的虚拟DOM打上代表增/删/更新的标记，整个Scheduler与Reconciler的工作都在内存中进行。只有当所有组件都完成Reconciler的工作，才会统一交给Renderer。并且采用双缓存用作统一替换，用户也不会看到更新不完全的真实dom。它放弃了 JavaScript 递归的方式进行 virtualDOM 的比对，而是采用循环模拟递归。而且比对的过程是利用浏览器的空闲时间完成的，不会长期占用主线程，这就解决了 virtualDOM 比对造成页面卡顿的问题。

### 3. 请简述 React 16 版本中 commit 阶段的三个子阶段分别做了什么事情
* (1)commitBeforeMutationEffects阶段（执行DOM操作前）:处理类组件的getSnapShotBeforeUpdate 生命周期函数
处理DOM节点渲染/删除后的 autoFocus、blur逻辑；
调用getSnapshotBeforeUpdate生命周期钩子；
调度useEffect。
* (2)commit MutationEffects阶段（根据effectTag执行DOM操作）:将 workInProgress Fiber 树变成 current Fiber 树
如果该fiber类型是ClassComponent的话，执行getSnapshotBeforeUpdate生命周期api，将返回的值赋到fiber对象的__reactInternalSnapshotBeforeUpdate上；
如果该fiber类型是FunctionComponent的话，执行hooks上的effect相关 API。 
* (3)commitLayoutEffects （执行 DOM 操作后）：commitHookEffectList()阶段，调用类组件生命周期函数或者函数组件的钩子函数
重置 nextEffect，useEffect是让FunctionComponent产生副作用的hooks，当使用useEffect后，会在fiber上的updateQueue.lastEffect生成effect链，具体请看ReactFiberHooks.js中的pushEffect()

* 作用：循环FunctionComponent上的effect链，并根据每个effect上的effectTag，执行destroy/create操作（作用类似于componentDidMount/componentWillUnmount）


### 4. 请简述 workInProgress Fiber 树存在的意义是什么
* 在React中最多会同时存在两棵Fiber树。当前屏幕上显示内容对应的Fiber树称为current Fiber树，正在内存中构建的Fiber树称为workInProgress Fiber树，它反映了要刷新到屏幕的未来状态。current Fiber树中的Fiber节点被称为current fiber。workInProgress Fiber树中的Fiber节点被称为workInProgress fiber，它们通过alternate属性连接。
* React应用的根节点通过current指针在不同Fiber树的rootFiber间切换来实现Fiber树的切换。当workInProgress Fiber树构建完成交给Renderer渲染在页面上后，应用根节点的current指针指向workInProgress Fiber树，此时workInProgress Fiber树就变为current Fiber树。每次状态更新都会产生新的workInProgress Fiber树，通过current与workInProgress的替换，完成DOM更新。由于有两颗fiber树，实现了异步中断时，更新状态的保存，中断回来以后可以拿到之前的状态。并且两者状态可以复用，节约了从头构建的时
* workInProgress在内存中构建，构建完成才统一替换，这样不会产生不完全的真实dom。