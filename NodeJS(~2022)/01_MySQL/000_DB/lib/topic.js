var qs = require('querystring');
var url = require("url");

var db = require('../database/database');
var template = require('./template');

//Main Page
exports.home = function (request, response) {
	db.query('SELECT * FROM topic', function (error, topics) {
		var title = "Welcome";
		var description = 'Hello, Node.js';
		var list = template.list(topics);
		var html = template.HTML(
				title,
				list,
				`<h2>${ title }</h2><p>${ description }</p>`,
				`<a href='/create'>create</a>`
		);
		response.writeHead(200);
		response.end(html);
	});
};
//함수를 외부로 공유(여러개의 API를 사용)할 것이므로 exports 사용

//Query String
exports.page = function (request, response) {
	var _url = request.url;
	var queryData = url.parse(_url, true).query;
	db.query(`SELECT * FROM topic LEFT JOIN author ON topic.author_id = author.id where topic.id = ?`, [ queryData.id ], function (error, topic) {
		//공격의도가 있는 코드를 알아서 걸러줌
		if ( error ) {
			throw error;
		}
		var title = topic[0].title;
		var description = topic[0].description;
		var list = template.list(topic);
		var html = template.HTML(
				title,
				list,
				`<h2>${ title }</h2><p>${ description }</p> <p>by ${ topic[0].name }</p>`,
				`<a href='/create'>create</a>
      <a href='/update?id=${ queryData.id }'>update</a>
      <form action= "delete_process" method = "post" onsubmit= "return confirm('ARE YOU SURE?')">
        <input type ="hidden" name="id" value="${ queryData.id }">
        <input type ="submit" value= "delete">
      </form>
      `
		);
		response.writeHead(200);
		response.end(html);
	});

	exports.create = function (request, response) {
		db.query('SELECT * FROM topic', function (error, topics) {
			db.query('SELECT * FROM author', function (error, authors) {
				var title = "CREATE PAGE";
				var list = template.list(topics);
				var html = template.HTML(title, list, `
          <form action = "http://localhost:3000/create_process" method= "post">
            <p> <input type ="text" name="title" placeholder="title"></p>
            <p>
              <textarea name ="description" placeholder="description"></textarea>
            </p>
            <p>
              ${ template.authorSelect(authors) }
            </p>
            <p>
              <input type ="submit">
            </p>
          </form>
        `, `<a href="/create">create</a>`);
				response.writeHead(200);
				response.end(html);
			});
		});
	}

	exports.create_process = function (request, response) {
		var body = '';
		request.on('data', function (data) {
			body += data;
		});
		request.on('end', function () {
			var post = qs.parse(body);
			db.query('INSERT INTO topic (title,description,created,author_id) VALUES (?,?, NOW(),?)', [ post.title, post.description, post.author ], function (error, result) {
				if ( error ) {
					throw error;
				}
				response.writeHead(302, { Location : `/?id=${ result.insertId }` });
				response.end();
			});
		});
	}
	exports.update = function (request, response) {
		var _url = request.url;
		var queryData = url.parse(_url, true).query;
		db.query(`SELECT * FROM topic WHERE id = ?`, [ queryData.id ], function (error, topic) {
			if ( error ) {
				throw error;
			}
			db.query('SELECT * FROM author', function (error2, authors) {
				console.log(">>>>>>>", topic);
				var list = template.list(topic);
				var html = template.HTML(
						topic[0].title,
						list,
						`<form action = "/update_process" method= "post">
        <input type = "hidden" name = "id" value = "${ topic[0].id }">
        <p> <input type ="text" name="title" placeholder="title" value="${ topic[0].title }"></p>
        <p>
          <textarea name ="description" placeholder="description">${ topic[0].description }</textarea>
        </p>
        <p>
          ${ template.authorSelect(authors, topic[0].author_id) }
        </p>
        <p>
          <input type ="submit">
        </p>
      </form>`,
						`<a href='/create'>create</a> <a href='/update?id=${ topic[0].id }'>update</a>`
				);
				response.writeHead(200);
				response.end(html);
			});
		});
	}
	exports.update_process = function (request, response) {
		var body = '';
		request.on('data', function (data) {
			body += data;
		});
		request.on('end', function () {
			var post = qs.parse(body);
			db.query('UPDATE topic SET title=?,description=?,author_id=? WHERE id= ?', [ post.title, post.description, post.author, post.id ], function (error, result) {
				if ( error ) {
					throw error;
				}
				response.writeHead(302, { Location : `/?id=${ post.id }` });
				response.end();
			});
		});
	}
	exports.delete = function (request, response) {
		var body = '';
		request.on('data', function (data) {
			body += data;
		});
		request.on('end', function () {
			var post = qs.parse(body);
			db.query('DELETE FROM topic WHERE id = ?', [ post.id ], function (error, result) {
				if ( error ) {
					throw error;
				}
				response.writeHead(302, { Location : '/' });
				response.end();
			});
		});
	}


}//end 