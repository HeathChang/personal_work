//ROOT: 다른 경로가 붙지 않은 주소. (이때, 쿼리스트링은 포함되지 않는다)
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;
    // takes a URL string, parses it, and it will return a URL object with each part of the address as properties
    if(pathname == '/'){ //루트라면 기존 코드 실행
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
        //첫번째 인자의 파일을 읽고, 해당 내용을 description 변수에 저장한다.
        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ul>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ul>
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200);
        response.end(template);
      })
    }else { //루트가 아니면 새로운 코드를 실행
      console.log(url.parse(_url,true));
      //pathname: '/asjkdasd' 과 같은 경우 error 메세지 출력
      response.writeHead(404);
      response.end("Not Found");
    }
});
app.listen(3000);