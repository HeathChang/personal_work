//글 목록 보기
var http = require("http");
var qs = require('querystring');
var url = require("url");
//export
var template = require('./lib/template');
var topic = require('./lib/topic');
var author = require('./lib/author');
//DB 설정
var db = require('./database/database');


var app = http.createServer(function (request, response) {
	var _url = request.url;
	var queryData = url.parse(_url, true).query;
	var pathname = url.parse(_url, true).pathname;
	if ( pathname == "/" ) {
		if ( queryData.id == undefined ) {
			topic.home(request, response);
		} else {
			//쿼리 스트링
			topic.page(request, response);
		}
	} else {
		if ( pathname == '/create' ) {
			topic.create(request, response);
		} else {
			if ( pathname == '/create_process' ) {
				topic.create_process(request, response);
			} else {
				if ( pathname == '/update' ) {
					topic.update(request, response);
				} else {
					if ( pathname == '/update_process' ) {
						topic.update_process(request, response);
					} else {
						if ( pathname == '/delete_process' ) {
							topic.delete(request, response);
						} else {
							if ( pathname == '/author' ) {
								author.home(request, response);
							} else {
								if ( pathname == '/author/create_process' ) {

								} else {
									if ( pathname == '/author/update' ) {

									} else {
										if ( pathname == '/author/update_process' ) {

										} else {
											if ( pathname == '/author/delete_process' ) {

											} else {
												console.log(url.parse(_url, true));
												response.writeHead(404);
												response.end("Not Found");
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
});
app.listen(3000);
