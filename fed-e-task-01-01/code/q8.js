//setTimeout 宏任务
//new Promise 微任务可以立即执行
setTimeout(function(){
    console.log('1')
});

new Promise(function(resolve){
    console.log('2');
            resolve();
}).then(function(){
    console.log('3')
});

console.log('4');
//执行结果  2431