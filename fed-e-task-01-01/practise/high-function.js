// 什么是高阶函数
// 1.可以把函数作为参数传递给另一个函数
// 2.可以把函数作为另一个函数的返回结果
// forEach 函数作为参数
function forEach (array, fn) { 
  for (let i = 0; i < array.length; i++) { 
    fn(array[i]) 
  } 
}

// 函数作为返回值
function makeFn () { 
  let msg = 'Hello function' 
  return function () { 
    console.log(msg) 
  } 
}


// 使用高阶函数的意义
// 1. 可以屏蔽细节，只关注目标
// 2. 用来抽奖通用问题

// 面向过程
let array = [1, 2, 3, 4] 
for (let i = 0; i < array.length; i++) { 
  console.log(array[i]) 
}
// 高阶函数
// 常用高阶函数forEach map filter every some find/findIndex reduce sort
function forEach(arr, fn) { // 模拟实现forEach
    for(let i = 0; i < arr.length; i++) {
      fn(arr[i])
    }
}
forEach(array, item => { 
  console.log(item)
})

function filter(arr, fn) {
  let result = []
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}

let r = filter(array, item => { 
  return item % 2 === 0 
})

console.log(r)


const map = (array, fn) => { 
  let results = [] 
  for (const value of array) { 
    results.push(fn(value)) 
  }
  return results 
}
const every = (array, fn) => { 
  let result = true 
  for (const value of array) { 
    result = fn(value) 
    if (!result) { break }
  }
}
