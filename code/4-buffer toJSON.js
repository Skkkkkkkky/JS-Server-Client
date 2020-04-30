let buf = Buffer.from("www.baidu.com");
let json = buf.toJSON(buf);

console.log(json);