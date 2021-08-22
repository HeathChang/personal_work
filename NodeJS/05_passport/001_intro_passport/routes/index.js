var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var auth = require('../lib/auth');

router.get('/', function (request, response) {
    console.log('request. user in index.js: ', request.user);
    var fmsg = request.flash();
    //console.log(fmsg);
    var feedback = "";
    if (fmsg.success) {
        feedback = fmsg.success[0]
    }
    console.log("fmsg: ", feedback);

    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
        `
        <div style = "color:" blue;">${feedback}</div>
        <h2>${title}</h2>${description}
        <img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px;">
        `,
        `<a href="/topic/create">create</a>`,
        auth.statusUI(request, response)
    );
    response.send(html);
});

module.exports = router;
