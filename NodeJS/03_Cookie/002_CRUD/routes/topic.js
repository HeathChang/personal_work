const express = require('express');
const router = express.Router();
//express() → 애플리케이션 리턴 && Router() → router 객체 리턴 (router.get()을 호출)
var fs = require('fs');
var template = require('../lib/template');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
const { response } = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');

router.get('/create', (request, response) => {
  var title = 'WEB_CREATE';
  var list = template.list(request.list);
  var html = template.HTML(title, list, `
      <form action = "http://localhost:3000/topic/create_process" method= "post">
        <p> <input type ="text" name="title" placeholder="title"></p>
        <p>
          <textarea name ="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type ="submit">
        </p>
      </form>
    `, '');
  response.send(html);
});

router.post('/create_process', (request, response) => {
  console.log(request.list);
  var post = request.body;
  var title = post.title;
  var description = post.description;
  console.log("title: ", title, "\n", "des: ", description);
  fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
    response.writeHead(302, { Location: `/topic/${title}` });
    response.end();
  })
})

router.get('/update/:pageId', (request, response) => {
  var filteredId = path.parse(request.params.pageId).base;
  fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) {
    var title = request.params.pageId;
    var list = template.list(request.list);
    var html = template.HTML(title, list,
      `
            <form action="/topic/update_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                <p>
                    <textarea name="description"
                        placeholder="description">${description}</textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
            </form>
      `,
      `<a href="/topic/create">create</a>`
    );
    response.send(html);
  });
});

router.post('/update_process', (request, response) => {
  var post = request.body;
  var id = post.id;
  var title = post.title;
  var description = post.description;
  fs.rename(`data/${id}`, description, function (err1) {
    fs.writeFile(`data/${title}`, description, 'utf8', function (err2) {
      response.redirect(`/topic/${title}`);
      response.end();
    })
  })
})

router.get('/login', (request, response) => {
  fs.readdir('./data', function (error, filelist) {
    var title = 'Login';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
      `
            <form action="login_process" method="post">
                <p><input type="text" name="email" placeholder="email"></p>
                <p><input type="password" name="password" placeholder="password"></p>
                <p>
                    <input type="submit">
                </p>
            </form>
      `,
      `<a href="/topic/create">create</a>`
    );
    response.end(html);
  })
})

router.post('/login_process', (request, response) => {
  var post = request.body;
  console.log(post.email, post.password);
  var email = post.email;
  var password = post.password;
  if (email === 'egoing@gmail.com' && password === '1111') {
    response.writeHead(200, {
      'Set-Cookie': [
        `email=${email}`,
        `password=${password}`,
        `nickname=egoing`
      ],
      Location: `/`
    });
    response.end();
  } else {
    response.end('WHO?');
  }
})

router.post('/delete_process', (request, response) => {
  var post = request.body;
  var id = post.id;
  var filteredId = path.parse(id).base;
  fs.unlink(`data/${filteredId}`, function () {
    response.redirect('/');
  })
})



router.get('/:pageId', function (request, response, next) {
  var filteredId = path.parse(request.params.pageId).base;
  fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) {
    if (err) {
      next(err); //에러 전달
    } else {
      var title = request.params.pageId;
      var sanitizedTitle = sanitizeHtml(title);
      var sanitizedDescription = sanitizeHtml(description, {
        allowedTags: ['h1']
      });
      var list = template.list(request.list);
      var html = template.HTML(
        sanitizedTitle,
        list,
        `<h2>${sanitizedTitle}</h2><p>${sanitizedDescription}</p>`,
        `<a href='/topic/create'>create</a>
        <a href='/topic/update/${sanitizedTitle}'>update</a>
        <form action= "/topic/delete_process" method = "post" onsubmit= "return confirm('ARE YOU SURE?')">
          <input type ="hidden" name="id" value="${sanitizedTitle}">
          <input type ="submit" value= "delete">
        </form>
        `
      );
      response.send(html);
    }
  });
});



module.exports = router;