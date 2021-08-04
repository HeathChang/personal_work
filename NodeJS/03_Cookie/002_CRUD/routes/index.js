const express = require('express');
const router = express.Router();
var template = require('../lib/template');
var cookie = require('cookie');

router.get('/', function (request, response) {
  var isOwner = false;
  var cookies = {};
  console.log("cookie", request.headers.cookie);
  if (request.headers.cookie) {
    cookies = cookie.parse(request.headers.cookie);
  }
  if (cookies.email === 'egoing@gmail.com' && cookies.password === '111') {
    isOwner = true;
    console.log("Wellllll");
  }
  console.log(isOwner);
  var title = "Welcome";
  var description =
    "This is Main Page. Click list to move to other pages";
  var list = template.list(request.list);
  var html = template.HTML(
    title,
    list,
    `<h2>${title}</h2><p>${description}</p>`,
    `<a href='/topic/create'>create</a>`
  );
  response.send(html);
});

module.exports = router;