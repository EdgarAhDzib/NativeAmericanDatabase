var mysql = require('mysql');
var connection;
//var keys = require('./keys.js');

var jawsDB = {
	port: '3306',
	host: 'sulnwdk5uwjw1r2k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'xp5aykq1imymqn7o',
	password: 'h7cs5fguzyq82q9h',
	database: 'oktril0ymcyd26tt'
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