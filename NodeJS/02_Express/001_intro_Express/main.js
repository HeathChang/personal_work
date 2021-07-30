const express = require('express');
const app = express(); //반환하는 값: Express App에서 제공하는 Application 객체 (get,listen 포함)
var qs = require('querystring');

var fs = require('fs');
var template = require('./lib/template');

var path = require('path');
var sanitizeHtml = require('sanitize-html');

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
      var html = template.HTML(sanitizedTitle, list,
        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
        ` <a href="/create">create</a>
                  <a href="/update?id=${sanitizedTitle}">update</a>
                  <form action="delete_process" method="post">
                      <input type="hidden" name="id" value="${sanitizedTitle}">
                      <input type="submit" value="delete">
                  </form>`
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
  // /create에서 post로 전달되기때문에 post로 설정
  var body = '';
  request.on('data', function (data) {
    body += data;
  });
  request.on('end', function () {
    var post = qs.parse(body);
    var title = post.title;
    var description = post.description;
    console.log("title: ", title, "\n", "des: ", description);
    fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
      response.writeHead(302, { Location: `/page/${title}` });
      response.end();
    })
  })
})

app.listen(3000, function () {
  console.log("Example app listening");
});