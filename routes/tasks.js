var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://youssouf:youssouf@ds119810.mlab.com:19810/mytasklist_youssouf',['tasks']);

router.get('/tasks', function(red, res, next){
	//res.send('TASKS API');
	db.tasks.find(function(err, tasks){
		if(err){
			res.send(err);
		}
		res.json(tasks);
	});
});

module.exports = router;