const express = require('express');
const app = express(); //반환하는 값: Express App에서 제공하는 Application 객체 (get,listen 포함)

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

app.listen(3000, function () {
  console.log("Example app listening");
});