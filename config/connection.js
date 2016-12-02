var mysql = require('mysql');
var connection;
//var keys = require('./keys.js');

var jawsDB = {
		port: '3306',
		host: 'tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		username: 'pamv2y6gfecwynpt',
		password: 'u52x8imwn1yenhhj',
		database: 'q7snum71zrg8cmuw'
	};

//if (process.env.JAWSDB_URL) {
	//This version of the method works on Heroku
	connection = mysql.createConnection(jawsDB);	
// } else {
// 	connection = mysql.createConnection(keys.localhost);
// }

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;