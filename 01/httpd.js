const http = require("http");
const os = require("os");
http.createServer(function (request, response){
    console.log(request.url);
    response.write("<h1> Hello world</h1>");
    response.write("<p> user name in my OS:");
    response.write((os.userInfo().username));
    response.write(("</p>"))
    response.write((`<p> username in my OS: ${os.userInfo().username} </p>`));
    response.end();
}).listen((3000));
