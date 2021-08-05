const express = require('express');
const router = express.Router();
var template = require('../lib/template');

router.get('/', function (request, response) {
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