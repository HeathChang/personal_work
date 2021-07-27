//클릭시 update로 이동하고 수정할 정보를 전송
var http = require("http");
var qs = require('querystring');
var fs = require("fs");
var url = require("url");
var template = require('./lib/template');
//DB 설정
var db = require('./database/database');


var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  // takes a URL string, parses it, and it will return a URL object with each part of the address as properties
  if (pathname == "/") {
    if (queryData.id == undefined) {
      db.query('SELECT * FROM topic', function (error, topics) {
        var title = "Welcome";
        var description =
          "This is Main Page. Click list to move to other pages";
        var list = template.list(topics);
        var html = template.HTML(
          title,
          list,
          `<h2>${title}</h2><p>${description}</p>`,
          `<a href='/create'>create</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    } else {
      //3. 쿼리 스트링
      db.query(`SELECT * FROM topic where id = ?`, [queryData.id], function (error, topic) {
        //공격의도가 있는 코드를 알아서 걸러줌
        if (error) {
          throw error;
        }
        var title = topic[0].title;
        var description = topic[0].description;
        var list = template.list(topic);
        var html = template.HTML(
          title,
          list,
          `<h2>${title}</h2><p>${description}</p>`,
          `<a href='/create'>create</a>
          <a href='/update?id=${title}'>update</a>
          <form action= "delete_process" method = "post" onsubmit= "return confirm('ARE YOU SURE?')">
            <input type ="hidden" name="id" value="${title}">
            <input type ="submit" value= "delete">
          </form>
          `
        );
        response.writeHead(200);
        response.end(html);
      });
    }
    /////생성 >>>> 새로운 내용
  } else if (pathname == '/create') {
    fs.readdir("./data", function (err, fileList) {
      var title = 'WEB_CREATE';
      var list = template.list(fileList);
      var html = template.HTML(title, list, `
        <form action = "http://localhost:3000/create_process" method= "post">
          <p> <input type ="text" name="title" placeholder="title"></p>
          <p>
            <textarea name ="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type ="submit">
          </p>
        </form>
      `, '');
      response.writeHead(200);
      response.end(html);
    });
  } else if (pathname == '/create_process') {
    var body = '';
    //data 이벤트에서 데이터를 수신할 때마다 발생, 콜백에 데이터 처리 기능 정의
    //조각조각 나눠서 데이터를 수신할 때마다 호출되는 콜백함수 (BUFFER)
    request.on('data', function (data) {
      body += data;
      //콜백으로 전달받은 인자 data에 담긴 내용을 변수 body에 누적하여 합침
    });
    //end 이벤트는 데이터 수신 완료시 발생하므로, 콜백에 데이터 처리를 마무리
    //조각 조각 정보가 들어오다가, 더이상 정보가 없으면, end 뒤에있는 콜백 함수를 호출
    request.on('end', function () {
      var post = qs.parse(body);
      //qs 모듈의 parse기능을 이용해  body에 누적 내용을 post에 담기
      var title = post.title;
      var description = post.description;
      console.log("title: ", title, "\n", "des: ", description);

      //fs.writeFile('파일이름','데이터',callback)
      fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
        response.writeHead(302, { Location: `/?id=${title}` });
        response.end();
      })
    });

    //>>>>>수정  
  } else if (pathname == '/update') {
    fs.readdir("./data", function (err, fileList) {
      var filteredId = path.parse(queryData.id).base;
      fs.readFile(
        `data/${filteredId}`,
        "utf8",
        function (err, description) {
          var title = queryData.id;
          var list = template.list(fileList);
          var html = template.HTML(
            title,
            list,
            `<form action = "/update_process" method= "post">
              <input type = "hidden" name = "id" value = "${title}">
              <p> <input type ="text" name="title" placeholder="title" value="${title}"></p>
              <p>
                <textarea name ="description" placeholder="description">${description}</textarea>
              </p>
              <p>
                <input type ="submit">
              </p>
            </form>`,
            `<a href='/create'>create</a> <a href='/update?id=${title}'>update</a>`
          );
          response.writeHead(200);
          response.end(html);
        }
      );
    });
  } else if (pathname == '/update_process') {
    var body = '';
    request.on('data', function (data) {
      body += data;
    });
    request.on('end', function () {
      var post = qs.parse(body);
      var id = post.id;
      var title = post.title;
      var description = post.description;
      //rename: 1번째: 기존파일명 & 2번째: 수정파일명 & 3번째 에러발생시, 콜백
      fs.rename(`data/${id}`, `data/${title}`, function (err) {
        fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
          response.writeHead(302, { Location: `/?id=${title}` });
          response.end();
        })
      })
    });
    //>>>>>삭제
  } else if (pathname == '/delete_process') {
    var body = '';
    request.on('data', function (data) {
      body += data;
    });
    request.on('end', function () {
      var post = qs.parse(body);
      var id = post.id;
      //unlink → 삭제: 1번째: 삭제 파일 && 2번째: 삭제 완료 후 처리할 내용 콜백 
      var filteredId = path.parse(id).base;
      fs.unlink(`data/${filteredId}`, function () {
        response.writeHead(302, { Location: '/' });
        response.end();
      })
    });
  } else {
    //4. 루트가 아닐 때의 처리 (404)
    console.log(url.parse(_url, true));
    response.writeHead(404);
    response.end("Not Found");
  }
});
app.listen(3000);
