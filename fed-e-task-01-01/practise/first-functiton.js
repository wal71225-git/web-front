// 函数是一等公民
// 1. 函数赋值给变量
const foo = function () {
  console.log('foo')
}
foo()
// 2. 函数作为参数
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
 console.log(helloMessage() + name);
}
// 传递 `sayHello` 作为 `greeting` 函数的参数
greeting(sayHello, "JavaScript!"); // Hello, JavaScript!
// 3. 函数作为返回值

function sayHello() {
  return function() {
     console.log("Hello!");
  }
}
// 调用方式  sayHello()()