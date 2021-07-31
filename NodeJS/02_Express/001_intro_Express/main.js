const express = require('express');
const app = express(); //반환하는 값: Express App에서 제공하는 Application 객체 (get,listen 포함)
var qs = require('querystring');

var fs = require('fs');
var template = require('./lib/template');

var path = require('path');
var sanitizeHtml = require('sanitize-html');
const { response } = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');

app.use(bodyParser.urlencoded({ extended: false }));
//해당 미들웨어가 실행되고 결과를 리턴. (→main.js 실행마다 미들웨어 실행 )
//사용자가 post 방식으로 전송한 데이터를  _process에서의 동작을 통해 결과를 전달 
app.use(compression());
//웹 브라우저에 응답할 때 해당 데이터를 압축해서 보내는 기술
//용량 측면에서 줄어들음. 
//gzip을 통해서 압축
app.get('/', function (request, response) {
  fs.readdir("./data", function (err, fileList) {
    var title = "Welcome";
    var description =
      "This is Main Page. Click list to move to other pages";
    var list = template.list(fileList);
    var html = template.HTML(
      title,
      list,
      `<h2>${title}</h2><p>${description}</p>`,
      `<a href='/create'>create</a>`
    );
    response.send(html);
  });
})

app.get('/page/:pageId', function (request, response) {
  fs.readdir('./data', function (error, filelist) {
    var filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) {
      var title = request.params.pageId;
      var sanitizedTitle = sanitizeHtml(title);
      var sanitizedDescription = sanitizeHtml(description, {
        allowedTags: ['h1']
      });
      var list = template.list(filelist);
      var html = template.HTML(
        sanitizedTitle,
        list,
        `<h2>${sanitizedTitle}</h2><p>${sanitizedDescription}</p>`,
        `<a href='/create'>create</a>
        <a href='/update/${sanitizedTitle}'>update</a>
        <form action= "/delete_process" method = "post" onsubmit= "return confirm('ARE YOU SURE?')">
          <input type ="hidden" name="id" value="${sanitizedTitle}">
          <input type ="submit" value= "delete">
        </form>
        `
      );
      response.send(html);
    });
  });
});

app.get('/create', (request, response) => {
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
    response.send(html);
  });
})

app.post('/create_process', (request, response) => {
  var post = request.body;
  var title = post.title;
  var description = post.description;
  console.log("title: ", title, "\n", "des: ", description);
  fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
    response.writeHead(302, { Location: `/page/${title}` });
    response.end();
  })
})

app.get('/update/:pageId', (request, response) => {
  fs.readdir('./data', function (error, filelist) {
    var filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) {
      var title = request.params.pageId;
      var list = template.list(filelist);
      var html = template.HTML(title, list,
        `
            <form action="/update_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                <p>
                    <textarea name="description"
                        placeholder="description">${description}</textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
            </form>
            `,
        `<a href="/create">create</a> <a href="/update/${title}">update</a>`
      );
      response.send(html);
    });
  });
})

app.post('/update_process', (request, response) => {
  var post = request.body;
  var id = post.id;
  var title = post.title;
  var description = post.description;
  fs.rename(`data/${id}`, description, function (err1) {
    fs.writeFile(`data/${title}`, description, 'utf8', function (err2) {
      response.redirect(`/page/${title}`);
      response.end();
    })
  })
})
app.post('/delete_process', (request, response) => {
  var post = request.body;
  var id = post.id;
  var filteredId = path.parse(id).base;
  fs.unlink(`data/${filteredId}`, function () {
    response.redirect('/');
  })
})

app.listen(3000, function () {
  console.log("Example app listening");
});