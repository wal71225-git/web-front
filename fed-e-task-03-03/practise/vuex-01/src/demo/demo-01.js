// 第一题
const man = {
  name: 'jscoder',
  age: 22
}
const proxy = new Proxy(man, {
  get : (target, property) => {
      if (property in target) {
          return target[property]
      }
      throw new Error('Property "$(property)" does not exist')
  }
})

// console.log(proxy.name)
// console.log(proxy.location)

// 第二题
function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

var light = function (timmer, cb) {
  return new Promise(function (resolve, reject) {
      setTimeout(function () {
          cb();
          resolve();
      }, timmer);
  });
};

var step = function () {
  Promise.resolve().then(function () {
      return light(3000, red);
  }).then(function () {
      return light(2000, green);
  }).then(function () {
      return light(1000, yellow);
  }).then(function () {
      step();
  });
}

// step();

// 第三题 按顺序写出控制台打印结果  （2020 碧桂园）

var User = {
  count: 1,
  action: {
    getCount: function() {
      return this.count
    }
  }
}
var getCount = User.action.getCount;
setTimeout(() => {
    console.log("result 1", User.action.getCount()) 
})

console.log("result 2", getCount())


// 第四题
// typeScript 和javaScript的区别
/*
*JavaScript是一种基于客户端浏览器的，基于对象、事件驱动式的脚本语言。
TypeScript是JavaScript类型的超类，它可以编译成纯JavaScript。
主要区别： 
TypeScript 从核心语言方面和类概念的模塑方面对 JavaScript 对象模型进行扩展。
JavaScript 代码可以在无需任何修改的情况下与 TypeScript 一同工作，同时可以使用编译器将 TypeScript 代码转换为 JavaScript。
TypeScript 通过类型注解提供编译时的静态类型检查。
TypeScript 中的数据要求带有明确的类型，JavaScript是弱类型不要求。
TypeScript 为函数提供了缺省参数值。
TypeScript 增加了静态类型、类、模块、接口和类型注解 JavaScript 中没有这些概念。
TypeScript 中引入了模块的概念，可以把声明、数据、函数和类封装在模块中。
*/
// typeScript用过哪些类型
// any number string boolean 数组[] 枚举 type interface 

// typeScript中type和interface的区别
// interface 可以 extends和implement，type不行，但type可以通过交叉类型实现
// type 可以声明基本类型别名，联合类型，元组等类型 interface不行
// interface 能够声明合并 type不行

// 第五题 对 async/await 的理解，分析内部原理

// 第六题 async/await 如果右边方法执行出错该怎么办？（百度一面 2020）
// 第七题 说一下 event loop 的过程？promise 定义时传入的函数什么时候执行？（小米 三面）
// 第八题 说一下防抖函数的应用场景，并简单说下实现方式 （滴滴）
// 第九题 说一下V8的垃圾回收机制 （小米）
// 第十题 performance API 中什么指标可以衡量首屏时间
// 第十一题 在 EcmaScript 新特性中，暂时性死区有什么作用
// 第十二题 观察者模式和发布订阅模式的区别标题
// 第十三题 gulp自己写过任务吗？说一下它的构建流程（阿里 2018）
// 第十四题 package-lock.json 有什么作用，如果项目中没有它会怎么样，举例说明
// 第十五题 webpack 常用配置项有哪些，并说明用途  （跟谁学 2020）
// 第十六题 阐述 webpack css-loader 的作用 和 原理？ 
// 第十七题 webpack中loader和plugin的区别是什么 （字节跳动 搜狐）
// 第十八题 webpack、rollup、parcel 它们的优劣？
// 第十九题 babel.config.js 和 .babelrc 有什么区别？
// 第二十题 webpack 中 tree shaking 的用途和原理是什么？
// 第二十一题 阐述一下  eventbus 的原理，讲述eventbus在vue中的实践   
// 第二十二题 vue-loader 的实现原理是什么
// 第二十三题 
