// 函数柯里化

// 不纯的函数 
let mini = 18 
function checkAge (age) { 
  return age >= mini 
}
// 纯的(有硬编码，后续可以通过柯里化解决) 
function checkAge (age) { 
  let mini = 18 
  return age >= mini 
}

// 柯里化 
function checkAge (min) {
   return function (age) { 
     return age >= min 
    } 
}

// ES6 写法 
let checkAge = min => (age => age >= min) 
let checkAge18 = checkAge(18) 
let checkAge20 = checkAge(20) 
checkAge18(24) 
checkAge18(20)