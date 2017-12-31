var pg = require('pg');
var conString = "postgres://postgres:root@localhost:5432/todo_app";
var client;


exports.db = function() {
	if(client === undefined){
		client = new pg.Client(conString);
		client.connect();
	}
 	return client
}