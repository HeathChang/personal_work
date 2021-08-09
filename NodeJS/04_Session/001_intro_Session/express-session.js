var express = require('express');
var parseurl = require('parseurl');
var session = require('express-session');


var app = express();
app.use(session({
  secret: 'keyboard cat', //노출안되는 내용 
  resave: false, //데이터를 세션 저장소에 저장할지 설정 (false지정시, 세션 데이터가 바뀌지 않는 한 세션저장소에 저장하지않음, true시, 세션 데이터의 변경 여부와 상관없이 무조건 세션 저장소에 저장)
  saveUninitialized: true //세션의 구동 여부  (false 시, 세션의 필요 여부와 상관없이 무조건 세션을 구동 & true 시, 세션이 필요하기전까지 세션 구동 X)
}))

app.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {};
  }
  //get the url path name
  var pathname = parseurl(req).pathname;
  //count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
  next();
});

app.get('/', function (req, res, next) {
  console.log(req.session);
  if (req.session.num === undefined || NaN) {
    req.session.num = 1;
  } else {
    req.session.num += 1;
  }
  res.send(`VIEWS: ${req.session.num}`);
});

app.get('/foo', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times');
});

app.get('/bar', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/bar'] + ' times');
});

app.listen(3000, function () {
  console.log('3000!');
});
