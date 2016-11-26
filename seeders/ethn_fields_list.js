var mysql = require('mysql');
var keys = require('../config/keys.js');

var connection = mysql.createConnection(keys.localhost);

connection.connect(function(err){
if (err) throw err;
	console.log("connected as id " + connection.threadId);
});

var createDate = new Date();
var updateDate = new Date();

connection.query("SELECT * FROM content_fields ORDER BY ethn_id ASC", function(err,result){
	if (err) throw err;
	var keyWord = "";
	for (i=0; i<result.length; i++){
		if (result[i].ethn_id === keyWord) {
			continue;
		} else {
			keyWord = result[i].ethn_id;
			connection.query("INSERT INTO ethn_fields (`name`,`createdAt`,`updatedAt`) VALUES (?,?,?)",[keyWord,createDate,updateDate],function(err){
				if (err) throw err;
			});
		}
	}
});