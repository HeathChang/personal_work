const express = require('express');
const path = require('path');
const rootDirectory = require('../util/path')
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDirectory, 'views','add-product.html')) // global variable that holds the absolute  path on our OS to this project  folder.
  // res.send(
  //   '<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  // );
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
