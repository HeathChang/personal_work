//ROOT: 다른 경로가 붙지 않은 주소. (이때, 쿼리스트링은 포함되지 않는다)
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    // takes a URL string, parses it, and it will return a URL object with each part of the address as properties
    if(pathname == '/'){ //1. 루트일  떄 처리
      if(queryData.id == undefined){ //2. 쿼리 스트링이 없을 때의 처리 (홈일때)
        var title = "Welcome";
        var description = "Hello, Node JS";
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
    }else{ //3. 쿼리 스트링이 있을 때의 처리 (홈이 아닐때)
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
        //첫번째 인자의 파일을 읽고, 해당 내용을 description 변수에 저장한다.
        var title =  queryData.id;
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
    }
    }else { //4. 루트가 아닐 때의 처리 (404)
      console.log(url.parse(_url,true));
      response.writeHead(404);
      response.end("Not Found");
    }
});
app.listen(3000);