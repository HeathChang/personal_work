const http = require('http');
const express = require('express');

const app = express();

// Using Router
app.use('/',(req, res, next) => {
    console.log(123123)
    // res.send('<h1>HELLO WORLD</h1>');
    next();
});

app.use('/add-product',(req, res, next) => {
    res.send('<h1></h1>');
});
app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});


// const server = http.createServer(app);
// server.listen(3000);
// =>
app.listen(3000);