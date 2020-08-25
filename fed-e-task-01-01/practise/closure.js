// 可以在另一个作用域中调用一个函数的内部函数并访问到该函数的作用域中的成员
function makeFn () {
  let msg = 'hell closure'
  return function () {
    console.log(msg)
  }
}

makeFn()()


// once 函数
function once (fn) {
  let done = false
  return function () {
    if(!done) {
      done = true
      return fn.apply(this, arguments)
    }
  }
}

let pay = once(function (money) { 
  console.log(`支付：${money} RMB`) 
})
// 只会支付一次 
pay(5) 
pay(5)

