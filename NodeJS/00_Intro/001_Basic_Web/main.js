//웹서버 만들기
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname+url);
    response.end(fs.readFileSync(__dirname + url)); //웹 브라우저가 요청한 파일의 경로를 콘솔에 출력
    //response.end: 웹 서버가 웹브라우저 요청에 응답하는 명령. 
    //response.end('egoing: '+url); //←이렇게 하면, url이 화면이 뜬다.
  });
app.listen(3000); 