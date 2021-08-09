var express = require('express');
var parseurl = require('parseurl');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

var app = express();
//1. 사용자가 세션 아이디를 가진 상태에서 서버 접속
//2. 서버 접속 시, 요청 헤더에 쿠키값으로 세션아이디를 서버에 전달.
//3. 서버는 전달받은 세션아이디에 대응하는 정보를 세션 스토어에서 찾은 다음(해당하는 파일읽은 다음), 해당 정보를 객체로 만들어 req 객체의 session 속성에 추가.
app.use(session({
  secret: 'keyboard cat', //노출안되는 내용 
  resave: false, //데이터를 세션 저장소에 저장할지 설정 (false지정시, 세션 데이터가 바뀌지 않는 한 세션저장소에 저장하지않음, true시, 세션 데이터의 변경 여부와 상관없이 무조건 세션 저장소에 저장)
  saveUninitialized: true, //세션의 구동 여부  (false 시, 세션의 필요 여부와 상관없이 무조건 세션을 구동 & true 시, 세션이 필요하기전까지 세션 구동 X)
  store: new FileStore //
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
