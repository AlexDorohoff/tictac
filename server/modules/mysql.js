var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database: 'tic_tac_toe'
});

connection.connect();

var createNewUser = function(name, callback) {
    var query = connection.query('INSERT INTO user SET name = ?', name, function(err, result){
        callback(err);
    });
};


module.exports = {createNewUser};