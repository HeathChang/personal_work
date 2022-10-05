//쿼리 스트링사용하여 사용자 요청을 구분해 서로 다른 웹페이지 처리
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
	var _url = request.url;
	console.log(_url);
	var queryData = url.parse(_url, true).query;
	//parse: 웹브라우저를 통해 요청한 URL을 나타내는 변수에서 쿼리스트링 문자열만 추출

	console.log(queryData);

	if ( _url == '/' ) {
		_url = '/index.html';
	}
	if ( _url == '/favicon.ico' ) {
		return response.writeHead(404);
	}
	response.writeHead(200);
	console.log(__dirname + _url);
	response.end(queryData.id);
	//↑ 위의 명령을 통해 웹서버가 웹 브라우저의 요청에 응답
});
app.listen(3000);