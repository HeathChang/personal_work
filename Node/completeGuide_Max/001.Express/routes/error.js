const express = require('express');
const path = require("path");
const rootDirectory = require('../util/path')

const router = express.Router();

//Add Catch All.
router.use((req, res,next)=>{
	// send has to be the last
	// res.status(404).send('<h1>Page not found.</h1>')
	res.status(404).sendFile(path.join(rootDirectory, 'views','404.html')) // global variable that holds the absolute  path on our OS to this project  folder.

})


module.exports = router;
