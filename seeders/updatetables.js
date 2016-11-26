// Dependencies
// =============================================================
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
var mysql = require('mysql');
var keys = require('../config/keys.js');

var connection = mysql.createConnection(keys.localhost);

connection.connect(function(err){
if (err) throw err;
	console.log("connected as id " + connection.threadId);
});
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

connection.query("SELECT id,item_id FROM text_contents", function(err,result){
	if (err) throw err;
	for (i=0; i<result.length; i++){
		console.log(result[i].item_id);
		var currId = result[i].id;
		connection.query("UPDATE source_refs SET content_id = " + currId + " WHERE content_id = ?", result[i].item_id, function(err){
			if (err) throw err;
		});
	}
});

connection.query("SELECT id,item_id FROM text_contents", function(err,result){
	if (err) throw err;
	for (i=0; i<result.length; i++){
		console.log(result[i].item_id);
		var currId = result[i].id;
		connection.query("UPDATE media_sources SET content_id = " + currId + " WHERE content_id = ?", result[i].item_id, function(err){
			if (err) throw err;
		});
	}
});

connection.query("SELECT id,item_id FROM text_contents", function(err,result){
	if (err) throw err;
	for (i=0; i<result.length; i++){
		console.log(result[i].item_id);
		var currId = result[i].id;
		connection.query("UPDATE content_fields SET content_id = " + currId + " WHERE content_id = ?", result[i].item_id, function(err){
			if (err) throw err;
		});
	}
});

app.use(router);

app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});
