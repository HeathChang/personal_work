var qs = require('querystring');
var url = require("url");

var db = require('../database/database');
var template = require('./template');

exports.home = function (request, response) {
  db.query(`SELECT * FROM topic`, function (error, topics) {
    db.query(`SELECT * FROM author`, function (error2, authors) {
      var title = 'Author';
      var list = template.list(topics);
      var html = template.HTML(title, list,
        `
          ${template.authorTable(authors)}
                <style>
                    table {
                        border-collapse: collapse;
                    }
                    td {
                        border: 1px solid black;
                    }
                </style>
                `,
        `<a href="/create">create</a>`
      );
      response.writeHead(200);
      response.end(html);
    });
  })
}

exports.create_process = function (request, response) {

}
exports.update = function (request, response) {

}
exports.update_process = function (request, response) {

}
exports.delete_process = function (request, response) {

}
