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
                <form action="/author/create_process" method="post">
                    <p>
                        <input type="text" name="name" placeholder="name">
                    </p>
                    <p>
                        <textarea name="profile" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
                `,
        ``

      );
      response.writeHead(200);
      response.end(html);
    });
  })
}

exports.create_process = function (request, response) {
  var body = '';
  request.on('data', function (data) {
    body += data;
  });
  request.on('end', function () {
    var post = qs.parse(body);
    db.query(`INSERT INTO author (name,profile) VALUES(?,?)`, [post.name, post.profile], function (error, result) {
      if (error) {
        throw error;
      }
      response.writeHead(302, { Location: `/author` });
      response.end();
    })
  })
}


exports.update = function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  db.query(`SELECT * FROM topic`, function (error, topics) {
    if (error) {
      throw error;
    }
    db.query('SELECT * FROM author WHERE id =?', [queryData.id], function (error2, author) {
      var title = 'author';
      var list = template.list(topics);
      var html = template.HTML(
        title,
        list,
        `
        ${template.authorTable(author)}
        <style>
            table {
                border-collapse: collapse;
            }
            td {
                border: 1px solid black;
            }
        </style>
        
        <form action = "/update_process" method= "post">
        <p><input type = "hidden" name = "id" value = "${queryData.id}"></p>
        <p> <input type ="text" name="title" placeholder="title" value="${author[0].name}"></p>
        <p>
          <textarea name ="description" placeholder="description">${author[0].profile}</textarea>
        </p>

        <p>
          <input type ="submit" value = "update">
        </p>
      </form>`,
        ''
      );
      response.writeHead(200);
      response.end(html);
    });
  });
}
exports.update_process = function (request, response) {

}
exports.delete_process = function (request, response) {

}
