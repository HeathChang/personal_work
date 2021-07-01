const maria = require('mysql');
const db = maria.createPool({
    host:'localhost',
    port:3306,
    user:'heath',
    password:'ss1312',
    database:'playground'
});
module.exports = db;