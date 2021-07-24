//글목록 출력하기
var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  // takes a URL string, parses it, and it will return a URL object with each part of the address as properties
  if (pathname == "/") {
    //1. 루트일  떄 처리
    if (queryData.id == undefined) {
      //2. 쿼리 스트링이 없을 때의 처리 (홈일때)
      fs.readdir("./data", function (err, fileList) {
        var title = "Welcome";
        var description =
          "This is Main Page. Click list to move to other pages";
        var list = "<ul>";
        for (var i = 0; i < fileList.length; i++) {
          list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
        }
        list += "</ul>";
        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          ${list}
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200);
        response.end(template);
      });
    } else {
      //3. 쿼리 스트링이 있을 때의 처리 (홈이 아닐때)
      fs.readdir("./data", function (err, fileList) {
        var list = "<ul>";
        for (var i = 0; i < fileList.length; i++) {
          list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
        }
        list += "</ul>";
        fs.readFile(
          `data/${queryData.id}`,
          "utf8",
          function (err, description) {
            var title = queryData.id;
            var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            <h2>${title}</h2>
            <p>${description}</p>
          // </body>
          </html>
          `;
            response.writeHead(200);
            response.end(template);
          }
        );
      });
    }
  } else {
    //4. 루트가 아닐 때의 처리 (404)
    console.log(url.parse(_url, true));
    response.writeHead(404);
    response.end("Not Found");
  }
});
app.listen(3000);
