var mysql = require('mysql');
var connection;
var keys = require('./keys.js');

//This version of the method works on Heroku
connection = mysql.createConnection(keys.jawsDB);

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;