//queryString에 따라 다르게 동작하는  Node.js 
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
	var _url = request.url;
	console.log(_url);
	var queryData = url.parse(_url, true).query;
	//parse().query: 웹브라우저를 통해 요청한 URL을 나타내는 변수에서 쿼리스트링 문자열만 추출

	console.log(queryData);

	if ( _url == '/' ) {
		_url = '/index.html';
	}
	if ( _url == '/favicon.ico' ) {
		return response.writeHead(404);
	}
	response.writeHead(200);
	//template을  일반 문자열이 아닌, 템플릿 리터럴로 만들고자  [` `] 사용
	var template = `
    <!doctype html>
      <html>
        <head>
          <title>WEB1 - ${ queryData.id } </title>
          
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="index.html">WEB</a></h1>
          <ol>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
          </ol>
          <h2> ${ queryData.id }</h2>
          <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
          <img src="coding.jpg" width="100%">
          </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
          </p>
        </body>
      </html>
    `;
	response.end(template);
	//↑ 위의 명령을 통해 웹서버가 웹 브라우저의 요청에 응답
});
app.listen(3000);