const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const appOld = express();

appOld.use(bodyParser.urlencoded({
    extended: false
}));



// Using Router
appOld.use('/',(req, res, next) => {
    console.log(123123)
    // res.send('<h1>HELLO WORLD</h1>');
    next();
});

appOld.use('/add-product',(req, res, next) => {
    res.send('<h1></h1>');
});
appOld.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});


// const server = http.createServer(appOld);
// server.listen(3000);
// =>
// appOld.listen(3000);