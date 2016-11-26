var mysql = require('mysql');
var keys = require('../config/keys.js');

var connection = mysql.createConnection(keys.localhost);

connection.connect(function(err){
if (err) throw err;
	console.log("connected as id " + connection.threadId);
});

var createDate = new Date();
var updateDate = new Date();

connection.query("SELECT * FROM text_contents ORDER BY `group` ASC", function(err,result){
	if (err) throw err;
	var keyWord = "";
	for (i=0; i<result.length; i++){
		if (result[i].group === keyWord) {
			continue;
		} else {
			keyWord = result[i].group;
			connection.query("INSERT INTO native_groups (`group_name`,`createdAt`,`updatedAt`) VALUES (?,?,?)",[keyWord,createDate,updateDate],function(err){
				if (err) throw err;
			});
		}
	}
});