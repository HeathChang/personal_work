var mysql = require('maria');
var connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'heath',
  password: 'ss1312',
  database: 'opentutorials'
});

module.exports = connection;
