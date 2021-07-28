//글 생성 구현 
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
        var description = 'Hello, Node.js';
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
      //쿼리 스트링
      db.query(`SELECT * FROM topic LEFT JOIN author ON topic.author_id = author.id where topic.id = ?`, [queryData.id], function (error, topic) {
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
          `<h2>${title}</h2><p>${description}</p> <p>by ${topic[0].name}</p>`,
          `<a href='/create'>create</a>
          <a href='/update?id=${queryData.id}'>update</a>
          <form action= "delete_process" method = "post" onsubmit= "return confirm('ARE YOU SURE?')">
            <input type ="hidden" name="id" value="${queryData.id}">
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
    db.query('SELECT * FROM topic', function (error, topics) {
      db.query('SELECT * FROM author', function (error, authors) {


        var title = "CREATE PAGE";
        var list = template.list(topics);
        var html = template.HTML(title, list, `
      <form action = "http://localhost:3000/create_process" method= "post">
        <p> <input type ="text" name="title" placeholder="title"></p>
        <p>
          <textarea name ="description" placeholder="description"></textarea>
        </p>
        <p>
          ${template.authorSelect(authors)}
        </p>
        <p>
          <input type ="submit">
        </p>
      </form>
    `, `<a href="/create">create</a>`);
        response.writeHead(200);
        response.end(html);
      });
    });
  } else if (pathname == '/create_process') {
    var body = '';
    request.on('data', function (data) {
      body += data;
    });
    request.on('end', function () {
      var post = qs.parse(body);
      db.query('INSERT INTO topic (title,description,created,author_id) VALUES (?,?, NOW(),?)', [post.title, post.description, post.author], function (error, result) {
        if (error) {
          throw error;
        }
        response.writeHead(302, { Location: `/?id=${result.insertId}` });
        response.end();
      });
    });

    //>>>>>수정  
  } else if (pathname == '/update') {
    console.log(">>>>>>>>>", queryData);
    db.query(`SELECT * FROM topic WHERE id = ?`, [queryData.id], function (error, topic) {
      if (error) {
        throw error;
      }
      console.log(">>>>>>>", topic);
      var list = template.list(topic);
      var html = template.HTML(
        topic[0].title,
        list,
        `<form action = "/update_process" method= "post">
        <input type = "hidden" name = "id" value = "${topic[0].id}">
        <p> <input type ="text" name="title" placeholder="title" value="${topic[0].title}"></p>
        <p>
          <textarea name ="description" placeholder="description">${topic[0].description}</textarea>
        </p>
        <p>
          <input type ="submit">
        </p>
      </form>`,
        `<a href='/create'>create</a> <a href='/update?id=${topic[0].id}'>update</a>`
      );
      response.writeHead(200);
      response.end(html);
    });

  } else if (pathname == '/update_process') {
    var body = '';
    request.on('data', function (data) {
      body += data;
    });
    request.on('end', function () {
      var post = qs.parse(body);
      db.query('UPDATE topic SET title=?,description=?,author_id=1 WHERE id= ?', [post.title, post.description, post.id], function (error, result) {
        if (error) {
          throw error;
        }
        response.writeHead(302, { Location: `/?id=${post.id}` });
        response.end();
      });
    });
    //>>>>>삭제
  } else if (pathname == '/delete_process') {
    var body = '';
    request.on('data', function (data) {
      body += data;
    });
    request.on('end', function () {
      var post = qs.parse(body);
      db.query('DELETE FROM topic WHERE id = ?', [post.id], function (error, result) {
        if (error) {
          throw error;
        }
        response.writeHead(302, { Location: '/' });
        response.end();
      });
    });
  } else {
    //4. 루트가 아닐 때의 처리 (404)
    console.log(url.parse(_url, true));
    response.writeHead(404);
    response.end("Not Found");
  }
});
app.listen(3000);
