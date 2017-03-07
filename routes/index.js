var express = require('express');
var router = express.Router();

router.get('/', function(red, res, next){
	//res.send('Test');
	res.render('index.html');
});

module.exports = router;