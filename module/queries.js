exports.query_find = function(data, row) {
    k = query[row];
    for (var i in data) {
        k = k.replace(new RegExp('{{' + i + '}}', 'g'), data[i]);
    }
    ////console.log(k); awaitingcount
    return k;
}

var query = [];
query['insert_todo'] = "INSERT into todo_list(todo_name, todo_complete) VALUES($1, $2)";
query['get_todos'] = "SELECT * from todo_list";
