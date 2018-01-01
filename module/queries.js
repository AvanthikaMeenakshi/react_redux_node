exports.query = function(data, row) {
    k = query[row];
    for (var i in data) {
        k = k.replace(new RegExp('{{' + i + '}}', 'g'), data[i]);
    }
    ////console.log(k); awaitingcount
    return k;
}
var query = [];