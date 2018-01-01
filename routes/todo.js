var express = require('express');
var router = express.Router();
var db = require('../module/postgres').db()
var todo = require('../module/todo')
var q = require('q');

/* GET home page. */
router.get('/', function(req, res, next) {
	q.all([todo.getTodos(db,q)]).then(function(results){
		console.log("DONE")
		console.log(results[0].rows)
		res.render('index', { title: 'Todo' });
	}).fail(function (error) {
		console.log(error)
	});
  
});


router.post('/add', function(req,res,next){
	q.all([todo.insertTodo(db,q)]).then(function(results){
		console.log("DONE")
		console.log(results)
	}).fail(function (error) {
		console.log(error)
	});
})

module.exports = router;