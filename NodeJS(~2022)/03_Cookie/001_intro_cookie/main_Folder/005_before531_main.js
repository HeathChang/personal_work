var http = require('http');
var cookie = require('cookie');

http.createServer(function (request, response) {
	console.log(request.headers.cookie);
	var cookies = {};
	if ( request.headers.cookie !== undefined ) {
		cookies = cookie.parse(request.headers.cookie);
	}
	console.log(cookies.yummy_cookie);
	// response.writeHead(200, {
	//   'Set-Cookie': [
	//     'yummy_cookie=choco',
	//     'tasty_cookie=strawberry',
	//     `Permanent=cookies; Max-Age=${60 * 60 * 24 * 30}`, //한달쿠키
	//     'Secure=Secure; Secure',
	//     'HttpOnly=HttpOnly; HttpOnly',
	//     'Path=Path; Path=/cookie', //특정 경로에서만 보임
	//     'Domain=Domain; Domain=o2.org' //서브도메인에서도 생성되는 쿠키를 만듬
	//   ]
	// });
	response.end('Cookie!!');
}).listen(3000);
