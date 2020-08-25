var  arr = [12,34,32,89,4];

//使用数组排序
const arrc = arr.sort((a, b) => {return a-b})[0];

console.log(arrc);

//使用解构和Math方法

const minResult = Math.min(...arr);

console.log(arrc);