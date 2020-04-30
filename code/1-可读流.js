// 引入 fs 模块
let fs = require("fs");
// 读取数据 
// let data = fs.readFileSync("1-可读流.js");
// console.log(data);
let data = "";
// let readStream = fs.createReadStream("1-可读流.js");
// 下面这行代码是出现读取错误的
let readStream = fs.createReadStream("1-可读流?.js");
// 读取过程
readStream.on("data",function(abc){
    data += abc;
})
readStream.on("end",function(){
    console.log(data);
})
// 如果出现错误
readStream.on("error",function(err){
    console.log(err);
})