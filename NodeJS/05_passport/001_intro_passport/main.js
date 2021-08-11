var express = require('express');
var app = express();
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var bodyParser = require('body-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(session({
    secret: 'asadlfkj!@#!@#dfgasdg',
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}));

var authData = {
    email: 'egoing777@gmail.com',
    password: '111111',
    nickname: 'egoing'
};

var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());
// 세션을 처리
//1. 로그인에 성공했을 때 전달한 authData 객체를 콜백 함수의 첫 번째 인자로 전달(로그인에 성공했을 때 사용자 정보를 세션에 기록)
passport.serializeUser(function (user, done) {
    console.log('serializeUser', user);
    done(null, user.email);
    //세션에 기록하는 일은 done 함수가 수행, 
    //done 함수의 첫 번째 인자로는 null, 두 번째는 사용자를 구분하는 식별자를 전달
})
passport.deserializeUser(function (id, done) {
    console.log('deserializeUser: authData>>', authData);
    console.log('deserializeUser: id>>', id);
    done(null, authData);
});
// 로그인을 시도할 때, 로그인에 성공했는지 실패했는지를 결정
passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'pwd'
    },
    function (username, password, done) {
        console.log('LocalStrategy', username, password);
        if (username === authData.email) {
            console.log("Correct Username");
            if (password === authData.password) {
                console.log("Correct Password");
                return done(null, authData, {
                    message: "Welcome. "
                })
            } else {
                console.log("Incorrect Password. ");
                return done(null, false, { message: 'Incorrect  Password. ' })
            }
        } else {
            console.log("Incorrect email. ");
            return done(null, false, { message: 'Incorrect email. ' })
        }
        // //p624
        // //1. username 값이 저장소에 있는지 확인하는 코드
        // User.findOne({ username: username }, function (err, user) {
        //     //2. 인증을 검증하는 과정에서 오류가 발생하면 다음 함수의 세 번째 파라미터인 done을 호출하면서 첫 번째 인자로 에러(err)를 전달
        //     if (err) { return done(err); }
        //     //3. user가 없다면, 즉 로그인 폼에서 전달받은 아이디가 저장소에 없으면 done 함수의 두 번째 인자로 false를 전달
        //     if (!user) {
        //         return done(null, false, { message: 'Incorrect username.' });
        //     }
        //     if (!user.validPassword(password)) {
        //         return done(null, false, { message: 'Incorrect password.' });
        //     }
        //     return done(null, user);
        // });

    }
));
//사용자가 로그인을 전송했을 때 Passport.js가 로그인 데이터를 처리
app.post('/auth/login_process', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login'
}));

app.get('*', function (request, response, next) {
    fs.readdir('./data', function (error, filelist) {
        request.list = filelist;
        next();
    });
});

var indexRouter = require('./routes/index');
var topicRouter = require('./routes/topic');
var authRouter = require('./routes/auth');

app.use('/', indexRouter);
app.use('/topic', topicRouter);
app.use('/auth', authRouter);

app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
