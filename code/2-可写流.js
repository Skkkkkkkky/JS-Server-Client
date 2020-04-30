// 引入需要的文件模块
let fs = require("fs");
// 需要写入的数据
let data = "只是一条简单的数据";
// 创建可写流
let writeStream = fs.createWriteStream("output.txt");
// 将数据写入
for(let i = 0;i<10;i++){
    writeStream.write(data);
}
// 写入结束
writeStream.end();
writeStream.on("finish",function(){
    console.log("数据已经写进去啦");
})