//queryString에 따라 다르게 동작하는  Node.js 
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    console.log(_url);
    var queryData = url.parse(_url , true).query;
    //parse: 웹브라우저를 통해 요청한 URL을 나타내는 변수에서 쿼리스트링 문자열만 추출

    response.writeHead(200);
    response.end(fs.readFile('sample.txt',{encoding: 'utf-8'},function(err,data){
      console.log(data);
    })); 
    //↑ 위의 명령을 통해 웹서버가 웹 브라우저의 요청에 응답
  });
  app.listen(3000); 