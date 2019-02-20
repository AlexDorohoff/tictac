var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'tic_tac_toe'
});

connection.connect();

var createNewUser = function (name, callback) {
    var query = connection.query('INSERT INTO user SET name = ?', name, function (err, result) {
        callback(err);
    });
};

var isUserExist = function (name, callback) {
    console.log('name: ', name);
    var query = connection.query('SELECT * FROM user WHERE name = ?', name, function (err, result) {
        console.log('result', result);
        callback(result.length, (result.length) ? result[0].id_user : null);
    })
};


module.exports = {createNewUser, isUserExist};