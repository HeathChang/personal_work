var http = require('http');
var cookie = require('cookie');

http.createServer(function (request, response) {
  //response.writeHead(200, {
  //  'set-Cookie': ['yummy_cookie=choco', 'tasty_cookie=strawberry']
  //});
  var cookies = {};
  if (request.headers.cookie != undefined) {
    cookies = cookie.parse(request.headers.cookie);
  }
  console.log("쿠키정보:", cookies);
  response.end("Hello World");
}).listen(3000);
