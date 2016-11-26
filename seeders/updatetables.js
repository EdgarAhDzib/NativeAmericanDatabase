// Dependencies
// =============================================================
var mysql = require('mysql');
var keys = require('../config/keys.js');

var connection = mysql.createConnection(keys.localhost);

connection.connect(function(err){
if (err) throw err;
	console.log("connected as id " + connection.threadId);
});

connection.query("SELECT id,item_id FROM text_contents", function(err,result){
	if (err) throw err;
	for (i=0; i<result.length; i++){
		console.log(result[i].item_id);
/*
		var currId = result[i].id;
		if (result[i].item_id) {
			connection.query("UPDATE source_refs SET content_id = " + currId + " WHERE content_id = ?", result[i].item_id, function(err){
				if (err) throw err;
			});
		}
		*/
	}
});
/*
connection.query("SELECT id,item_id FROM text_contents", function(err,result){
	if (err) throw err;
	for (i=0; i<result.length; i++){
		console.log(result[i].item_id);
		var currId = result[i].id;
		if (result[i].item_id) {
			connection.query("UPDATE media_sources SET content_id = " + currId + " WHERE content_id = ?", result[i].item_id, function(err){
				if (err) throw err;
			});
		}
	}
});
*/
/*
connection.query("SELECT id,item_id FROM text_contents", function(err,result){
	if (err) throw err;
	for (i=0; i<result.length; i++){
		console.log(result[i].item_id);
		var currId = result[i].id;
		if (result[i].item_id) {
			connection.query("UPDATE content_fields SET content_id = " + currId + " WHERE content_id = ?", result[i].item_id, function(err){
				if (err) throw err;
			});
		}
	}
});
*/