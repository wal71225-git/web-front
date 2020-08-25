//使用Promise改进如下代码
setTimeout(function(){
    var a =  'hello';
    setTimeout(function(){
       var b = 'lagou';
       setTimeout(function(){
           var c = 'I Love U';
           console.log(a+b+c);
       },10)
    },10)
},10)

//使用Promise改进
Promise.resolve('hello').then((value) => {
    return value + 'lagou';
}).then((value) => {
    return value + 'I Love U';
}).then((value) => {
    console.log(value);
})