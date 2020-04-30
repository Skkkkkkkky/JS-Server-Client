/*
    旧的不安全的创建缓冲区的方式
    let buffer = new Buffer(10);
    console.log(buffer);
*/
// 新的方式
let newBuffer = Buffer.alloc(10);
console.log(newBuffer);
// 通过给定的数组创建 Buffer
let buf = Buffer.from([1,20,3,40,5]);
console.log(buf);