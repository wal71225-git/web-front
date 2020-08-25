// 纯函数 相同的输入永远得到相同的输出
// slice  splice 
let array = [1,2,3,4,5,6]

// 纯函数
console.log(array.slice(0,3))
console.log(array.slice(0,3))
console.log(array.slice(0,3))

// 非纯函数
console.log(array.splice(0,3))
console.log(array.splice(0,3))
console.log(array.splice(0,3))