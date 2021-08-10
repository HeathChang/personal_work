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
