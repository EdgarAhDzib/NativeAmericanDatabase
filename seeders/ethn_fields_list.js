var mysql = require('mysql');
var keys = require('../config/keys.js');

//Exported subject categories from an older database
var joomlaList = require('./category_id.csv');

var connection = mysql.createConnection(keys.localhost);

connection.connect(function(err){
if (err) throw err;
	console.log("connected as id " + connection.threadId);
});

var createDate = new Date();
var updateDate = new Date();

//This function was used to populate the ethn_fields table from the RRN seeders
/*
connection.query("SELECT * FROM content_fields ORDER BY ethn_id ASC", function(err,result){
	if (err) throw err;
	var keyWord = "";
	for (i=0; i<result.length; i++){
		if (result[i].ethn_id === keyWord) {
			continue;
		} else {
			keyWord = result[i].ethn_id;
			connection.query("SELECT id FROM ethn_fields WHERE `name` = ?", [keyWord], function(err,rows){
				for (j=0; j<rows.length; j++) {
					console.log(rows[j].id);
				}
			});
			connection.query("INSERT INTO ethn_fields (`name`,`createdAt`,`updatedAt`) VALUES (?,?,?)",[keyWord,createDate,updateDate],function(err){
				if (err) throw err;
			});
		}
	}
});
*/

connection.query("SELECT * from ethn_fields RIGHT JOIN content_fields ON ethn_fields.name=content_fields.ethn_id where content_fields.content_id < 24",function(err,result){
	if (err) throw err;
	var ethnArray = [];
	for (i=0; i<result.length; i++) {
			//console.log(result[i].ethn_id + " " + result[i].content_id);
			if (ethnArray.indexOf(result[i].ethn_id) === -1) {
				ethnArray.push(result[i].ethn_id);
			}
	}
	ethnArray.sort();
	console.log(ethnArray);
	//This query produces a list of subjects from the old documentation on the Cora and Eskimo, respectively.
	//Many of the subjects already exist in the ethn_fields table, so the remainder were populated manually.
	//The queries are saved in ./seeders/new_ethn_subjects.sql and then converted for loop insertion in ./seeders/new_ethn_subjects.js
});

/*
//This function was used to populate ethn_fields with contents from an older database table
for (i=0; i<joomlaList.length; i++){
	var splitTheLine = joomlaList[i].split(",");
	connection.query("INSERT INTO ethn_fields (`name`,`main_topic`,`createdAt`,`updatedAt`) VALUES (?,?,?,?)",[splitTheLine[0],splitTheLine[1],createDate,updateDate],function(err){
		if (err) throw err;
	});
}
*/
//Then use a COUNT method to check for redundancies
//SELECT `name` FROM ethn_fields GROUP BY `name` HAVING count(*) > 1;
//Yielded bone, shell, skin