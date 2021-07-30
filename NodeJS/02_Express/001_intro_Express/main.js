const express = require('express');
const app = express(); //반환하는 값: Express App에서 제공하는 Application 객체 (get,listen 포함)

var fs = require('fs');
var template = require('./lib/template_1');

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

app.get('/page/:pageId', (request, response) => {
  fs.readFile(
    `data/`,
    "utf8",
    function (err, description) {
      var title = queryData.id;
      var sanitizedTitle = sanitizeHtml(title);
      var sanitizedDescription = sanitizeHtml(description);
      var list = template.list(fileList);
      var html = template.HTML(
        sanitizedTitle,
        list,
        `<h2>${sanitizedTitle}</h2><p>${sanitizedDescription}</p>`,
        `<a href='/create'>create</a>
        <a href='/update?id=${sanitizedTitle}'>update</a>
        <form action= "delete_process" method = "post" onsubmit= "return confirm('ARE YOU SURE?')">
          <input type ="hidden" name="id" value="${sanitizedTitle}">
          <!-- 주의: placeholder 사용 시, value의 값이 지정되어 있지 않음--!>
          <input type ="submit" value= "delete">
        </form>
        `
      );
      response.send(html);
    }
  );
});

app.listen(3000, function () {
  console.log("Example app listening");
});