var mysql = require('mysql');
var connection;
var keys = require('./keys.js');

console.log(keys);

//This version of the method works on Heroku
connection = mysql.createConnection(keys);

//To compare the jawsDB (for Heroku) and localhost connection properties:
/*
var source = {
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'native_db'
	},
	jawsDB: keys
}

var connection = mysql.createConnection(source.jawsDB);
*/

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;