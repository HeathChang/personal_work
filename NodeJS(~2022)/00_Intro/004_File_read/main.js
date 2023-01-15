//queryString에 따라 다른 내용 보여주기
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
	var _url = request.url;
	var queryData = url.parse(_url, true).query;
	var title = queryData.id;
	if ( _url == '/' ) {
		title = 'Welcome';
	}
	if ( _url == '/favicon.ico' ) {
		return response.writeHead(404);
	}
	response.writeHead(200);
	//response 객체의 메소드에서 헤더 정보를 응답에 작성해서 내보내는 것
	fs.readFile(`data/${ queryData.id }`, 'utf8', function (err, description) {
		//첫번째 인자의 파일을 읽고, 해당 내용을 description 변수에 저장한다.
		var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${ title }</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${ title }</h2>
        <p>${ description }</p>
        //사용자가 요청한 쿼리 스트링에 따라 읽어온 파일 내용을 본문으로 표시한다.
      </body>
      </html>
      `;
		response.end(template);
	})
});
app.listen(3000);