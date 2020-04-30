// 引入 http 模块
let http = require("http");
// 配置请求参数
let options = {
    host:"localhost", // 127.0.0.1
    port:8888,
    path:"/index.html"
}
// 向服务器发起请求
let req = http.request(options,function(response){
    let body = ""; // 接收返回的数据
    response.on("data",function(data){
        console.log(body);
        body += data; // 拼接返回的数据
    })
    response.on("end",function(){
        // 数据接收完成
        console.log(body);
    })
})
// 结束请求
req.end();