const express = require('express');
const path = require('path')
const router = express.Router();

router.get('/', (req, res, next) => {
  // res.send('<h1>Hello from Express!</h1>');
  //path, callBack, option
  // dirname will point to the file
  res.sendFile(path.join(__dirname, '../', 'views','shop.html')) // global variable that holds the absolute  path on our OS to this project  folder.
});

module.exports = router;
