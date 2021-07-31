//p463 라우트 파일 처리, 주소 체계의 변경
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

var topicRouter = require('./routes/topic');
//topic 이라는 라우터 적용 정의

app.use(bodyParser.urlencoded({ extended: false }));
//원하는 요청이 왔을 경우에만 실행되는 미들웨어 (use  → get으로 변경) 
app.get('*', function (request, response, next) {
  fs.readdir("./data", function (err, fileList) {
    request.list = fileList;
    next();
  })
})
app.use(compression());

app.get('/', function (request, response) {
  var title = "Welcome";
  var description =
    "This is Main Page. Click list to move to other pages";
  var list = template.list(request.list);
  var html = template.HTML(
    title,
    list,
    `<h2>${title}</h2><p>${description}</p>`,
    `<a href='/topic/create'>create</a>`
  );
  response.send(html);
});
app.use('/topic', topicRouter);

app.use(function (req, res, next) {
  res.status(404).send("Sorry 404 Error.")
})
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("Something Break")
})


app.listen(3000, function () {
  console.log("Example app listening");
});