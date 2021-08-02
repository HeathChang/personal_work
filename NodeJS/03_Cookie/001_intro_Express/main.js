var http = require('http');
var cookie = require('cookie');

http.createServer(function (request, response) {
  response.writeHead(200, {
    'set-Cookie': [
      'yummy_cookie=choco',
      'tasty_cookie=strawberry',
      //한달동안 유효
      `Permanent = cookies; Max-Age = ${60 * 60 * 24 * 30}`,
      'Secure = Secure; Secure',
      //웹 브라우저와 웹 서버가 HTTP 프로토콜로 통신하는 경우, 쿠키를 전송하지만, JS는 쿠키값을 가져올 수 없음
      'HttpOnly = HttpOnly; HttpOnly'
    ]
  });
  var cookies = {};
  if (request.headers.cookie != undefined) {
    cookies = cookie.parse(request.headers.cookie);
  }
  console.log("쿠키정보:", cookies);
  response.end("Hello World");
}).listen(3000);
