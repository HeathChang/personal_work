//p463 라우트 파일 처리, 주소 체계의 변경
//기본
const express = require('express');
const app = express(); //반환하는 값: Express App에서 제공하는 Application 객체 (get,listen 포함)

var fs = require('fs');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
const { response } = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var qs = require('querystring');
var cookie = require('cookie');
//라우터 정의
var topicRouter = require('./routes/topic');
var indexRouter = require('./routes/index');
//외부 템플릿
var template = require('./lib/template');


app.use(bodyParser.urlencoded({ extended: false }));
//원하는 요청이 왔을 경우에만 실행되는 미들웨어 (use  → get으로 변경) 
app.get('*', function (request, response, next) {
  fs.readdir("./data", function (err, fileList) {
    request.list = fileList;
    next();
  })
})
app.use(compression());

app.use('/', indexRouter)
app.use('/topic', topicRouter);
app.use(function (request, response) {
  var isOwner = false;
  var cookies = {};
  console.log("hi: ");
  console.log("hi: ", request.headers.cookie);
  if (request.headers.cookie) {
    cookies = cookie.parse(request.headers.cookie);
    console.log("cookie: ", cookies);
  }
  if (cookies.email === 'egoing@gmail.com' && cookies.password === '1111') {
    isOwner = true;
    console.log("Wellllll");
  }
  console.log(isOwner);
})

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