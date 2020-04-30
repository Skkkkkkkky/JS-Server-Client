// 引入 http 模块 负责创建服务器
let http = require("http");
// 引入 fs 文件模块
let fs = require("fs");
// 处理 url
let url = require("url");
// 创建一个服务器 回调函数有两个参数 ：请求 和 返回
http.createServer(function(request,response){
    console.log("请求来了");

    // 解析 url 路径
    let pathname = url.parse(request.url).pathname;
    console.log("路径名称："+pathname);
    fs.readFile(pathname.substr(1),function(err,data){
        // 如果没有页面
        if(err){
            // 404
            response.writeHead(404,{
                "Content-type":"text/html"
            })
            response.write("404");
        }
        else{
            response.writeHead(200,{
                "Content-type":"text/html"
            })
            response.write(data.toString());
        }
        response.end();
    })
}).listen(8888);
console.log("服务器在8888端口开启了！");