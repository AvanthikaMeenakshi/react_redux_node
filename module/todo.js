var query = require('./queries');
var q = require('q');

exports.insertTodo = function(db,q){
    $query =  {};
    strQuery = query.query_find($query,'insert_todo');
    var defered = q.defer();
    var escape_data =  ['new', 'false']
    query =  db.query(strQuery,escape_data,defered.makeNodeResolver());
    return defered.promise;
}

exports.getTodos = function(db,q){
    $query =  {};
    strQuery = query.query_find($query,'get_todos');
    var defered = q.defer();
    query =  db.query(strQuery,defered.makeNodeResolver());
    return defered.promise;
}